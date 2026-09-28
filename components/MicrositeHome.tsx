"use client";

import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import PrimaryNav from "./PrimaryNav";

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

      <Logo
        className={`absolute bottom-6 left-6 z-10 w-32 transition-opacity duration-500 sm:bottom-10 sm:left-10 sm:w-48 md:w-56 ${
          background ? "opacity-100" : "opacity-0"
        }`}
      />

      <PrimaryNav />
    </div>
  );
}
