import type { ExperienceItem } from "@/types/content"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { cn } from "@/lib/utils"

interface ExperienceProps {
  experience: ExperienceItem[]
}

// ─── Timeline dot ──────────────────────────────────────────────────────────────

function TimelineDot({ current = false }: { current?: boolean }) {
  return (
    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
      {current ? (
        <>
          {/* Pulsing ring for current role */}
          <span className="absolute h-5 w-5 animate-ping rounded-full bg-accent opacity-20" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </>
      ) : (
        <span className="h-2 w-2 rounded-full bg-border-strong" />
      )}
    </div>
  )
}

// ─── Achievement list ──────────────────────────────────────────────────────────

function Achievements({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <ul className="mt-5 space-y-3" aria-label="Key achievements">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[3px] shrink-0 select-none font-mono text-xs text-text-tertiary"
          >
            ↳
          </span>
          <span className="text-sm leading-relaxed text-text-secondary">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

// ─── Single org card (content only — li wrapper comes from FadeIn) ─────────────

function OrgCard({
  item,
  isLast,
}: {
  item: ExperienceItem
  isLast: boolean
}) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/* Left column: dot only. Line is rendered by the parent. */}
      <div className="flex w-6 shrink-0 items-start pt-[3px]">
        <TimelineDot current={item.current ?? false} />
      </div>

      {/* Right column: all content */}
      <div className={cn("flex-1 min-w-0", !isLast && "pb-16")}>
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          {/* Company + role */}
          <div>
            <h3 className="text-xl font-semibold leading-tight text-text">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-fast hover:text-accent-text"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {item.role}
              {item.type && (
                <span className="ml-2 text-text-tertiary">· {item.type}</span>
              )}
            </p>
          </div>

          {/* Period + current badge */}
          <div className="flex flex-col items-end gap-2">
            {item.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-2.5 py-1 text-xs font-medium text-accent-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Current
              </span>
            )}
            <time
              className="text-xs tabular-nums text-text-tertiary"
              dateTime={item.period}
            >
              {item.period}
            </time>
          </div>
        </div>

        {/* Role description */}
        {item.description && (
          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-text-secondary">
            {item.description}
          </p>
        )}

        <Achievements items={item.accomplishments} />
      </div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function Experience({ experience }: ExperienceProps) {
  if (experience.length === 0) return null

  return (
    <section
      id="experience"
      data-section="experience"
      aria-label="Work experience"
      className="py-16 md:py-20 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            as="h2"
            overline="Experience"
            title="Where I've worked"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line — centered behind the dot column (left: 11px = center of w-6 = 12px ≈ left-3) */}
          <div
            aria-hidden
            className="absolute left-[11px] top-4 bottom-4 w-px bg-border"
          />

          <ol aria-label="Work history">
            {experience.map((item, i) => (
              <FadeIn
                key={`${item.company}-${item.period}`}
                delay={Math.min(i * 0.06, 0.18)}
              >
                <OrgCard item={item} isLast={i === experience.length - 1} />
              </FadeIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
