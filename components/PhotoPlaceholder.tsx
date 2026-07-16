import { ImageIcon } from "lucide-react";

const FILLS = ["bg-neutral-100", "bg-neutral-200", "bg-neutral-300"] as const;

export default function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/5]",
  tone = 0,
  className = "",
}: {
  label: string;
  aspect?: string;
  tone?: 0 | 1 | 2;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-line ${FILLS[tone]} ${aspect} ${className}`}
    >
      <ImageIcon className="h-5 w-5 text-muted" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs text-muted">
        Photo — {label}
      </span>
    </div>
  );
}
