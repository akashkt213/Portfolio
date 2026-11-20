"use client"

import { useEffect, useState } from "react"

/** Live local time in the given timezone, e.g. "14:32 IST". Renders nothing until mounted to avoid hydration mismatch. */
export function LiveClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })
    const update = () => setTime(fmt.format(new Date()))
    update()
    const id = setInterval(update, 15_000)
    return () => clearInterval(id)
  }, [timezone])

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {time ?? "--:--"}
    </time>
  )
}
