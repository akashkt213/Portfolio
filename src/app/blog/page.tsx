import type { Metadata } from "next"
import Link from "next/link"
import { formatDate, getPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on React, TypeScript, and building things for the web.",
  alternates: { canonical: "/blog" },
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-label text-accent">Blog</p>
      <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl">Writing</h1>
      <p className="mb-14 max-w-xl text-muted">
        Notes on React, TypeScript, and building things for the web.{" "}
        <a href="/rss.xml" className="text-fg underline decoration-accent underline-offset-4">
          RSS
        </a>
      </p>

      {posts.length === 0 ? (
        <p className="text-subtle">Nothing here yet. First post coming soon.</p>
      ) : (
        <ul className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-6">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-subtle">
                  <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} min read</span>
                  {post.meta.draft && <span className="text-accent">draft</span>}
                </div>
                <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent">
                  {post.meta.title}
                </h2>
                <p className="text-muted">{post.meta.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
