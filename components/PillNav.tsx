"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/music", label: "Music" },
  { href: "/speaking", label: "Speaking" },
  { href: "/coaching", label: "Coaching" },
  { href: "/about", label: "About" },
];

export default function PillNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-1 rounded-full border border-line bg-surface/90 p-1 shadow-sm backdrop-blur"
    >
      {LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
              active
                ? "bg-accent text-accent-foreground"
                : "text-foreground hover:bg-line/60"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
