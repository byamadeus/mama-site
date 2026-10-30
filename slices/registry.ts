import type { ComponentType } from "react";
import { Coaching } from "./coaching";
import { MicrositeHero } from "./microsite-hero";
import { MicrositeFooter } from "./microsite-footer";

/** Slice name (as authored in content frontmatter) -> component. Add new
 *  slices here, plus a starter entry in defaults.ts. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registry: Record<string, ComponentType<any>> = {
  coaching: Coaching,
  "microsite-hero": MicrositeHero,
  "microsite-footer": MicrositeFooter,
};
