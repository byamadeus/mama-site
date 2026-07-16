const GRADIENTS = [
  "from-neutral-200 via-neutral-400 to-neutral-600",
  "from-neutral-300 via-neutral-500 to-neutral-700",
  "from-neutral-200 via-neutral-500 to-neutral-800",
] as const;

export default function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/5]",
  tone = 0,
  labelPosition = "bottom",
  className = "",
}: {
  label: string;
  aspect?: string;
  tone?: 0 | 1 | 2;
  labelPosition?: "top" | "bottom" | "none";
  className?: string;
}) {
  return (
    <div
      className={`relative flex overflow-hidden rounded-2xl bg-gradient-to-br ${GRADIENTS[tone]} ${
        labelPosition === "top" ? "items-start" : "items-end"
      } ${aspect} ${className}`}
    >
      {labelPosition !== "none" && (
        <span className="m-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
          Photo — {label}
        </span>
      )}
    </div>
  );
}
