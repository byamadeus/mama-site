import Link from "next/link";
import PillNav from "./PillNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-col items-center gap-3 border-b border-line bg-background/90 px-4 py-4 backdrop-blur sm:flex-row sm:justify-between sm:px-8">
      <Link
        href="/"
        className="font-display text-2xl tracking-wide text-foreground"
      >
        Tajci
      </Link>
      <PillNav />
    </header>
  );
}
