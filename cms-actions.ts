"use server";

import { makeActions, type PageContent } from "@typren/core";
import { cmsConfig } from "@/cms.config";

// No editor UI drives these: they are the write surface for programmatic and
// agent-driven content management (a review/PR pipeline, a script, or a
// future admin tool). The host still owns the "use server" boundary; the
// package supplies the logic. Each handler re-checks authorize() inside
// makeActions, because a Server Action is a public POST endpoint, so the
// gate cannot live in a UI layout alone. Every write carries the target
// `locale` (the default when omitted), so adding a locale to
// typren.config.json needs no change here.
const actions = makeActions(cmsConfig);

export async function saveDraft(slug: string, page: PageContent, baseVersion?: string, locale?: string) {
  return actions.saveDraft(slug, page, baseVersion, locale);
}

export async function discardDraft(slug: string, locale?: string) {
  return actions.discardDraft(slug, locale);
}

export async function publish(slug: string, baseVersion?: string, locale?: string) {
  return actions.publish(slug, baseVersion, locale);
}

export async function createPage(title: string, locale?: string) {
  return actions.createPage(title, locale);
}

export async function createTranslation(slug: string, toLocale: string) {
  return actions.createTranslation(slug, toLocale);
}

export async function deletePage(slug: string) {
  return actions.deletePage(slug);
}

export async function deleteTranslation(slug: string, locale: string) {
  return actions.deleteTranslation(slug, locale);
}

// Lists/deletes existing media under the configured mediaAdapter. Pairs with
// the upload endpoint in mediaUploadRoute below for programmatic media
// management; this scaffold ships no media-library UI.
export async function listMedia() {
  return actions.listMedia();
}

export async function deleteMedia(id: string) {
  return actions.deleteMedia(id);
}
