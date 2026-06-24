import type { Meta, ExperienceItem } from "@/types/content"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Avatar } from "@/components/ui/avatar"
import { StackTagList } from "@/components/ui/stack-tag-list"
import { FadeIn } from "@/components/motion/fade-in"
import { Stagger } from "@/components/motion/stagger"

interface AboutProps {
  meta: Meta
  experience?: ExperienceItem[]
}

// ─── Sub-sections ──────────────────────────────────────────────────────────────

function Bio({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Stagger className="space-y-5">
      {paragraphs.map((text, i) => (
        <FadeIn key={i} as="p" className="max-w-[65ch] text-base leading-relaxed text-text-secondary">
          {text}
        </FadeIn>
      ))}
    </Stagger>
  )
}

function Philosophy({ items }: { items: NonNullable<Meta["philosophy"]> }) {
  return (
    <div>
      <p className="mb-6 text-xs font-medium uppercase tracking-wider text-text-tertiary">
        Principles
      </p>
      <Stagger className="divide-y divide-border">
        {items.map((item) => (
          <FadeIn key={item.title} className="py-6 first:pt-0 last:pb-0">
            <p className="text-sm font-semibold text-text">{item.title}</p>
            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-text-secondary">
              {item.body}
            </p>
          </FadeIn>
        ))}
      </Stagger>
    </div>
  )
}

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div>
      <p className="mb-6 text-xs font-medium uppercase tracking-wider text-text-tertiary">
        Experience
      </p>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div key={`${item.company}-${item.period}`} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <p className="text-sm font-semibold text-text">{item.role}</p>
                <p className="text-sm text-text-secondary">{item.company}</p>
              </div>
              <time className="shrink-0 text-xs text-text-tertiary">{item.period}</time>
            </div>

            {item.accomplishments.length > 0 && (
              <ul className="mt-4 space-y-2 pl-4">
                {item.accomplishments.map((acc, i) => (
                  <li
                    key={i}
                    className="list-disc text-sm leading-normal text-text-secondary marker:text-text-tertiary"
                  >
                    {acc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Stats({ items }: { items: NonNullable<Meta["stats"]> }) {
  return (
    <div className="space-y-6">
      {items.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-bold leading-none tracking-tight text-text">
            {stat.value}
          </p>
          <p className="mt-1.5 text-xs text-text-tertiary">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────────

export function About({ meta, experience = [] }: AboutProps) {
  const hasPhilosophy = meta.philosophy && meta.philosophy.length > 0
  const hasExperience = experience.length > 0
  const hasStats = meta.stats && meta.stats.length > 0
  const hasSidebar = meta.photo || meta.availability || hasStats

  return (
    <section
      id="about"
      data-section="about"
      aria-label="About"
      className="py-16 md:py-20 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            as="h2"
            overline="About"
            title="The person behind the work"
          />
        </FadeIn>

        <div
          className={[
            "mt-12",
            hasSidebar
              ? "grid gap-16 md:grid-cols-[1fr_220px]"
              : "",
          ].join(" ")}
        >
          {/* ── Main content column ── */}
          <div className="space-y-14">
            <Bio paragraphs={meta.bio.long} />

            {hasPhilosophy && (
              <FadeIn>
                <Philosophy items={meta.philosophy!} />
              </FadeIn>
            )}

            {hasExperience && (
              <FadeIn>
                <Timeline items={experience} />
              </FadeIn>
            )}

            <FadeIn>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                  Working with
                </p>
                <StackTagList stack={meta.tools} />
              </div>
            </FadeIn>
          </div>

          {/* ── Sidebar ── */}
          {hasSidebar && (
            <aside aria-label="Profile details" className="flex flex-col gap-10 md:items-start">
              {meta.photo && (
                <FadeIn direction="left">
                  <Avatar
                    src={meta.photo}
                    alt={`${meta.name}'s profile photo`}
                    size={200}
                    priority
                  />
                </FadeIn>
              )}

              {meta.availability && (
                <FadeIn>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                      Currently
                    </p>
                    <p className="mt-1.5 text-sm text-text-secondary">
                      {meta.availability}
                    </p>
                  </div>
                </FadeIn>
              )}

              {hasStats && (
                <FadeIn>
                  <Stats items={meta.stats!} />
                </FadeIn>
              )}
            </aside>
          )}
        </div>
      </Container>
    </section>
  )
}
