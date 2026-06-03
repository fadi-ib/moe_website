import type { MetadataRoute } from "next";

const baseUrl = "https://moetheelectrician.com";
const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/quote", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.75 },
  { path: "/electrician-beirut", changeFrequency: "monthly", priority: 0.9 },
  { path: "/electrician-jounieh", changeFrequency: "monthly", priority: 0.9 },
  { path: "/electrician-baabda", changeFrequency: "monthly", priority: 0.9 },
  { path: "/electrician-aley", changeFrequency: "monthly", priority: 0.9 },
  { path: "/electrician-mount-lebanon", changeFrequency: "monthly", priority: 0.9 }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
