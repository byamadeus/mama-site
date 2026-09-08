type Cta = { label: string; href: string };
type Props = Readonly<{
  heading: string;
  body: string;
  cta?: Cta;
  align?: "left" | "center";
}>;

/** Example slice. Replace with your own. Shows a typed props shape, an
 *  optional CTA, and a `select`-typed prop (see field-schema.ts). */
export function Hero({ heading, body, cta, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <section className={centered ? "px-6 py-24 text-center" : "px-6 py-24"}>
      <div className={centered ? "mx-auto max-w-3xl" : "mx-auto max-w-xl"}>
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-4 text-lg text-gray-600">{body}</p>
        {cta && (
          <a href={cta.href} className="mt-8 inline-block rounded-full bg-black px-6 py-3 font-medium text-white">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
