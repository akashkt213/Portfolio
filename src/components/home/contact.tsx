import { CopyEmail } from "@/components/copy-email"
import { Section } from "@/components/section"
import { email, socials } from "@/content"

export function Contact() {
  return (
    <Section id="contact" label="Contact" index="05" className="pb-32">
      <h3 className="reveal mb-6 max-w-2xl font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Let&apos;s build something <span className="text-accent">good</span>.
      </h3>
      <p className="reveal mb-10 max-w-md text-muted">
        Open to new roles, freelance work, and good conversations about tech. My inbox is the fastest way to reach me.
      </p>
      <div className="reveal mb-12">
        <CopyEmail email={email} />
      </div>
      <ul className="reveal flex flex-wrap gap-x-8 gap-y-3">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer" className="group flex items-baseline gap-3">
              <span className="font-mono text-[11px] uppercase tracking-label text-subtle">{s.label}</span>
              <span className="text-muted transition-colors group-hover:text-fg">@{s.handle}</span>
              <span aria-hidden className="text-subtle transition-colors group-hover:text-accent">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
