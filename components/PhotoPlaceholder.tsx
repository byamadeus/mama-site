const GRADIENTS = [
  "from-[#d8c3a5] via-[#c98f65] to-[#8a4a3a]",
  "from-[#e3d5c0] via-[#b76a53] to-[#5c2b2f]",
  "from-[#e8dcc8] via-[#a8683f] to-[#3f2620]",
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
