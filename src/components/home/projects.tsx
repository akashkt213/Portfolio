import Image from "next/image"
import { Section } from "@/components/section"
import { SpotlightCard } from "@/components/spotlight-card"
import { projects, type Project } from "@/content"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0")

  if (project.status === "placeholder") {
    return (
      <li className="reveal flex flex-col justify-between border border-dashed border-line-strong p-6">
        <div>
          <div className="mb-4 flex items-center justify-between font-mono text-xs text-subtle">
            <span>{number}</span>
            <span className="uppercase tracking-widest">in the works</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-muted">{project.title}</h3>
          <p className="mb-6 text-sm text-subtle">{project.tagline}</p>
        </div>
        <Tags tags={project.tags} />
      </li>
    )
  }

  return (
    <SpotlightCard as="li" className="reveal group flex flex-col">
      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-4 font-mono text-xs text-subtle">{number}</div>
          <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
          <p className="mb-3 text-sm text-muted">{project.tagline}</p>
          {project.description && <p className="mb-3 text-sm text-subtle">{project.description}</p>}
        </div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <Tags tags={project.tags} />
          <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-fg hover:text-accent">
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech used">
      {tags.map((t) => (
        <li key={t} className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          #{t}
        </li>
      ))}
    </ul>
  )
}

export function Projects() {
  return (
    <Section id="projects" label="Projects" index="03">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </ul>
    </Section>
  )
}
