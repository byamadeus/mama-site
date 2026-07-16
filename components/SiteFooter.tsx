import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Patreon", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="font-display text-xl text-foreground">Tajci</p>
        <p className="max-w-md text-sm text-muted">
          New music, tour dates, and stories land first in the monthly
          newsletter and on Patreon.
        </p>
        <a
          href="#"
          className="rounded-full border border-line px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-line/60"
        >
          Join the newsletter
        </a>
        <nav
          aria-label="Social"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {SOCIAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Tajci. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
