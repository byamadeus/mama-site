export const SECTIONS = [
  {
    href: "/music",
    label: "Music",
    tone: 0,
    copy: "Pop and jazz songs that tell a story.",
  },
  {
    href: "/speaking",
    label: "Speaking",
    tone: 1,
    copy: "Experiences that move people out of the ordinary.",
  },
  {
    href: "/coaching",
    label: "Coaching",
    tone: 2,
    copy: "Limited to five clients a month.",
  },
  {
    href: "/about",
    label: "About",
    tone: 0,
    copy: "The story behind the songs.",
  },
] as const satisfies ReadonlyArray<{
  href: string;
  label: string;
  tone: 0 | 1 | 2;
  copy: string;
}>;
