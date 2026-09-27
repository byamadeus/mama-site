import NavLink from "./ui/NavLink";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { label: "Shows", href: LINKS.instagram },
  { label: "Music", href: LINKS.spotify },
  { label: "Speaking", href: LINKS.linkedin },
  { label: "Coaching", href: LINKS.coachingIntake },
  { label: "Books", href: LINKS.booksAmazon },
] as const;

export default function PrimaryNav() {
  return (
    <nav className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-0.5 text-right sm:bottom-10 sm:right-10 sm:gap-1">
      {NAV_LINKS.map(({ label, href }) => (
        <NavLink key={label} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
