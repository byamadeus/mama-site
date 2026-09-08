import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const siteName = "Tajči";
const description =
  "Tajči (Tatiana Cameron) — storyteller whose language is music. Pop and jazz singer, speaker, and certified coach. Shows, music, speaking, coaching, and books.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tajči",
    template: "%s — Tajči",
  },
  description,
  keywords: [
    "Tajči",
    "Tatiana Cameron",
    "Tajci Cameron",
    "singer",
    "speaker",
    "life coach",
    "Eurovision",
    "author",
  ],
  authors: [{ name: "Tajči" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tajči — Shows, Music, Speaking, Coaching, Books",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/twitter-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tatiana Cameron",
  alternateName: "Tajči",
  description,
  url: siteUrl,
  image: `${siteUrl}/photos/photo-2.jpg`,
  sameAs: [
    "https://www.instagram.com/tajcicameron/",
    "https://www.facebook.com/tajci.cameron/",
    "https://www.linkedin.com/in/tatiana-cameron/",
    "https://www.youtube.com/c/TajciCameron-TYchi",
    "https://www.patreon.com/WakingUP",
    "https://open.spotify.com/artist/0ugmPqO8dNY1CLfjYwUwZK",
  ],
  jobTitle: ["Singer", "Speaker", "Life Coach", "Author"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
