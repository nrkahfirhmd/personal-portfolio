import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"
import { StackTagList } from "@/components/ui/stack-tag-list"

interface FeaturedProjectProps {
  project: Project
  priority?: boolean
  headingLevel?: "h2" | "h3"
  className?: string
}

export function FeaturedProject({
  project,
  priority = false,
  headingLevel: Heading = "h3",
  className,
}: FeaturedProjectProps) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-raised transition-all duration-normal hover:border-border-strong hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex-row"
      >
        {/* Cover image — full width on mobile, left column on desktop */}
        <figure className="relative aspect-[16/10] shrink-0 overflow-hidden bg-bg-subtle md:aspect-auto md:w-[55%]">
          {project.images.cover && (
            <Image
              src={project.images.cover}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
              priority={priority}
            />
          )}
        </figure>

        {/* Content — below image on mobile, right column on desktop */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          {project.category && (
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">
              {project.category}
            </p>
          )}

          <Heading className="text-2xl font-semibold leading-tight tracking-tight text-text">
            {project.title}
          </Heading>

          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>

          {project.outcome && (
            <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-normal text-text-secondary">
              {project.outcome}
            </p>
          )}

          <StackTagList stack={project.stack} limit={5} className="mt-6" />

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text transition-all duration-fast group-hover:gap-2.5">
            View project
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  )
}
