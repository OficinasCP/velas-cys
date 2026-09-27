import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { getVisibleProducts } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/catalogo`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/cuidados`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const products: MetadataRoute.Sitemap = getVisibleProducts().map((product) => ({
    url: `${base}/catalogo/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...products];
}
