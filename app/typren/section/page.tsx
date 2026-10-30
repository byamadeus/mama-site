import { createSectionCanvas } from "@typren/core/ui/section-canvas";
import { registry } from "@/slices/registry";

// Dev-only: renders one slice (or a whole grid of saved sections) from the
// props in the query, so typren studio's Templates/Sections views can show
// real thumbnails instead of schematic cards. Returns an empty page outside
// TYPREN_PREVIEW=1 / a production build. See docs/site/studio.md.
export default createSectionCanvas(registry);
