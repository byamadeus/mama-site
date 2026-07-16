import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WhyCard from "@/components/WhyCard";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Tajci's music, speaking, and coaching.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        tagline="A storyteller whose language is music."
        photoLabel="Tajci, portrait"
        tone={0}
      />

      <section className="mx-auto flex max-w-2xl flex-col gap-4 px-4 pb-16 sm:px-8">
        <WhyCard
          title="Why music is her language"
          hook="Songs as a window into something bigger."
          body="Tajci is a pop and jazz singer and musician who loves creating experiences for people in which they feel something — experiences that have the potential to move a person out of their comfort zone, out of their regular routines, and provide a window into something magical, intense, into a world in color, emotion, music, and movement. She loves bringing songs to life that tell a story — of love, longing, belonging, of friends coming together and dancing."
        />
        <WhyCard
          title="Why she mentors"
          hook="Creativity and second chances, off the stage."
          body="She loves beauty and creativity, creating opportunities for other creatives, and mentoring women in prison."
        />
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-3xl items-center gap-8 sm:grid-cols-2">
          <PhotoPlaceholder label="Book cover" tone={1} aspect="aspect-[3/4]" />
          <div className="text-center sm:text-left">
            <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Books
            </h2>
            <p className="font-display text-2xl font-medium text-foreground">
              Her story, in print
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Read more
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
