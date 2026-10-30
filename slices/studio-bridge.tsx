"use client";

import { useEffect } from "react";
import { initPreviewBridge } from "@typren/core/ui/preview-bridge.vanilla";

/** Lets typren studio select a block when you click it in the preview.
 *  Dev-only (mounted by SliceZone in preview mode); talks only to the
 *  studio's own origin. */
export function StudioBridge({ origin }: Readonly<{ origin?: string }>) {
  useEffect(() => (origin ? initPreviewBridge(origin) : undefined), [origin]);
  return null;
}
