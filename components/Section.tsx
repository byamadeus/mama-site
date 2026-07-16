import type { ReactNode } from "react";

const WIDTHS = {
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
} as const;

const PADDINGS = {
  bottom: "pb-20 sm:pb-28",
  both: "py-20 sm:py-28",
} as const;

export default function Section({
  width = "2xl",
  padding = "bottom",
  className = "",
  children,
}: {
  width?: keyof typeof WIDTHS;
  padding?: keyof typeof PADDINGS;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`px-4 sm:px-8 ${PADDINGS[padding]} ${className}`}>
      <div className={`mx-auto ${WIDTHS[width]}`}>{children}</div>
    </section>
  );
}
