import type { Slice } from "@typren/core";
import { studioPreview } from "@/cms.config";
import { registry } from "./registry";
import { StudioBridge } from "./studio-bridge";

/** Render an ordered list of content slices via the registry. Render one
 *  SliceZone per page — each mounts its own studio preview bridge. */
export function SliceZone({ slices }: Readonly<{ slices: Slice[] }>) {
  const rendered = slices.map((s, i) => {
    const Component = registry[s.slice];
    if (!Component) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[SliceZone] unknown slice "${s.slice}"`);
      }
      return null;
    }
    return studioPreview ? (
      <div key={`${s.slice}-${i}`} data-typren-index={i}>
        <Component {...s} />
      </div>
    ) : (
      <Component key={`${s.slice}-${i}`} {...s} />
    );
  });

  if (!studioPreview) return rendered;
  return (
    <>
      {rendered}
      <StudioBridge origin={process.env.TYPREN_STUDIO_ORIGIN} />
    </>
  );
}
