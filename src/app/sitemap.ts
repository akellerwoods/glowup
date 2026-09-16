import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { transformations } from "@/content/transformations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const pages = [
    "",
    "/the-52",
    "/transformations",
    "/how-it-works",
    "/partners",
    "/about",
    "/get-involved",
    "/donate",
    "/events",
    "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: (p === "" || p === "/the-52" ? "weekly" : "monthly") as
      "weekly" | "monthly",
    priority: p === "" ? 1 : p === "/donate" ? 0.9 : 0.7,
  }));
  const dogs = transformations.map((t) => ({
    url: `${base}/transformations/${t.slug}`,
    lastModified: new Date(t.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...dogs];
}
