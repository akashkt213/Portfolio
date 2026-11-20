"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { profile } from "@/content"

const NAV = [
  { id: "about", label: "about", href: "/#about" },
  { id: "experience", label: "work", href: "/#experience" },
  { id: "projects", label: "projects", href: "/#projects" },
  { id: "blog", label: "blog", href: "/blog" },
  { id: "contact", label: "contact", href: "/#contact" },
] as const

const SECTION_IDS = ["about", "experience", "projects", "writing", "contact"]

/** Highlights the section currently in view on the home page. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [enabled])
  return enabled ? active : null
}

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const section = useActiveSection(isHome)
  const [open, setOpen] = useState(false)

  const isActive = (id: string) =>
    id === "blog" ? pathname.startsWith("/blog") || section === "writing" : section === id

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wider" aria-label="Home">
          {profile.initials}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.id) ? "true" : undefined}
                  className={`flex items-center px-3 py-2 transition-colors ${
                    isActive(item.id) ? "text-fg" : "text-subtle hover:text-fg"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mr-1.5 text-accent transition-opacity ${isActive(item.id) ? "opacity-100" : "opacity-0"}`}
                  >
                    ▸
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="px-2 py-2 font-mono text-xs uppercase tracking-widest text-muted md:hidden"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="font-mono text-xs uppercase tracking-widest">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line px-4 py-4 text-muted hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
