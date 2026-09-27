import type { ReactNode } from "react";
import { merriweatherSans } from "@/lib/fonts";

/** One big, right-aligned poster-nav word (the Shows/Music/... links). */
export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${merriweatherSans.className} text-2xl font-extrabold uppercase leading-[1.1] tracking-tight text-white transition-opacity hover:opacity-70 sm:text-4xl md:text-5xl`}
    >
      {children}
    </a>
  );
}
