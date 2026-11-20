import { profile } from "@/content"
import { ogSize, renderOgImage } from "@/lib/og"

export const alt = `${profile.name} · ${profile.role}`
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgImage({ eyebrow: profile.role, title: profile.name, footer: profile.pitch })
}
