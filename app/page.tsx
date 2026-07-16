import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WhyCard from "@/components/WhyCard";

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
      <PageHero
        title="Tajci"
        tagline="A storyteller whose language is music."
        photoLabel="Tajci, performing"
        tone={0}
      />

      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-8">
        <WhyCard
          title="Why she does this"
          hook="It's about what a song can open up in a room."
          body="Tajci creates experiences with the potential to move a person out of their comfort zone and regular routines — a window into something magical, into a world in color, emotion, music, and movement, touching the purpose and meaning of life."
        />
      </section>

      <section className="border-y border-line bg-surface px-4 py-10 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="text-sm text-muted">Currently</span>
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
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3"
            >
              <PhotoPlaceholder
                label={label}
                tone={tone}
                aspect="aspect-square"
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div>
                <p className="font-display text-lg text-foreground">
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
