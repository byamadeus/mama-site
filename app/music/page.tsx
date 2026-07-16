import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EmbedPlaceholder from "@/components/EmbedPlaceholder";
import WhyCard from "@/components/WhyCard";
import Section from "@/components/Section";
import Band from "@/components/Band";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Tajci's pop and jazz songs and watch performance videos.",
};

const ALBUMS = ["Latest release", "Live sessions", "Early catalog"] as const;

export default function MusicPage() {
  return (
    <>
      <PageHero
        title="Music"
        tagline="Songs that tell a story — of love, longing, and belonging."
        photoLabel="Tajci, on stage"
        tone={0}
      />

      <Section width="2xl">
        <WhyCard
          title="Why live music"
          hook="It's built to be felt in the room, not just streamed."
          body="Pop and jazz songs built to be felt live — for audiences, and for anyone booking her to get a sense of who she is on a stage."
        />
      </Section>

      <Section width="3xl">
        <Eyebrow as="h2" className="mb-4 text-center">
          Listen
        </Eyebrow>
        <EmbedPlaceholder label="Spotify embed — add link" />
      </Section>

      <Section width="4xl">
        <Eyebrow as="h2" className="mb-4 text-center">
          Watch
        </Eyebrow>
        <div className="grid gap-4 sm:grid-cols-2">
          <EmbedPlaceholder label="Performance video — add YouTube link" />
          <EmbedPlaceholder label="Performance video — add YouTube link" />
        </div>
      </Section>

      <Section width="4xl">
        <Eyebrow as="h2" className="mb-4 text-center">
          Discography
        </Eyebrow>
        <div className="grid grid-cols-3 gap-4">
          {ALBUMS.map((label, i) => (
            <PhotoPlaceholder
              key={label}
              label={label}
              tone={(i % 3) as 0 | 1 | 2}
              aspect="aspect-square"
            />
          ))}
        </div>
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
