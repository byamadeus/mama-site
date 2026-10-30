import type { SliceSchema } from "@typren/core";

/** Per-slice field hints, keyed by slice name then prop name (mainly
 * dropdowns for string-literal unions); everything else falls back to
 * auto-detection. Consumed by typren studio's field controls — see
 * docs/site/studio.md. None of today's slices need an override yet. */
export const fieldSchema: Record<string, SliceSchema> = {};
