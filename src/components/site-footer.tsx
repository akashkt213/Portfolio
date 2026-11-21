import { profile, site } from "@/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Built with Next.js ·{" "}
          <a href={site.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-fg">
            source ↗
          </a>
        </span>
      </div>
    </footer>
  )
}
