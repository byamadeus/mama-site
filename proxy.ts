import { NextResponse, type NextRequest } from "next/server";

/**
 * Pure scraper/SEO-analysis bots and other low-value crawlers: no real
 * audience and no search-ranking benefit for this site, so they're pure
 * bandwidth cost. Matched case-insensitively against substrings of their
 * own User-Agent string. Real search engines (Googlebot, Bingbot,
 * DuckDuckBot, Applebot, Yandex), link-preview fetchers
 * (facebookexternalhit) and AI crawlers (ClaudeBot, meta-webindexer) are
 * deliberately left off this list.
 */
const BLOCKED_USER_AGENTS = [
  "petalbot", // Huawei Petal Search — no US audience relevance, very high volume
  "seranking-backlinks", // SE Ranking's backlink scanner, not a search engine
  "ahrefsbot",
  "semrushbot",
  "mj12bot", // Majestic
  "dotbot", // Moz
  "blexbot",
  "dataforseobot",
  "serpstatbot",
  "bytespider", // ByteDance's crawler
];

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  const isBlocked = BLOCKED_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isBlocked) {
    return new NextResponse(null, { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  // Every request, including static assets under public/ (the photos are
  // the biggest single payloads a scraper can cost us) — excludes only
  // Next's own internal assets, which no external bot requests directly.
  matcher: "/((?!_next/static|_next/image).*)",
};
