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

## Operator checklist — mandatory, in order

This section is deliberately strict. It exists because a previous session
broke the production build by pushing content that was never built
locally first. If you are an AI agent making changes here, follow these
steps in order, every time, no exceptions.

1. **Read before you write.** Before touching any file, read this whole
   file (`AGENTS.md`), `README.md`, and `CONTEXT.md` start to finish — not
   a skim, not a grep for one section. If you're about to write Next.js
   code and haven't yet, also read the relevant guide under
   `node_modules/next/dist/docs/` per the notice at the top of this file.
   If you can't summarize in one or two sentences what the style guide,
   the atomic component structure, and the current architecture are, you
   are not ready to write code yet — go back and read.
2. **Match the existing style exactly, don't invent a new one.** Follow
   "Style guide," "Atomic design structure," and "Icons" below to the
   letter: monochrome only, the two fonts from `lib/fonts.ts` and nothing
   else, every external URL added to `lib/links.ts` rather than inlined,
   new UI built from `components/ui/` atoms (extend them, don't duplicate
   their Tailwind classes or add a competing one-off component). If a
   choice isn't covered by the docs, look at how the existing homepage
   components solved a similar problem and match that, rather than
   picking your own approach.
3. **Never decide content on your own — ask.** Anything that states a
   fact about Tajči, her family, her history, or makes a judgment call
   about what to publish (wording of a bio, which credential to lead
   with, whether to mention something from `CONTEXT.md`'s "sensitive
   items" or "open questions for the family" list, which link a CTA
   should point to, which photo represents her work) is a content
   decision, not a coding decision. Stop and ask the human you're working
   with a specific, answerable question before writing it. Don't guess,
   don't paraphrase around a gap, and don't leave a placeholder that
   quietly implies an answer — ask.
4. **Prove it builds before you commit or push.** Run `npm run lint` and
   `npm run build` locally and confirm both finish with zero errors —
   every time, before every commit that touches code or content
   (`content/*.md` frontmatter is real YAML and breaks the build just
   like broken TypeScript does). Do not commit "to see what happens" and
   do not push a red build hoping it'll pass in CI — there is no CI gate
   here, a broken `main` build is a broken production site for the whole
   family. If lint or build fails and you don't immediately understand
   why, that's a stop condition — see step 5, don't push past it.
5. **When you hit a technical wall, stop — don't work around it.** If
   something doesn't build, doesn't deploy, or behaves in a way you can't
   explain after reading this file, `README.md`, and the relevant
   `node_modules/next/dist/docs/` guide: do not disable checks, do not
   use `--no-verify`, do not force-push, do not delete or rewrite the
   content causing the problem just to make the error go away, and do not
   keep guessing at fixes one after another. Stop, leave your work
   committed on your branch, write down exactly what you tried and the
   exact error, and ask one of the engineers on this project (Evan /
   `byamadeus`, or Claude) for help. Getting a build green by hiding the
   error is worse than leaving it red and asking.
6. **Commit freely; pushing and merging need a human.** Local commits on
   your own branch are cheap — make them as you go. But per "Before you
   commit or push" below: never push directly to `main`, and always stop
   and ask the human first before pushing to the remote, opening a PR, or
   merging, even for a change that feels small or obviously correct.

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
