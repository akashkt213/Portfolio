"use client"

import { useState } from "react"

/** Copies the email to the clipboard with a short confirmation; falls back to mailto if the clipboard is unavailable. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="group inline-flex items-center gap-3 border border-line-strong bg-surface px-5 py-3 font-mono text-sm transition-colors hover:border-accent"
      >
        <span>{email}</span>
        <span className="text-xs uppercase tracking-widest text-subtle group-hover:text-accent">
          {copied ? "copied ✓" : "copy"}
        </span>
      </button>
      <a
        href={`mailto:${email}`}
        className="px-2 py-3 font-mono text-xs uppercase tracking-widest text-subtle transition-colors hover:text-fg"
      >
        or open mail ↗
      </a>
      <span role="status" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </div>
  )
}
