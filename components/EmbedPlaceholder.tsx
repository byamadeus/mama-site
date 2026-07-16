export default function EmbedPlaceholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-line bg-surface ${aspect}`}
    >
      <span className="px-4 text-center text-sm font-medium text-muted">
        {label}
      </span>
    </div>
  );
}
