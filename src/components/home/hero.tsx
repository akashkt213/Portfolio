import { LiveClock } from "@/components/live-clock"
import { NoteWall } from "@/components/note-wall"
import { ScrambleText } from "@/components/scramble-text"
import { profile, socials } from "@/content"

export function Hero() {
  return (
    <section className="grid min-h-dvh grid-cols-1 content-center gap-16 pb-16 pt-28 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-12">
      <div>
      <p className="mb-5 font-mono text-xs uppercase tracking-label text-accent">{profile.role}</p>

      <h1 className="mb-8 font-mono text-[clamp(3rem,12vw,7.5rem)] font-bold leading-[0.9] tracking-tighter">
        <ScrambleText text={profile.firstName} className="block" />
        <span className="caret block">
          <ScrambleText text={profile.lastName} duration={1200} />
        </span>
      </h1>

      <p className="mb-4 max-w-xl font-pixel text-xl leading-snug text-fg sm:text-2xl">
        <span aria-hidden className="mr-3 text-accent">&gt;</span>
        {profile.intro}
      </p>
      <p className="mb-10 font-mono text-sm text-muted">
        {profile.focus.map((item, i) => (
          <span key={item}>
            {i > 0 && <span aria-hidden className="mx-2 text-subtle">·</span>}
            {item}
          </span>
        ))}
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
      </div>

      <NoteWall />
    </section>
  )
}
