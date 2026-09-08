import { handleMediaUpload } from "@typren/core";
import { cmsConfig } from "@/cms.config";

// sharp needs Node's native bindings, not the edge runtime.
export const runtime = "nodejs";

// A Route Handler, not a Server Action: Next's default 1MB action body cap is
// the wrong shape for raw image bytes. No editor ships in this scaffold (no
// image picker calls this), so this is a standalone, auth-gated programmatic
// upload endpoint for agent-driven media additions, mirroring cms-actions.ts's
// saveDraft/publish for content. handleMediaUpload re-checks
// resolveAuth(cmsConfig) itself, so this route is fully self-gated.
export async function POST(request: Request) {
  return handleMediaUpload(cmsConfig, request);
}
