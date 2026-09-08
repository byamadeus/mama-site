/** Starter props for each registered slice, keyed by slice name; each value
 * renders without crashing. Used by tooling that inserts a new slice
 * instance (there is no editor UI in this scaffold). */
export const defaults: Record<string, Record<string, unknown>> = {
  hero: {
    heading: "Your headline here.",
    body: "A short supporting sentence.",
    cta: { label: "Get started", href: "/" },
  },
  prose: {
    heading: "About this section",
    body: "Add your rich-text content here.",
  },
};
