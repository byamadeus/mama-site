/**
 * Single source of truth for every external destination the site links
 * to. Add a new one here rather than pasting a raw URL into a component —
 * several of these (Instagram, LinkedIn, email) are used in more than one
 * place, and duplicating the string is how they drift out of sync.
 */
export const LINKS = {
  instagram: "https://www.instagram.com/tajcicameron/?hl=en",
  facebook: "https://www.facebook.com/tajci.cameron/",
  linkedin: "https://www.linkedin.com/in/tatiana-cameron/",
  youtube: "https://www.youtube.com/c/TajciCameron-TYchi",
  patreon: "https://www.patreon.com/WakingUP",
  spotify: "https://open.spotify.com/artist/0ugmPqO8dNY1CLfjYwUwZK",
  newsletter: "https://tatianacameron.kartra.com/page/Newsletter",
  coachingIntake:
    "https://tajcicameron.typeform.com/to/OD2UUu?typeform-source=tatianacameron.com",
  booksAmazon:
    "https://www.amazon.com/s?k=Tatiana+%22Tajci%22+Cameron&i=audible&ref=dp_byline_sr_audible_1",
  email: "mailto:Team.Tajci@TatianaCameron.com",
} as const;
