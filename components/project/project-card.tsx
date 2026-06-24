import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"
import { StackTagList } from "@/components/ui/stack-tag-list"

interface ProjectCardProps {
  project: Project
  priority?: boolean
  headingLevel?: "h2" | "h3"
  className?: string
}

export function ProjectCard({
  project,
  priority = false,
  headingLevel: Heading = "h2",
  className,
}: ProjectCardProps) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/work/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg-raised transition-all duration-normal hover:-translate-y-1 hover:border-border-strong hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <figure className="relative aspect-[16/10] shrink-0 overflow-hidden bg-bg-subtle">
          {project.images.cover && (
            <Image
              src={project.images.cover}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
              priority={priority}
            />
          )}
        </figure>

        <div className="flex flex-1 flex-col p-6">
          <time dateTime={project.date} className="text-xs text-text-tertiary">
            {project.date}
          </time>

          <Heading className="mt-1 text-lg font-semibold leading-snug text-text">
            {project.title}
          </Heading>

          <p className="mt-2 line-clamp-2 text-sm leading-normal text-text-secondary">
            {project.description}
          </p>

          <StackTagList stack={project.stack} limit={4} className="mt-auto pt-4" />
        </div>
      </Link>
    </article>
  )
}
