import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import PillNav from "@/components/PillNav";

const EXPLORE = [
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
] as const;

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/9]">
          <PhotoPlaceholder
            label="Tajci, performing"
            aspect="h-full"
            labelPosition="top"
            className="h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-5 px-4 pb-10 text-center sm:pb-14">
            <h1 className="font-display text-5xl italic text-white sm:text-6xl">
              Tajci
            </h1>
            <p className="max-w-sm text-balance text-base text-white/90 sm:text-lg">
              A storyteller whose language is music.
            </p>
            <PillNav />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-8">
        <p className="text-balance text-lg leading-relaxed text-foreground sm:text-xl">
          Tajci brings songs to life that tell a story — of love, longing,
          belonging, of friends coming together and dancing. She creates
          experiences with the potential to move a person out of their
          comfort zone and into a world in color, emotion, and music.
        </p>
      </section>

      <section className="border-y border-line bg-surface px-4 py-10 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Currently
          </span>
          <p className="font-display text-2xl text-foreground">
            A new project is taking shape
          </p>
          <p className="max-w-md text-sm text-muted">
            Details coming soon — join the newsletter below to hear first.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {EXPLORE.map(({ href, label, tone, copy }) => (
            <Link key={href} href={href} className="group flex flex-col gap-3">
              <PhotoPlaceholder label={label} tone={tone} aspect="aspect-square" />
              <div>
                <p className="font-display text-lg text-foreground group-hover:text-accent">
                  {label}
                </p>
                <p className="text-sm text-muted">{copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
