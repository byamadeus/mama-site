import "server-only";
import path from "node:path";
import {
  createFsMediaAdapter,
  createFsSettingsAdapter,
  createMarkdownAdapter,
  createStore,
  type CmsConfig,
} from "@typren/core";
import { localAuth } from "@typren/core/auth/local";
import { registry } from "@/slices/registry";
import { defaults } from "@/slices/defaults";
import { fieldSchema } from "@/slices/field-schema";

const contentDir = path.join(process.cwd(), "content");

// typren:bootstrap-wired: adminRoute/locales/defaultLocale/routing live in
// typren.config.json at the project root (edit it by hand, then run `typren
// apply-settings`). They are read once here to parameterize the adapter
// below. `typren apply-settings` also greps for this marker to confirm the
// wiring is in place.
const bootstrap = createFsSettingsAdapter({ file: path.join(process.cwd(), "typren.config.json") }).readBootstrap();

/** The one object that wires typren into this project. */
export const cmsConfig: CmsConfig = {
  registry,
  defaults,
  fieldSchema,
  adapter: createMarkdownAdapter({
    contentDir,
    draftDir: path.join(contentDir, ".drafts"),
    locales: bootstrap.locales,
    defaultLocale: bootstrap.defaultLocale,
  }),
  // Required by CmsConfig regardless; nothing renders this path in this
  // scaffold (no editor ships yet), kept as a stable target for when one does.
  previewPath: "/editor/preview",
  // Local-only gate: allows access in dev, fails closed in production
  // (saveDraft/publish and the upload route write files). Swap for a real
  // auth adapter later. See "@typren/core/auth/next-auth" or
  // "@typren/core/auth/clerk", no other change needed.
  auth: localAuth(),
  mediaAdapter: createFsMediaAdapter({
    dir: path.join(process.cwd(), "public/img"),
    publicPath: "/img",
  }),
};

export const cmsStore = createStore(cmsConfig.adapter, { onPublish: cmsConfig.onPublish });
