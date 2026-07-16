import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EmbedPlaceholder from "@/components/EmbedPlaceholder";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Tajci's pop and jazz songs and watch performance videos.",
};

const ALBUMS = ["Latest release", "Live sessions", "Early catalog"];

export default function MusicPage() {
  return (
    <>
      <PageHero
        title="Music"
        tagline="Songs that tell a story — of love, longing, and belonging."
        photoLabel="Tajci, on stage"
        tone={0}
      />

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-8">
        <p className="text-balance text-lg leading-relaxed text-foreground sm:text-xl">
          Pop and jazz songs built to be felt live — for audiences, and for
          anyone booking her to get a sense of who she is on a stage.
        </p>
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Listen
          </h2>
          <EmbedPlaceholder label="Spotify embed — add link" />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Watch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <EmbedPlaceholder label="Performance video — add YouTube link" />
            <EmbedPlaceholder label="Performance video — add YouTube link" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Discography
          </h2>
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
        </div>
      </section>

      <section className="border-t border-line bg-surface px-4 py-14 text-center sm:px-8">
        <p className="font-display text-2xl text-foreground">
          For booking inquiries
        </p>
        <a
          href="mailto:booking@tajci.com"
          className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </section>
    </>
  );
}
