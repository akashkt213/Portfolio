import { About } from "@/components/home/about"
import { Contact } from "@/components/home/contact"
import { Experience } from "@/components/home/experience"
import { Hero } from "@/components/home/hero"
import { Projects } from "@/components/home/projects"
import { Writing } from "@/components/home/writing"
import { getPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <Hero />
      <About latestPost={posts[0]} />
      <Experience />
      <Projects />
      {/* <Writing posts={posts.slice(0, 3)} /> */}
      <Contact />
    </div>
  )
}
