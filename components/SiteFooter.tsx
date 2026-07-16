import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <p className="text-lg font-semibold tracking-tight text-foreground">
          Tajci
        </p>
        <p className="max-w-md text-sm text-muted">
          New music, tour dates, and stories land first in the monthly
          newsletter and on Patreon.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface"
        >
          Join the newsletter
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <nav
          aria-label="Social"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {SOCIAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              {label}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
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
