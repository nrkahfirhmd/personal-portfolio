import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { meta } from "@/content/meta"
import { experience } from "@/content/experience"
import { skills } from "@/content/skills"
import { featuredProjects } from "@/content/projects"

export default function Home() {
  return (
    <main id="main-content">
      <Hero meta={meta} />
      <About meta={meta} />
      <Experience experience={experience} />
      <Skills categories={skills} />
      <Work projects={featuredProjects} />
    </main>
  )
}
