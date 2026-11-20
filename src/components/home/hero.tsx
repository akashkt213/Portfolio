import { LiveClock } from "@/components/live-clock"
import { ScrambleText } from "@/components/scramble-text"
import { profile, socials } from "@/content"

/** Renders `**highlighted**` phrases from content.ts in the foreground color. */
function Emphasis({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-fg">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export function Hero() {
  return (
    <section className="flex min-h-dvh flex-col justify-center pb-16 pt-28">
      <p className="mb-5 font-mono text-xs uppercase tracking-label text-accent">{profile.role}</p>

      <h1 className="mb-8 font-mono text-[clamp(3rem,12vw,7.5rem)] font-bold leading-[0.9] tracking-tighter">
        <ScrambleText text={profile.firstName} className="block" />
        <span className="caret block">
          <ScrambleText text={profile.lastName} duration={1200} />
        </span>
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted">
        <Emphasis text={profile.intro} />
      </p>

      <div className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-subtle">
        {profile.availableForWork && (
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            <span className="text-muted">available for work</span>
          </span>
        )}
        <span className="flex items-center gap-2">
          <span aria-hidden>◷</span>
          <span>
            local time <LiveClock timezone={profile.timezone} />
          </span>
        </span>
      </div>

      <ul className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-fg"
            >
              {s.label} ↗
            </a>
          </li>
        ))}
        {profile.resume && (
          <li>
            <a
              href={profile.resume}
              className="inline-block border border-fg bg-fg px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              Resume ↓
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}
