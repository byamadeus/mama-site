/** Starter props for each registered slice, keyed by slice name; each value
 * renders without crashing. typren studio reads this file directly (see
 * docs/site/studio.md) to populate its "add slice" menu. */
export const defaults: Record<string, Record<string, unknown>> = {
  "microsite-hero": {
    backgrounds: [{ src: "/photos/photo-1.jpg", alt: "Tajči performing live" }],
    nav: [{ label: "Coaching", link: "/coaching" }],
  },
  "microsite-footer": {
    socials: [{ platform: "email", label: "Email" }],
    ctas: [{ label: "Contact Us", link: "email" }],
    copyrightName: "Tajči",
  },
  coaching: {
    eyebrow: "Tatiana “Tajči” Cameron, PCC, NBC-HWC",
    roleLine: "Speaker · Coach · Facilitator · Mentor",
    intro: ["A short intro paragraph."],
    sections: [{ heading: "Speaking & Workshops", body: "What this covers.", cta: "Inquire" }],
    experience: ["A career highlight."],
    closing: "the common thread through all of it.",
  },
};
