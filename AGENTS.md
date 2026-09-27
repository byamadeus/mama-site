<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Working in this repo

This file is for every AI agent working on this project — Claude, Codex,
or anything else. If you're a human, it's worth a skim too. Read
`README.md` for the current architecture (what's actually live, the
typren content layer for future pages) and `CONTEXT.md` for background on
Tajči herself, including a few sensitive items that need family sign-off
before they go on the site.

## Before you commit or push

- Get the change building and lint-clean first (`npm run lint`,
  `npm run build`) before considering it done.
- Committing locally is fine to do freely. **Before pushing to the
  remote, opening a PR, or merging — stop and ask the user first**,
  with a short summary of what changed. Don't push/merge on your own
  judgment even if the change seems small.
- **Never push directly to `main`** (e.g. `git push origin
  branch:main`). It doesn't reliably trigger a Vercel deployment on this
  project — we hit this directly, silently, more than once. Always go
  branch → PR → merge, even for a one-line change. Vercel auto-deploys
  `main` to production on every merge, so a merge here **is** a
  production deploy — that's exactly why it needs confirmation first,
  not a rubber stamp after the fact.
- If your branch and `main` have diverged only because `main` was
  squash-merged past your branch's own history (content is identical,
  just different commit objects), it's fine to reset your branch onto
  `origin/main` and re-apply your commit — check `git diff` between the
  two is empty first.

## Style guide

The live site (`/`) is a single-page, photo-driven microsite. Match this
system rather than introducing a new one:

- **Monochrome. No gradients, ever.** Black background, white text,
  black-and-white photography treatment (a flat `bg-black/35` overlay
  for legibility, not a gradient scrim). This was an explicit, repeated
  request — don't reintroduce color or gradients without being asked.
- **Fonts, each with one job**, all loaded once in `lib/fonts.ts` and
  imported from there (don't call the Google Font loader again in a new
  file):
  - `merriweatherSans` (Merriweather Sans, weight 800) — the big poster
    nav links only.
  - `bebasNeue` (Bebas Neue) — footer CTAs and the copyright line.
  - Everything else falls back to the system font stack (no font is
    loaded for body copy — there mostly isn't any).
- **Photography is real**, not stock or placeholder. `public/photos/`
  holds actual performance photos; the background is chosen at random
  client-side on every load (see `MicrositeHome.tsx`) so it isn't baked
  into the static HTML.
- **Layout language**: corner-pinned, poster-style composition — the
  logo bottom-left, the primary nav bottom-right, right-aligned. Footer
  is a plain horizontal bar (stacks on mobile). Buttons are full-round
  pills with a white border that invert (white fill, black text) on
  hover.

## Atomic design structure

Components are organized by size, smallest first:

- **`components/ui/`** — atoms. No business logic, no data fetching, no
  knowledge of what page they're on. `Logo`, `PillButton`, `SocialIcon`,
  `NavLink`. Each renders one thing and takes props for the parts that
  vary.
- **`components/*.tsx`** (outside `ui/`) — molecules and organisms.
  `SocialLinks` and `PrimaryNav` are molecules (a themed list of one
  atom, own their data). `MicrositeHome` and `MicrositeFooter` are
  organisms (compose molecules/atoms into a full page section).
- **`lib/links.ts`** — every external URL the site points to, in one
  place. If you're about to paste a URL into a component, check here
  first — and if it's not here yet, add it here rather than inlining it,
  even if you think it's only used once today.
- **`lib/fonts.ts`** — the shared font instances, described above.

When adding something new: build the smallest reusable piece first
(atom), then compose. Don't create a one-off styled `<a>` inline in a
page component if `PillButton` or `NavLink` already covers it — extend
the atom's props instead of duplicating its Tailwind classes.

New pages beyond the current homepage should go through typren's
content layer (`content/*.md` + `slices/`) rather than hardcoded JSX —
see `README.md`'s "Content layer: typren" section for the current state
of that (the visual editor isn't published yet, but the content/slice
pattern works today).

## Icons — pull from the same two places

- **`lucide-react`** for generic UI icons (arrows, mail, close/plus,
  anything that isn't a brand mark).
- **`react-icons`** (the `si` subset — Simple Icons — for brand logos;
  `fa6` as a fallback when a mark isn't in `si`, as with LinkedIn today)
  for social/brand icons. `lucide-react` deliberately ships no brand
  logos — don't reach for a raw SVG or a third icon package to fill the
  gap, `react-icons` almost certainly already has it.
- Don't add a third icon library. If neither of the above has what you
  need, ask before installing something new.

## Responsive design approach

Mobile-first Tailwind: unprefixed classes are the mobile baseline,
`sm:`/`md:` layer on larger-screen overrides — don't write `lg:`-first
or desktop-first classes. Check both a narrow phone width (~390px) and a
laptop width (~1440px) before calling a layout change done; a couple of
screenshots at those two sizes is enough, doesn't need to be exhaustive.
