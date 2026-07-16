import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WhyCard from "@/components/WhyCard";
import Section from "@/components/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

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

      <Section width="2xl">
        <div className="flex flex-col gap-4">
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
        </div>
      </Section>

      <Section width="3xl">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <PhotoPlaceholder
            label="Book cover"
            tone={1}
            aspect="aspect-[3/4]"
          />
          <div className="text-center sm:text-left">
            <Eyebrow as="h2" className="mb-3">
              Books
            </Eyebrow>
            <p className="font-display text-2xl font-medium text-foreground">
              Her story, in print
            </p>
            <Button href="#" variant="outline" className="mt-5">
              Read more
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
