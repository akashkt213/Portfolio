import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"

/**
 * Blog posts are MDX files in src/posts/. Each one exports its metadata:
 *
 *   export const metadata = { title: "…", date: "2026-11-21", summary: "…", tags: ["react"] }
 *
 * The file name is the URL slug. Set `draft: true` to hide a post in production.
 */
export interface PostMeta {
  title: string
  date: string
  summary: string
  tags?: string[]
  draft?: boolean
}

export interface Post {
  slug: string
  meta: PostMeta
  readingMinutes: number
}

const POSTS_DIR = path.join(process.cwd(), "src", "posts")
const WORDS_PER_MINUTE = 220

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

function readingMinutes(slug: string): number {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8")
  const body = raw.replace(/export const metadata[\s\S]*?\n}\n/, "")
  const words = body.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

export async function loadPost(slug: string): Promise<Post & { Content: ComponentType }> {
  const mod = (await import(`@/posts/${slug}.mdx`)) as { default: ComponentType; metadata: PostMeta }
  return { slug, meta: mod.metadata, Content: mod.default, readingMinutes: readingMinutes(slug) }
}

const showDrafts = process.env.NODE_ENV !== "production"

/** All published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(loadPost))
  return posts
    .filter((p) => showDrafts || !p.meta.draft)
    .map(({ slug, meta, readingMinutes }) => ({ slug, meta, readingMinutes }))
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
}
