import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyCard from "@/components/WhyCard";
import Section from "@/components/Section";
import Band from "@/components/Band";
import CardList from "@/components/CardList";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one coaching with Tajci, limited to five clients a month.",
};

const INCLUDES = [
  "Monthly one-on-one sessions",
  "Direct access between sessions",
  "A space built for creative and personal growth",
] as const;

export default function CoachingPage() {
  return (
    <>
      <PageHero
        title="Coaching"
        tagline="Limited to five clients a month, by design."
        photoLabel="Tajci, in conversation"
        tone={2}
      />

      <Section width="2xl">
        <WhyCard
          title="Why only five"
          hook="Real attention doesn't scale — so it isn't asked to."
          body="Tajci loves creating opportunities for other creatives and mentoring people through change. Coaching is kept small on purpose — real attention, for a handful of people at a time."
        />
      </Section>

      <Section width="xl">
        <Eyebrow as="h2" className="mb-6 text-center">
          What&apos;s included
        </Eyebrow>
        <CardList items={INCLUDES} />
      </Section>

      <Band>
        <Eyebrow>5 spots a month</Eyebrow>
        <p className="font-display text-2xl font-medium text-foreground">
          Apply to work together
        </p>
        <Button href="mailto:coaching@tajci.com">Apply now</Button>
      </Band>
    </>
  );
}
