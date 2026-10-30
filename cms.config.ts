import "server-only";
import path from "node:path";
import { createFsSettingsAdapter, createMarkdownAdapter, createStore } from "@typren/core";

const contentDir = path.join(process.cwd(), "content");

// typren:bootstrap-wired: locales/defaultLocale/routing live in
// typren.config.json at the project root (edit it by hand, then run `typren
// apply-settings`). Read once here to parameterize the adapter below.
// `typren apply-settings` also greps for this marker to confirm the wiring
// is in place.
const bootstrap = createFsSettingsAdapter({ file: path.join(process.cwd(), "typren.config.json") }).readBootstrap();

const adapter = createMarkdownAdapter({
  contentDir,
  draftDir: path.join(contentDir, ".drafts"),
  locales: bootstrap.locales,
  defaultLocale: bootstrap.defaultLocale,
});

export const cmsStore = createStore(adapter);

// Dev-only: true while `typren studio` is framing this site's own dev
// server in preview mode (see package.json's dev script and
// docs/site/studio.md). Inert in production.
export const studioPreview = process.env.TYPREN_PREVIEW === "1" && process.env.NODE_ENV !== "production";

/** Published content, or the studio's unpushed draft while previewing it. */
export async function getPage(slug: string, locale?: string) {
  return (studioPreview && (await cmsStore.getDraft(slug, locale))) || cmsStore.getPublished(slug, locale);
}
