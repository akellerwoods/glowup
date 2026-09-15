import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art is SVG; real photos will be JPG/WebP and need none of this.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
