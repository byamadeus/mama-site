"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

export default function SiteHeader() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const current = SECTIONS.find((section) => section.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 px-4 py-4 backdrop-blur sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        Tajci
        {current && (
          <>
            <span className="text-line">/</span>
            <span className="text-foreground">{current.label}</span>
          </>
        )}
      </Link>
    </header>
  );
}
