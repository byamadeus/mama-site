import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const VARIANTS = {
  solid: "bg-accent text-accent-foreground hover:opacity-90",
  outline: "border border-line text-foreground hover:bg-surface",
} as const;

const SIZES = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
} as const;

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-md text-sm font-medium transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
