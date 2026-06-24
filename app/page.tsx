import { Hero } from "@/components/sections/hero"
import { meta } from "@/content/meta"

export default function Home() {
  return (
    <main id="main-content">
      <Hero meta={meta} />
    </main>
  )
}
