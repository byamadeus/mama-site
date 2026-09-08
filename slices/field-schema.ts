import type { SliceSchema } from "@typren/core";

/** Per-slice field hints, keyed by slice name then prop name (mainly
 * dropdowns for string-literal unions); everything else falls back to
 * auto-detection. Consumed by @typren/editor's field controls once that
 * package is installed; inert until then. */
export const fieldSchema: Record<string, SliceSchema> = {
  hero: {
    align: { type: "select", options: ["left", "center"] },
  },
};
