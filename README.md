# Tajči — microsite

Next.js (App Router) + Tailwind CSS. The live site is a single-page
microsite: a full-bleed random concert photo, the wordmark pinned
bottom-left, a Shows/Music/Speaking/Coaching/Books nav pinned bottom-right,
and a small footer with socials + a newsletter CTA.

Read `CONTEXT.md` first — it has background research on Tajči (real name,
career, existing web presence, sensitive items to confirm with the family
before publishing) gathered from public sources.

## What's actually live

- `app/page.tsx` — renders `MicrositeHome` (the hero/nav) and
  `MicrositeFooter` (socials + newsletter CTA)
- `components/MicrositeHome.tsx` — picks one of `public/photos/*.jpg` at
  random on every real page load (client-side, after mount, so it isn't
  baked into the static HTML), logo bottom-left, nav bottom-right in
  Merriweather Sans
- `components/MicrositeFooter.tsx` — Instagram/Facebook/LinkedIn/Patreon/
  YouTube/email icons (`react-icons`, since `lucide-react` deliberately
  ships no brand logos) plus a Bebas Neue newsletter CTA
- `public/logo.svg`, `public/photos/photo-{1,2,3}.jpg` — the real assets
  in use

That's the entire visible site right now — no other routes are linked
from anywhere. Keep it that way: if a page or component isn't reachable
from `/`, it shouldn't be sitting in the repo.

## Content layer: typren

This project is set up to use [typren](https://github.com/typren/typren)
for any *new* pages going forward, per an active beta test. It's a
markdown-based content layer — pages are `content/*.md` files with
frontmatter, rendered as an ordered list of "slices" (typed React
components registered in `slices/registry.ts`).

**Current state (typren v0.2.2):** the CLI (`typren`) and core engine
(`@typren/core`) are published and wired in — `cms.config.ts` and
`cms-actions.ts` both work today. `@typren/editor`, the actual visual
editor UI, is **not published to npm yet** — so there's no browser-based
editing experience yet. Until it ships, "editing content" means editing
the markdown files directly (or asking Claude to).

- `typren.config.json` — adminRoute/locales/defaultLocale bootstrap
- `cms.config.ts` — wires the markdown adapter (reads `content/`), local
  auth (dev-only gate, fails closed in production), and a media adapter
  (`public/img/`)
- `cms-actions.ts` — `saveDraft`/`publish`/`createPage`/`deletePage`/media
  Server Actions. No UI drives these yet; they're the write surface for
  scripts, a future admin tool, or agent-driven edits
- `slices/` — `registry.ts` (slice name → component), `defaults.ts`
  (starter props), `field-schema.ts` (editor field hints, inert until
  `@typren/editor` exists), plus the actual slice components
  (`hero.tsx`, `prose.tsx` are the CLI's generic starters — replace them
  with real ones as pages get built)
- `content/home.md`, `content/site.md` — example content from the
  scaffold. Nothing renders these yet; the live homepage is the bespoke
  `MicrositeHome` component, not a typren page — that's intentional,
  it's custom art direction, not a good fit for generic slices

**Building a new page with it:**

```tsx
import { cmsStore } from "@/cms.config";
import { SliceZone } from "@/slices/slice-zone";

export default function AboutPage() {
  const page = cmsStore.getPublished("about"); // content/about.md
  return <SliceZone slices={page.slices} />;
}
```

Add a `content/about.md` with frontmatter slices, register any new slice
components in `slices/registry.ts`, and it renders. Keep building slices
that match the site's actual design system rather than the generic
starters.

`npx typren apply-settings` reconciles `next.config.ts` with
`typren.config.json` once `@typren/editor` is actually installed and
there's a real `/editor` route to rewrite to — no need to run it before
then.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

Stock Next.js app on Vercel, connected to this repo's `main` branch —
every merge to `main` deploys to production automatically.
