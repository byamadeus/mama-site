import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyCard from "@/components/WhyCard";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one coaching with Tajci, limited to five clients a month.",
};

const INCLUDES = [
  "Monthly one-on-one sessions",
  "Direct access between sessions",
  "A space built for creative and personal growth",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        title="Coaching"
        tagline="Limited to five clients a month, by design."
        photoLabel="Tajci, in conversation"
        tone={2}
      />

      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-8">
        <WhyCard
          title="Why only five"
          hook="Real attention doesn't scale — so it isn't asked to."
          body="Tajci loves creating opportunities for other creatives and mentoring people through change. Coaching is kept small on purpose — real attention, for a handful of people at a time."
        />
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
            What&apos;s included
          </h2>
          <ul className="flex flex-col gap-4">
            {INCLUDES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-surface px-6 py-4 text-center font-display text-lg text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface px-4 py-14 text-center sm:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          5 spots a month
        </span>
        <p className="mt-2 font-display text-2xl text-foreground">
          Apply to work together
        </p>
        <a
          href="mailto:coaching@tajci.com"
          className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Apply now
        </a>
      </section>
    </>
  );
}
