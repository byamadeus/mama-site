export default function CardList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-line bg-surface px-6 py-4 text-center font-display text-lg font-medium text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
