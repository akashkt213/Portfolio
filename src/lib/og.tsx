import { ImageResponse } from "next/og"
import { profile } from "@/content"

export const ogSize = { width: 1200, height: 630 }

/** Shared 1200×630 link-preview card in the site's terminal style. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#ece8e1",
          fontFamily: "monospace",
          borderLeft: "16px solid #ef4444",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#ef4444", textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 40 ? 64 : 88, fontWeight: 700, lineHeight: 1.05 }}>
          {title}
          <span style={{ color: "#ef4444" }}>_</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 48, fontSize: 28, color: "#a8a29e" }}>
          <span>{footer}</span>
          <span>
            {profile.initials}
            <span style={{ color: "#ef4444" }}>.</span>
          </span>
        </div>
      </div>
    ),
    ogSize,
  )
}
