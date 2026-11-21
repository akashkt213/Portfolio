import type { Metadata, Viewport } from "next"
import { Caveat, Geist, Geist_Mono, Silkscreen } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { profile, site, socials } from "@/content"
import "./globals.css"

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const pixel = Silkscreen({ subsets: ["latin"], weight: "400", variable: "--font-silkscreen" })
const hand = Caveat({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.pitch,
  authors: [{ name: profile.name, url: site.url }],
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name} · ${profile.role}`,
    description: profile.pitch,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${socials.find((s) => s.label === "X")?.handle ?? ""}`,
  },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable} ${hand.variable} ${pixel.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
