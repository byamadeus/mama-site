import type { Slice } from "@typren/core";
import { registry } from "./registry";

/** Render an ordered list of content slices via the registry. */
export function SliceZone({ slices }: Readonly<{ slices: Slice[] }>) {
  return slices.map((s, i) => {
    const Component = registry[s.slice];
    if (!Component) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[SliceZone] unknown slice "${s.slice}"`);
      }
      return null;
    }
    return <Component key={`${s.slice}-${i}`} {...s} />;
  });
}
