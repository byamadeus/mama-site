import type { ReactNode } from "react";

export default function Eyebrow({
  as: Tag = "p",
  className = "",
  children,
}: {
  as?: "p" | "h2" | "span";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={`font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted ${className}`}
    >
      {children}
    </Tag>
  );
}
