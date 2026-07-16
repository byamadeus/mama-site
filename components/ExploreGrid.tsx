import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { SECTIONS } from "@/lib/sections";

export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {SECTIONS.map(({ href, label, tone, copy }) => (
        <Link key={href} href={href} className="group flex flex-col gap-3">
          <PhotoPlaceholder
            label={label}
            tone={tone}
            aspect="aspect-square"
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div>
            <p className="inline-flex items-center gap-1 font-display text-lg font-medium text-foreground">
              {label}
              <ArrowUpRight
                className="h-4 w-4 text-muted transition-colors group-hover:text-foreground"
                strokeWidth={1.5}
              />
            </p>
            <p className="text-sm text-muted">{copy}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
