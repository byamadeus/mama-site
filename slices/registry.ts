import type { ComponentType } from "react";
import { Hero } from "./hero";
import { Prose } from "./prose";

/** Slice name (as authored in content frontmatter) -> component. Add new
 *  slices here, plus a starter entry in defaults.ts. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registry: Record<string, ComponentType<any>> = {
  hero: Hero,
  prose: Prose,
};
