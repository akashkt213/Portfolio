import Link from "next/link"
import { Section } from "@/components/section"
import { SpotlightCard } from "@/components/spotlight-card"
import { experience, profile, stack } from "@/content"
import type { Post } from "@/lib/blog"

const tileLabel = "mb-4 font-mono text-[11px] uppercase tracking-label text-subtle"

export function About({ latestPost }: { latestPost?: Post }) {
  const current = experience[0]

  return (
    <Section id="about" label="About" index="01">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stack: the big tile */}
        <SpotlightCard className="reveal p-6 sm:col-span-2 lg:row-span-2">
          <p className={tileLabel}>Stack</p>
          <dl className="space-y-4">
            {stack.map(({ category, items }) => (
              <div key={category}>
                <dt className="mb-1.5 text-xs text-subtle">{category}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-bg px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </SpotlightCard>

        {/* Years of experience */}
        <SpotlightCard className="reveal flex flex-col justify-between p-6">
          <p className={tileLabel}>Experience</p>
          <p>
            <span className="font-mono text-6xl font-bold tracking-tighter">{profile.yearsOfExperience}</span>
            <span className="mt-1 block text-sm text-muted">years shipping production React</span>
          </p>
        </SpotlightCard>

        {/* Current role */}
        {current && (
          <SpotlightCard className="reveal flex flex-col justify-between p-6">
            <p className={tileLabel}>Currently</p>
            <p>
              <span className="block text-lg font-semibold">{current.role}</span>
              <span className="text-sm text-muted">
                at <span className="text-accent">{current.company}</span>
              </span>
            </p>
          </SpotlightCard>
        )}

        {/* Now */}
        <SpotlightCard className="reveal p-6 sm:col-span-2 lg:col-span-1">
          <p className={tileLabel}>Now</p>
          <p className="text-sm leading-relaxed text-muted">{profile.now}</p>
        </SpotlightCard>

        {/* Latest writing */}
        <SpotlightCard className="reveal p-6 sm:col-span-2 lg:col-span-1">
          <p className={tileLabel}>Latest writing</p>
          {latestPost ? (
            <Link href={`/blog/${latestPost.slug}`} className="group block">
              <span className="block font-semibold transition-colors group-hover:text-accent">
                {latestPost.meta.title}
              </span>
              <span className="mt-1 block font-mono text-xs text-subtle">
                {latestPost.readingMinutes} min read →
              </span>
            </Link>
          ) : (
            <p className="text-sm text-muted">First post coming soon.</p>
          )}
        </SpotlightCard>
      </div>
    </Section>
  )
}
