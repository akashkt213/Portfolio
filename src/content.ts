// Single source of truth for all site content.
// The UI (and any future AI chat) should read from here — never duplicate this data.

export interface Profile {
  name: string
  firstName: string
  lastName: string
  initials: string
  role: string
  location?: string
  /** One-line pitch, used for meta description / link previews. */
  pitch: string
  /** Longer intro paragraph shown in the hero. Wrap highlighted phrases in **double asterisks**. */
  intro: string
  yearsOfExperience: string
  /** Path under /public, e.g. "/avatar.jpg". */
  avatar?: string
  /** Path under /public, e.g. "/resume.pdf". */
  resume?: string
  /** Shows the green "available for work" dot in the hero. */
  availableForWork: boolean
  /** IANA timezone for the live local-time clock, e.g. "Asia/Kolkata". */
  timezone: string
  /** Short "what I'm doing now" line for the bento grid. */
  now: string
}

export const site = {
  // Used for SEO, sitemap and link previews. Set NEXT_PUBLIC_SITE_URL once you have a custom domain;
  // on Vercel the production URL is picked up automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  sourceUrl: "https://github.com/akashkt213",
}

export interface SocialLink {
  label: string
  handle: string
  href: string
}

export interface StackCategory {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  /** 4–5 outcome-focused bullets, ideally with numbers. Shown up front. */
  highlights: string[]
  /** Task-level detail, shown in an expandable section. */
  details: string[]
}

export interface Project {
  title: string
  tagline: string
  description?: string
  liveUrl?: string
  repoUrl?: string
  /** Path under /public, e.g. "/projects/snippet-vault.png". */
  image?: string
  tags: string[]
  /** "placeholder" renders a dashed "in the works" card. Remove once the project is real. */
  status?: "live" | "placeholder"
}

export const profile: Profile = {
  name: "Akash Kumar",
  firstName: "Akash",
  lastName: "Kumar",
  initials: "AK",
  role: "Software Engineer",
  // TODO: add location (e.g. "Bengaluru, India")
  pitch:
    "Full-stack engineer building fast, scalable React and TypeScript web apps.",
  intro:
    "I write code. Sometimes it works on the first try — I don't trust those moments. " +
    "2+ years of turning **React, TypeScript, and Tailwind** into interfaces that users click " +
    "through without filing a bug report. I care about clean code, performance, and not pushing " +
    "to main on a Friday.",
  yearsOfExperience: "2+",
  // TODO: add avatar: "/avatar.jpg" once the photo is in /public
  // TODO: add resume: "/resume.pdf" once the PDF is in /public
  availableForWork: true,
  timezone: "Asia/Kolkata",
  now: "Rebuilding this portfolio in Next.js and writing about what I learn.",
}

export const email = "akashkt213@gmail.com"

export const socials: SocialLink[] = [
  { label: "GitHub", handle: "akashkt213", href: "https://github.com/akashkt213" },
  { label: "LinkedIn", handle: "akash-kumar142", href: "https://www.linkedin.com/in/akash-kumar142/" },
  { label: "X", handle: "KumarAkash34058", href: "https://x.com/KumarAkash34058" },
]

export const stack: StackCategory[] = [
  { category: "Core Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "State & Data Fetching", items: ["Redux Toolkit", "React Query", "Zustand"] },
  { category: "UI & Component Systems", items: ["Shadcn UI", "TanStack Table"] },
  { category: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQL"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, IAM)", "Docker", "CI/CD"] },
  { category: "Architecture & Tools", items: ["Nx Monorepo", "i18n", "Swagger", "Postman"] },
  { category: "Mobile Development", items: ["React Native"] },
]

export const experience: Experience[] = [
  {
    company: "Datopic",
    role: "Fullstack Engineer",
    period: "Feb 2024 – Present",
    // TODO: replace with 4–5 impact bullets with real numbers, e.g.
    // "Cut initial load time by X% with code splitting and lazy loading across N routes."
    highlights: [
      "Implemented code splitting and lazy loading to improve app performance and reduce initial load time.",
      "Integrated React Query for optimized server-state management, reducing unnecessary API calls.",
      "Integrated Lexical editor for drafting custom email templates and payslips with rich-text editing.",
      "Implemented i18n for multi-language support and localization across the application.",
    ],
    details: [
      "Managed application state using Redux and Zustand for scalable and predictable state management.",
      "Built and integrated REST and GraphQL APIs for efficient data fetching and manipulation.",
      "Implemented robust form validation using Zod and React Hook Form.",
      "Worked with Nx monorepos to modularize codebases and manage scalable project structures.",
      "Developed responsive UI components using Tailwind CSS and Shadcn UI for consistent design systems.",
      "Integrated React Big Calendar to display scheduled interviews, holidays, and leave events.",
      "Utilized TanStack Table for complex data tables with advanced filtering and sorting.",
      "Participated in focus groups for product development, UX design, and developer tooling improvements.",
    ],
  },
]

// TODO: replace the placeholder entries with real projects (screenshots go in /public/projects/).
export const projects: Project[] = [
  {
    title: "Snippet Vault",
    tagline: "Store, organize, and find code snippets fast.",
    liveUrl: "https://snippet-vault-taupe.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    status: "live",
  },
  {
    title: "Project Two",
    tagline: "Placeholder: a one-line description of what it does and who it's for.",
    tags: ["Next.js", "PostgreSQL"],
    status: "placeholder",
  },
  {
    title: "Project Three",
    tagline: "Placeholder: a one-line description of what it does and who it's for.",
    tags: ["Node.js", "AWS"],
    status: "placeholder",
  },
]
