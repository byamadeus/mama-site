import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // typren studio runs a preview copy of the site on its own port
  // alongside your normal `npm run dev`; Next refuses two dev servers
  // sharing one `.next` directory, so the preview copy gets its own.
  distDir: process.env.TYPREN_PREVIEW === "1" ? ".next-preview" : ".next",
};

export default nextConfig;
