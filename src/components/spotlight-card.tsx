"use client"

import { useRef } from "react"

/** A card with a soft accent glow that follows the cursor. Styles live in `.spotlight` (globals.css). */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "article" | "li"
}) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref as React.Ref<never>}
      onPointerMove={onMove}
      className={`spotlight border border-line bg-surface/60 transition-colors hover:border-line-strong ${className}`}
    >
      {children}
    </Tag>
  )
}
