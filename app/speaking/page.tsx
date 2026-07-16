import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EmbedPlaceholder from "@/components/EmbedPlaceholder";
import WhyCard from "@/components/WhyCard";
import Section from "@/components/Section";
import Band from "@/components/Band";
import CardList from "@/components/CardList";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Tajci creates experiences that move audiences out of their comfort zone and into color, emotion, and meaning.",
};

const THEMES = [
  "Creativity as a way through hard seasons",
  "Finding meaning through story and music",
  "Mentoring and second chances",
] as const;

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        title="Speaking"
        tagline="Experiences that move a room out of its comfort zone."
        photoLabel="Tajci, speaking"
        tone={1}
      />

      <Section width="2xl">
        <WhyCard
          title="Why she speaks"
          hook="A window into something magical, not just a talk."
          body="Tajci creates experiences for audiences to feel something — a window into something magical, intense, into a world in color, emotion, and movement, touching the purpose and meaning of life."
        />
      </Section>

      <Section width="3xl">
        <Eyebrow as="h2" className="mb-4 text-center">
          Watch
        </Eyebrow>
        <EmbedPlaceholder label="Speaking reel — add YouTube link" />
      </Section>

      <Section width="xl">
        <Eyebrow as="h2" className="mb-6 text-center">
          Themes
        </Eyebrow>
        <CardList items={THEMES} />
      </Section>

      <Band>
        <p className="font-display text-2xl font-medium text-foreground">
          For booking inquiries
        </p>
        <Button href="mailto:booking@tajci.com">Get in touch</Button>
      </Band>
    </>
  );
}
