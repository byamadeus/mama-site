import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Kept in sync with proxy.ts's BLOCKED_USER_AGENTS: these are pure
// scraper/SEO-analysis bots, not search engines, so there's no reason to
// let them in even politely. proxy.ts is what actually stops them (several
// of these ignore robots.txt); this is the documented, well-behaved-bot
// layer on top.
const BLOCKED_USER_AGENTS = [
  "PetalBot",
  "SEranking-Backlinks",
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "SerpstatBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...BLOCKED_USER_AGENTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
