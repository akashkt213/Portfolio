import { profile, site } from "@/content"
import { BLOG_ENABLED, getPosts } from "@/lib/blog"

export const dynamic = "force-static"

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function GET() {
  if (!BLOG_ENABLED) return new Response("Not found", { status: 404 })
  const posts = await getPosts()
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escape(p.meta.title)}</title>
      <link>${site.url}/blog/${p.slug}</link>
      <guid>${site.url}/blog/${p.slug}</guid>
      <pubDate>${new Date(`${p.meta.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(p.meta.summary)}</description>
    </item>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(profile.name)} · Blog</title>
    <link>${site.url}/blog</link>
    <description>${escape(profile.pitch)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
