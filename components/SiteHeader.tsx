import Link from "next/link";
import SegmentedNav from "./SegmentedNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-col items-center gap-3 border-b border-line bg-background/90 px-4 py-4 backdrop-blur sm:flex-row sm:justify-between sm:px-8">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        Tajci
      </Link>
      <SegmentedNav />
    </header>
  );
}
