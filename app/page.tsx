import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Work } from "@/components/sections/work"
import { meta } from "@/content/meta"
import { experience } from "@/content/experience"
import { featuredProjects } from "@/content/projects"

export default function Home() {
  return (
    <main id="main-content">
      <Hero meta={meta} />
      <About meta={meta} experience={experience} />
      <Work projects={featuredProjects} />
    </main>
  )
}
