# Tajci — landing site

Next.js (App Router) + Tailwind CSS. Photo-driven, mobile-first, minimal
type — built to work as a link-in-bio destination as well as a standalone
site.

## Structure

Each of Tajci's areas is a real route, not just a page section, so each
can be linked to independently (e.g. for a speaking bureau or a booker):

- `/` — hub/hero with a pill nav into the four areas
- `/music`
- `/speaking`
- `/coaching`
- `/about`

Shared UI lives in `components/`:

- `PillNav` — the Music / Speaking / Coaching / About nav, highlights the
  active route
- `SiteHeader` / `SiteFooter` — persistent chrome
- `PageHero` — full-bleed photo hero used by each sub-page
- `PhotoPlaceholder` — warm gradient placeholder standing in for real
  photography (see "Replacing placeholders" below)
- `EmbedPlaceholder` — stand-in for Spotify/Apple Music/YouTube embeds

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Replacing placeholders

Everything visual is a placeholder until real assets are provided:

- **Photos** — swap `<PhotoPlaceholder ... />` for a real `next/image`
  (drop files in `public/` and reference them).
- **Music** — replace the `EmbedPlaceholder` in `app/music/page.tsx` with
  a real Spotify/Apple Music embed `<iframe>`.
- **Video** — replace the `EmbedPlaceholder`s in `app/music/page.tsx` and
  `app/speaking/page.tsx` with YouTube embeds.
- **Booking / coaching links** — the `mailto:` links in `app/music`,
  `app/speaking`, and `app/coaching` should be swapped for real contact
  or booking-form links.
- **Books** — `app/about/page.tsx` has a placeholder cover + link.
- **Newsletter / social** — `components/SiteFooter.tsx` has placeholder
  `href="#"` links for Instagram, Spotify, YouTube, Patreon, and the
  newsletter signup.

## Deploying

This is a stock Next.js app, so it deploys to Vercel with no extra config:
push this repo to GitHub, then import it at https://vercel.com/new. Every
push to this branch gets its own preview URL for checking on mobile.
