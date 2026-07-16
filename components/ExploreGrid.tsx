import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { SECTIONS } from "@/lib/sections";

export default function ExploreGrid() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {SECTIONS.map(({ href, label, tone, copy }) => (
        <Link key={href} href={href} className="group flex flex-col gap-4">
          <PhotoPlaceholder
            label={label}
            tone={tone}
            aspect="min-h-[70vh] sm:min-h-[85vh]"
            className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                {label}
              </p>
              <p className="mt-1 text-muted">{copy}</p>
            </div>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-foreground"
              strokeWidth={1.5}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
