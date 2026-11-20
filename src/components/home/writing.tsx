import Link from "next/link"
import { Section } from "@/components/section"
import { formatDate, type Post } from "@/lib/blog"

export function Writing({ posts }: { posts: Post[] }) {
  return (
    <Section id="writing" label="Writing" index="04">
      {posts.length === 0 ? (
        <p className="text-subtle">First post coming soon.</p>
      ) : (
        <ul className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug} className="reveal">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <time dateTime={post.meta.date} className="shrink-0 font-mono text-xs text-subtle sm:w-28">
                  {formatDate(post.meta.date)}
                </time>
                <span className="flex-1 font-medium transition-colors group-hover:text-accent">
                  {post.meta.title}
                </span>
                <span aria-hidden className="hidden text-subtle transition-colors group-hover:text-accent sm:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link
        href="/blog"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg"
      >
        All posts →
      </Link>
    </Section>
  )
}
