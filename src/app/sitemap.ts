import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { geoCities, getAllNeighborhoodParams } from "@/lib/geo";

const BASE = "https://thefluencyhouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/evaluacion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/explorar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = geoCities.map((c) => ({
    url: `${BASE}/clases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const neighborhoodRoutes: MetadataRoute.Sitemap = getAllNeighborhoodParams().map(({ ciudad, barrio }) => ({
    url: `${BASE}/clases/${ciudad}/${barrio}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...cityRoutes, ...neighborhoodRoutes];
}
