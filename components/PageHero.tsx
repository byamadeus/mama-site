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
    <section className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[21/9]">
        <PhotoPlaceholder
          label={photoLabel}
          tone={tone}
          aspect="h-full"
          labelPosition="top"
          className="rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-4 pb-10 text-center sm:pb-14">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-sm text-balance text-white/90 sm:text-lg">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
