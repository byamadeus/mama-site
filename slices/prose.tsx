type Props = Readonly<{ heading?: string; body: string }>;

/** Example slice. Replace with your own. A minimal text block. */
export function Prose({ heading, body }: Props) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        {heading && <h2 className="text-2xl font-semibold">{heading}</h2>}
        <p className="mt-4 whitespace-pre-line text-gray-700">{body}</p>
      </div>
    </section>
  );
}
