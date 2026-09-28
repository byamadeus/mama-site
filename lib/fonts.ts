import { Merriweather_Sans, Bebas_Neue } from "next/font/google";

/**
 * Shared font instances. Import these rather than calling the Google Font
 * loader again in each component — next/font/google is meant to be
 * instantiated once per font and reused, not re-declared per file.
 */
export const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
