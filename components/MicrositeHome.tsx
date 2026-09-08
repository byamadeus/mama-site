"use client";

import { useEffect, useState } from "react";

const BACKGROUNDS = [
  "/photos/photo-1.jpg",
  "/photos/photo-2.jpg",
  "/photos/photo-3.jpg",
];

const LOGO_PLACEMENTS = [
  { align: "items-start justify-start", rotate: false },
  { align: "items-center justify-start", rotate: false },
  { align: "items-end justify-start", rotate: false },
  { align: "items-end justify-start", rotate: true },
  { align: "items-start justify-start", rotate: true },
  { align: "items-center justify-center", rotate: false },
] as const;

const NAV_LINKS = [
  { label: "Shows", href: "https://www.instagram.com/tajcicameron/?hl=en" },
  { label: "Music", href: "https://open.spotify.com/artist/0ugmPqO8dNY1CLfjYwUwZK" },
  { label: "Speaking", href: "#" },
  {
    label: "Coaching",
    href: "https://tajcicameron.typeform.com/to/OD2UUu?typeform-source=tatianacameron.com",
  },
  {
    label: "Books",
    href: "https://www.amazon.com/Books-Tatiana-Tajci-Cameron/s?rh=n:283155,p_27:Tatiana+%2527Tajci%2527+Cameron",
  },
] as const;

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export default function MicrositeHome() {
  const [background, setBackground] = useState<string | null>(null);
  const [placement, setPlacement] = useState<
    (typeof LOGO_PLACEMENTS)[number] | null
  >(null);

  useEffect(() => {
    // Picked client-side, after mount, so every real page load gets a
    // fresh random choice instead of one baked into the static HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBackground(pickRandom(BACKGROUNDS));
    setPlacement(pickRandom(LOGO_PLACEMENTS));
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {background && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700"
        />
      )}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex flex-col sm:grid sm:min-h-screen sm:grid-cols-2">
        <div
          className={`flex min-h-[38vh] p-8 sm:min-h-0 sm:p-12 ${placement?.align ?? "items-center justify-center"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Tajci"
            className={`w-44 transition-opacity duration-500 sm:w-56 ${
              background ? "opacity-100" : "opacity-0"
            } ${placement?.rotate ? "-rotate-90" : ""}`}
          />
        </div>

        <nav className="flex flex-col justify-center gap-1 p-8 sm:gap-2 sm:p-12">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href === "#" ? undefined : "_blank"}
              rel={href === "#" ? undefined : "noopener noreferrer"}
              className="text-[clamp(2.75rem,16vw,5rem)] font-bold uppercase leading-[1.05] tracking-tight text-white transition-opacity hover:opacity-70 sm:text-6xl"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
