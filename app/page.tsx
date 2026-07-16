import PageHero from "@/components/PageHero";
import WhyCard from "@/components/WhyCard";
import Section from "@/components/Section";
import Band from "@/components/Band";
import ExploreGrid from "@/components/ExploreGrid";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Home() {
  return (
    <>
      <PageHero
        title="Tajci"
        tagline="A storyteller whose language is music."
        photoLabel="Tajci, performing"
        tone={0}
      />

      <Section width="2xl">
        <WhyCard
          title="Why she does this"
          hook="It's about what a song can open up in a room."
          body="Tajci creates experiences with the potential to move a person out of their comfort zone and regular routines — a window into something magical, into a world in color, emotion, music, and movement, touching the purpose and meaning of life."
        />
      </Section>

      <Band border="y" padding="sm">
        <Eyebrow>Currently</Eyebrow>
        <p className="font-display text-2xl font-medium text-foreground">
          A new project is taking shape
        </p>
        <p className="max-w-md text-sm text-muted">
          Details coming soon — join the newsletter below to hear first.
        </p>
      </Band>

      <Section width="5xl" padding="both">
        <ExploreGrid />
      </Section>
    </>
  );
}
