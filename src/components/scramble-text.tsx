"use client"

import { useEffect, useState } from "react"

const GLYPHS = "!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

/**
 * Text that "decodes" into place on mount. The real text is rendered on the server
 * and exposed to screen readers; the animation is skipped for reduced-motion users.
 */
export function ScrambleText({
  text,
  className = "",
  duration = 900,
}: {
  text: string
  className?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const revealed = Math.floor(progress * text.length)
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            i < revealed || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      )
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [text, duration])

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{display}</span>
    </span>
  )
}
