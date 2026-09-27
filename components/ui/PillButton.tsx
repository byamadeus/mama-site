import type { ReactNode } from "react";
import { bebasNeue } from "@/lib/fonts";

/** The bordered, all-caps-via-Bebas-Neue CTA pill (footer buttons today). */
export default function PillButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${bebasNeue.className} rounded-full border border-white/30 px-6 py-2 text-lg tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
}
