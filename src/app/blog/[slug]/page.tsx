import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate, getPostSlugs, getPosts, loadPost } from "@/lib/blog"
import { profile } from "@/content"

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!getPostSlugs().includes(slug)) return {}
  const { meta } = await loadPost(slug)
  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.summary,
      publishedTime: meta.date,
      authors: [profile.name],
      url: `/blog/${slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  if (!getPostSlugs().includes(slug)) notFound()
  const { meta, Content, readingMinutes } = await loadPost(slug)

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <Link
        href="/blog"
        className="mb-10 inline-block font-mono text-xs uppercase tracking-widest text-subtle hover:text-fg"
      >
        ← all posts
      </Link>

      <header className="mb-12 border-b border-line pb-10">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-subtle">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden>·</span>
          <span>{readingMinutes} min read</span>
          {meta.tags?.map((t) => (
            <span key={t} className="text-accent">
              #{t}
            </span>
          ))}
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{meta.title}</h1>
        <p className="text-lg text-muted">{meta.summary}</p>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight">
        <Content />
      </div>
    </article>
  )
}
