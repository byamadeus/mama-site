"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/music", label: "Music" },
  { href: "/speaking", label: "Speaking" },
  { href: "/coaching", label: "Coaching" },
  { href: "/about", label: "About" },
];

export default function SegmentedNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-0.5 rounded-lg border border-line bg-surface p-1"
    >
      {LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
