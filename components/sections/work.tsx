import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/types/content"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { FeaturedProject } from "@/components/project/featured-project"
import { ProjectCard } from "@/components/project/project-card"
import { ProjectGrid } from "@/components/project/project-grid"

interface WorkProps {
  projects: Project[]
  showMore?: boolean
}

export function Work({ projects, showMore = true }: WorkProps) {
  if (projects.length === 0) return null

  const [first, ...rest] = projects as [Project, ...Project[]]

  return (
    <section
      id="work"
      data-section="work"
      aria-label="Selected work"
      className="py-16 md:py-20 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading as="h2" overline="Work" title="Selected Work" />
        </FadeIn>

        <div className="mt-12 space-y-6">
          <FadeIn delay={0.05}>
            <FeaturedProject project={first} priority headingLevel="h3" />
          </FadeIn>

          {rest.length > 0 && (
            <ProjectGrid>
              {rest.map((project, i) => (
                <FadeIn key={project.slug} as="li" delay={i * 0.05}>
                  <ProjectCard project={project} headingLevel="h3" />
                </FadeIn>
              ))}
            </ProjectGrid>
          )}
        </div>

        {showMore && (
          <FadeIn delay={0.1} className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-fast hover:text-text"
            >
              See all work
              <ArrowRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="translate-y-px"
              />
            </Link>
          </FadeIn>
        )}
      </Container>
    </section>
  )
}
