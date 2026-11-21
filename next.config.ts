import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
}

// Plugins are given by package name (strings) so the config stays serializable for Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [["rehype-pretty-code", { theme: "github-dark-dimmed", keepBackground: false }]],
  },
})

export default withMDX(nextConfig)
