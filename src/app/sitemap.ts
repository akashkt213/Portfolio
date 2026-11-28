import type { MetadataRoute } from "next"
import { site } from "@/content"
import { BLOG_ENABLED, getPosts } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = { url: site.url, changeFrequency: "monthly", priority: 1 } as const
  if (!BLOG_ENABLED) return [home]
  const posts = await getPosts()
  return [
    home,
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.meta.date,
      priority: 0.6,
    })),
  ]
}
