import type { MDXComponents } from "mdx/types"
import Link from "next/link"

// Required by @next/mdx in the App Router. Post typography comes from the `prose` styles in globals.css.
const components: MDXComponents = {
  a: ({ href = "", children, ...props }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} {...props}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>
    ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
