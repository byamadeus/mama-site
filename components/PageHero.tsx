import PhotoPlaceholder from "./PhotoPlaceholder";

export default function PageHero({
  title,
  tagline,
  photoLabel,
  tone = 0,
}: {
  title: string;
  tagline: string;
  photoLabel: string;
  tone?: 0 | 1 | 2;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-10 pt-14 sm:px-8 sm:pb-16 sm:pt-24">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-16">
        <div>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-sm text-lg text-muted">{tagline}</p>
        </div>
        <PhotoPlaceholder
          label={photoLabel}
          tone={tone}
          aspect="aspect-[4/5]"
          className="w-full"
        />
      </div>
    </section>
  );
}
