import { Section } from "@/components/section"
import { experience } from "@/content"

export function Experience() {
  return (
    <Section id="experience" label="Experience" index="02">
      <ol className="relative border-l border-line">
        {experience.map((job) => (
          <li key={job.company} className="reveal relative pb-12 pl-8 last:pb-0">
            <span aria-hidden className="absolute -left-[5px] top-1.5 size-2.5 bg-accent" />

            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-muted">@</span>{" "}
                <span className="text-accent">{job.company}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest text-subtle">{job.period}</span>
            </div>

            <ul className="mb-6 space-y-3">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                    ▹
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {job.details.length > 0 && (
              <details className="group">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-widest text-subtle transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
                  <span aria-hidden className="transition-transform group-open:rotate-90">
                    ▸
                  </span>
                  <span className="group-open:hidden">show more ({job.details.length})</span>
                  <span className="hidden group-open:inline">show less</span>
                </summary>
                <ul className="mt-5 space-y-3 border-l border-line pl-5">
                  {job.details.map((d) => (
                    <li key={d} className="text-sm leading-relaxed text-subtle">
                      {d}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
