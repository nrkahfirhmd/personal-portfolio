import { Hero } from "@/components/sections/hero"
import { Work } from "@/components/sections/work"
import { meta } from "@/content/meta"
import { featuredProjects } from "@/content/projects"

export default function Home() {
  return (
    <main id="main-content">
      <Hero meta={meta} />
      <Work projects={featuredProjects} />
    </main>
  )
}
