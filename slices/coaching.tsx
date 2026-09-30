import Logo from "@/components/ui/Logo";
import PillButton from "@/components/ui/PillButton";
import { merriweatherSans } from "@/lib/fonts";
import { LINKS } from "@/lib/links";

type Section = {
  heading: string;
  body: string;
  bullets?: string[];
  note?: string;
  cta: string;
};

type Props = Readonly<{
  eyebrow: string;
  roleLine: string;
  intro: string[];
  sections: Section[];
  experience: string[];
  closing: string;
}>;

export function Coaching({
  eyebrow,
  roleLine,
  intro,
  sections,
  experience,
  closing,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <a href="/" aria-label="Tajči home">
          <Logo className="w-28 sm:w-36" />
        </a>
        <a
          href="/"
          className="text-sm uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
        >
          Home
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 sm:px-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:pb-28 md:pt-16">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/55">{eyebrow}</p>
          <h1 className={`${merriweatherSans.className} mt-4 text-6xl uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl`}>
            Coaching
          </h1>
          <p className="mt-5 text-lg tracking-wide text-white/70">{roleLine}</p>
          <div className="mt-10 max-w-2xl space-y-5 text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <PillButton href={LINKS.email} className="mt-9 inline-block">Let&apos;s Work Together</PillButton>
        </div>

        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/photo-4.jpg"
            alt="Tajči speaking on stage"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      <section className="border-y border-white/15">
        <div className="mx-auto max-w-7xl divide-y divide-white/15 px-6 sm:px-10 md:grid md:grid-cols-3 md:divide-x md:divide-y-0 md:px-0">
          {sections.map((section) => (
            <article key={section.heading} className="py-12 md:px-10 md:py-16">
              <h2 className={`${merriweatherSans.className} text-3xl uppercase leading-tight`}>{section.heading}</h2>
              <div className="mt-6 whitespace-pre-line leading-7 text-white/72">{section.body}</div>
              {section.bullets && (
                <ul className="mt-6 space-y-2 text-white/85">
                  {section.bullets.map((item) => <li key={item}>— {item}</li>)}
                </ul>
              )}
              {section.note && <p className="mt-6 leading-7 text-white/72">{section.note}</p>}
              <PillButton href={LINKS.email} className="mt-8 inline-block text-base">{section.cta}</PillButton>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.18em] text-white/50">Experience Behind the Work</p>
        <h2 className={`${merriweatherSans.className} mt-4 max-w-3xl text-4xl uppercase leading-tight sm:text-5xl`}>
          A career built across stages, organizations and communities.
        </h2>
        <div className="mt-10 grid gap-6 text-base leading-7 text-white/72 md:grid-cols-2 md:text-lg md:leading-8">
          {experience.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-14 border-l border-white/40 pl-6 sm:pl-8">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">The common thread through all of it is simple:</p>
          <p className={`${merriweatherSans.className} mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl`}>{closing}</p>
        </div>
      </section>

      <section className="border-t border-white/15 px-6 py-16 text-center sm:px-10 md:py-20">
        <h2 className={`${merriweatherSans.className} text-4xl uppercase sm:text-5xl`}>Let&apos;s Talk</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">Tatiana “Tajči” Cameron, PCC, NBC-HWC · Cameron Productions</p>
        <PillButton href={LINKS.email} className="mt-8 inline-block">Contact Me</PillButton>
      </section>
    </main>
  );
}
