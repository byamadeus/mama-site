import type { ComponentType } from "react";

/** One icon-only social/contact link. Icon comes from lucide-react (generic
 * UI glyphs) or react-icons (brand marks) — see lib/links.ts's callers for
 * which is which. */
export default function SocialIcon({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-white/70 transition-colors hover:text-white"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
