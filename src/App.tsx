import { useEffect, useState } from "react"

const NAV_ITEMS = ["about", "stack", "experience", "projects", "contact"]

const TECH_STACK = [
  { category: "Core Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "State & Data Fetching", items: ["Redux Toolkit", "React Query", "Zustand"] },
  { category: "UI & Component Systems", items: ["Shadcn UI", "TanStack Table"] },
  { category: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQL"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, IAM)", "Docker", "CI/CD"] },
  { category: "Architecture & Tools", items: ["Nx Monorepo", "I18n", "Swagger", "Postman"] },
  { category: "Mobile Development", items: ["React Native"] },
]

const EXPERIENCE = [
  {
    company: "Datopic",
    role: "Fullstack Engineer",
    period: "Feb 2024 – Present",
    accent: "#ef4444",
    bullets: [
      "Integrated Lexical editor for drafting custom email templates and payslips with rich-text editing.",
      "Participated in focus groups for product development, UX design, and developer tooling improvements.",
      "Managed application state using Redux and Zustand for scalable and predictable state management.",
      "Built and integrated REST and GraphQL APIs for efficient data fetching and manipulation.",
      "Implemented robust form validation using Zod and React Hook Form.",
      "Worked with Nx monorepos to modularize codebases and manage scalable project structures.",
      "Developed responsive UI components using Tailwind CSS for consistent design systems.",
      "Integrated React Big Calendar to display scheduled interviews, holidays, and leave events.",
      "Implemented I18n for multi-language support and localization across the application.",
      "Utilized TanStack Table for complex data tables with advanced filtering and sorting.",
      "Integrated React Query for optimized server-state management, reducing unnecessary API calls.",
      "Implemented code splitting and lazy loading to improve app performance and reduce initial load time.",
    ],
  },
]

const PROJECTS = [
  {
    title: "Snippet Vault",
    tagline: "Store, organize, and find code snippets fast.",
    url: "https://snippet-vault-taupe.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [ids])
  return active
}

export default function App() {
  const active = useActiveSection(NAV_ITEMS)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc] font-mono selection:bg-[#ef4444] selection:text-white">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Fixed left nav — desktop */}
      <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5">
        {NAV_ITEMS.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-xs tracking-widest uppercase transition-all duration-300 text-left ${
              active === id
                ? "text-[#e8e4dc] translate-x-1"
                : "text-[#444] hover:text-[#888]"
            }`}
          >
            {active === id && <span className="text-[#ef4444] mr-2">▸</span>}
            {id}
          </button>
        ))}
      </nav>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#1a1a1a] px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wider">AK</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xs tracking-widest uppercase text-[#888]">
          {menuOpen ? "close" : "menu"}
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#1a1a1a] flex flex-col">
            {NAV_ITEMS.map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="py-3 px-6 text-left text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e4dc] border-b border-[#111]">
                {id}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-8 md:px-12 pt-20 md:pt-0">

        {/* ── ABOUT ── */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-24">
          <div className="mb-3 text-[#ef4444] text-xs tracking-[0.3em] uppercase">Software Engineer</div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#f5f0e8] mb-10 leading-none">
            Akash<br />Kumar
          </h1>
          <p className="text-[#888] text-base leading-relaxed max-w-lg">
            I write code. Sometimes it works on the first try — I don't trust those moments.
            2+ years of turning <span className="text-[#e8e4dc]">React, TypeScript, and Tailwind</span> into
            interfaces that users click through without filing a bug report.
            I care about clean code, performance, and not pushing to main on a Friday.
          </p>
          <div className="mt-10 flex gap-8">
            <a href="https://github.com/akashkt213" target="_blank" rel="noreferrer" className="text-sm tracking-widest uppercase text-[#444] hover:text-[#e8e4dc] transition-colors">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/akash-kumar142/" target="_blank" rel="noreferrer" className="text-sm tracking-widest uppercase text-[#444] hover:text-[#e8e4dc] transition-colors">LinkedIn ↗</a>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section id="stack" className="py-24">
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {TECH_STACK.map(({ category, items }) => (
              <div key={category} className="bg-[#0a0a0a] p-6 hover:bg-[#0f0f0f] transition-colors">
                <div className="text-xs tracking-[0.25em] uppercase text-[#555] mb-4">{category}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#888] border border-[#222] px-3 py-1.5 hover:border-[#ef4444] hover:text-[#e8e4dc] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24">
          <SectionLabel>Experience</SectionLabel>
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-sm font-bold tracking-wider uppercase px-3 py-1"
                  style={{ background: exp.accent, color: "#fff" }}
                >
                  {exp.company}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-6">
                <span className="text-base font-semibold text-[#e8e4dc]">{exp.role}</span>
                <span className="hidden sm:block text-[#333]">·</span>
                <span className="text-sm text-[#555] tracking-wider">{exp.period}</span>
              </div>
              <ul className="space-y-4">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-base text-[#666] leading-relaxed group">
                    <span className="text-[#2a2a2a] group-hover:text-[#ef4444] transition-colors mt-0.5 shrink-0">–</span>
                    <span className="group-hover:text-[#888] transition-colors">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24">
          <SectionLabel>Projects</SectionLabel>
          <div className="space-y-px border border-[#1a1a1a]">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block bg-[#0a0a0a] hover:bg-[#0f0f0f] p-7 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-[#e8e4dc] group-hover:text-white transition-colors mb-1.5">
                      {p.title}
                    </div>
                    <div className="text-base text-[#555] mb-5">{p.tagline}</div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs tracking-widest uppercase text-[#444] border border-[#1e1e1e] px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[#333] group-hover:text-[#ef4444] transition-colors text-xl shrink-0 mt-0.5">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 pb-32">
          <SectionLabel>Contact</SectionLabel>
          <p className="text-[#555] text-base mb-10 leading-relaxed max-w-sm">
            Open to new opportunities, collaborations, or just a good conversation about tech.
          </p>
          <div className="space-y-4">
            {[
              { label: "Email", value: "akashkt213@gmail.com", href: "mailto:akashkt213@gmail.com" },
              { label: "GitHub", value: "akashkt213", href: "https://github.com/akashkt213" },
              { label: "LinkedIn", value: "akash-kumar142", href: "https://www.linkedin.com/in/akash-kumar142/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 group"
              >
                <span className="text-xs tracking-[0.25em] uppercase text-[#333] w-20 shrink-0">{link.label}</span>
                <span className="text-base text-[#555] group-hover:text-[#e8e4dc] transition-colors">{link.value}</span>
                <span className="text-[#222] group-hover:text-[#ef4444] transition-colors text-sm">↗</span>
              </a>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-xs tracking-[0.35em] uppercase text-[#ef4444]">{children}</span>
      <div className="flex-1 h-px bg-[#1a1a1a]" />
    </div>
  )
}