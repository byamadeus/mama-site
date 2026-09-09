"use client";

import { useEffect, useState } from "react";
import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

const BACKGROUNDS = [
  {
    src: "/photos/photo-1.jpg",
    alt: "Tajči performing live on stage with a full orchestra",
  },
  {
    src: "/photos/photo-2.jpg",
    alt: "Tajči singing in a green sequined gown, close up on stage",
  },
  {
    src: "/photos/photo-3.jpg",
    alt: "Tajči performing in a black gown with an orchestra behind her",
  },
];

const NAV_LINKS = [
  { label: "Shows", href: "https://www.instagram.com/tajcicameron/?hl=en" },
  { label: "Music", href: "https://open.spotify.com/artist/0ugmPqO8dNY1CLfjYwUwZK" },
  { label: "Speaking", href: "https://www.linkedin.com/in/tatiana-cameron/" },
  {
    label: "Coaching",
    href: "https://tajcicameron.typeform.com/to/OD2UUu?typeform-source=tatianacameron.com",
  },
  {
    label: "Books",
    href: "https://www.amazon.com/s?k=Tatiana+%22Tajci%22+Cameron&i=audible&ref=dp_byline_sr_audible_1",
  },
] as const;

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export default function MicrositeHome() {
  const [background, setBackground] = useState<
    (typeof BACKGROUNDS)[number] | null
  >(null);

  useEffect(() => {
    // Picked client-side, after mount, so every real page load gets a
    // fresh random choice instead of one baked into the static HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBackground(pickRandom(BACKGROUNDS));
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {background && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={background.src}
          alt={background.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700"
        />
      )}
      <div className="absolute inset-0 bg-black/35" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Tajči"
        className={`absolute bottom-6 left-6 z-10 w-32 transition-opacity duration-500 sm:bottom-10 sm:left-10 sm:w-48 md:w-56 ${
          background ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-0.5 text-right sm:bottom-10 sm:right-10 sm:gap-1">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${merriweatherSans.className} text-2xl font-extrabold uppercase leading-[1.1] tracking-tight text-white transition-opacity hover:opacity-70 sm:text-4xl md:text-5xl`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
