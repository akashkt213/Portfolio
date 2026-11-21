/** A home-page section with the "// label ────" heading used across the site. */
export function Section({
  id,
  label,
  index,
  children,
  className = "",
}: {
  id: string
  label: string
  index: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className={`py-20 sm:py-28 ${className}`}>
      <div className="reveal mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-label">
        <span className="text-subtle">{index}</span>
        <h2 id={`${id}-label`} className="text-accent">
          {label}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  )
}
