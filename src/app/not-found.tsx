import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80dvh] max-w-3xl flex-col justify-center px-4 pt-14 sm:px-6">
      <p className="mb-4 font-mono text-xs uppercase tracking-label text-accent">Error 404</p>
      <h1 className="caret mb-6 font-mono text-5xl font-bold tracking-tight">page not found</h1>
      <p className="mb-10 font-mono text-sm text-muted">
        <span className="text-subtle">$</span> cd /this-page
        <br />
        <span className="text-accent">bash: cd: /this-page: No such file or directory</span>
      </p>
      <Link href="/" className="font-mono text-xs uppercase tracking-widest text-fg hover:text-accent">
        ← cd ~
      </Link>
    </div>
  )
}
