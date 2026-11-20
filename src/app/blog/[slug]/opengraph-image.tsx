import { formatDate, getPosts, loadPost } from "@/lib/blog"
import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "Blog post preview"
export const size = ogSize
export const contentType = "image/png"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta, readingMinutes } = await loadPost(slug)
  return renderOgImage({
    eyebrow: "Blog",
    title: meta.title,
    footer: `${formatDate(meta.date)} · ${readingMinutes} min read`,
  })
}
