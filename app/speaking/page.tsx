import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EmbedPlaceholder from "@/components/EmbedPlaceholder";
import WhyCard from "@/components/WhyCard";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Tajci creates experiences that move audiences out of their comfort zone and into color, emotion, and meaning.",
};

const THEMES = [
  "Creativity as a way through hard seasons",
  "Finding meaning through story and music",
  "Mentoring and second chances",
];

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        title="Speaking"
        tagline="Experiences that move a room out of its comfort zone."
        photoLabel="Tajci, speaking"
        tone={1}
      />

      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-8">
        <WhyCard
          title="Why she speaks"
          hook="A window into something magical, not just a talk."
          body="Tajci creates experiences for audiences to feel something — a window into something magical, intense, into a world in color, emotion, and movement, touching the purpose and meaning of life."
        />
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Watch
          </h2>
          <EmbedPlaceholder label="Speaking reel — add YouTube link" />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Themes
          </h2>
          <ul className="flex flex-col gap-4">
            {THEMES.map((theme) => (
              <li
                key={theme}
                className="rounded-lg border border-line bg-surface px-6 py-4 text-center font-display text-lg font-medium text-foreground"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface px-4 py-14 text-center sm:px-8">
        <p className="font-display text-2xl font-medium text-foreground">
          For booking inquiries
        </p>
        <a
          href="mailto:booking@tajci.com"
          className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </section>
    </>
  );
}
