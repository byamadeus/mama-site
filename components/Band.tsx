import type { ReactNode } from "react";

const BORDERS = {
  top: "border-t",
  y: "border-y",
} as const;

const PADDINGS = {
  sm: "py-10",
  lg: "py-14",
} as const;

export default function Band({
  border = "top",
  padding = "lg",
  children,
}: {
  border?: keyof typeof BORDERS;
  padding?: keyof typeof PADDINGS;
  children: ReactNode;
}) {
  return (
    <section
      className={`${BORDERS[border]} border-line bg-surface px-4 ${PADDINGS[padding]} text-center sm:px-8`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
        {children}
      </div>
    </section>
  );
}
