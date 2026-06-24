import type { Skill, SkillCategory } from "@/types/content"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { cn } from "@/lib/utils"

interface SkillsProps {
  categories: SkillCategory[]
}

// ─── Badge ─────────────────────────────────────────────────────────────────────
//
// Visual weight communicates level — no labels needed on each badge.
//   core       → accent fill: "this is what I reach for first"
//   proficient → raised fill: "comfortable, production-tested"
//   familiar   → outlined:    "know it, can use it"

const badgeStyles: Record<Skill["level"], string> = {
  core: "bg-accent-subtle text-accent-text",
  proficient: "bg-bg-raised text-text-secondary",
  familiar: "border border-border bg-transparent text-text-tertiary",
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2.5 py-1 text-xs font-medium leading-none",
        badgeStyles[skill.level],
      )}
    >
      {skill.name}
    </span>
  )
}

// ─── Level row (label + badges) ────────────────────────────────────────────────

const levelLabel: Record<Skill["level"], string> = {
  core: "Core",
  proficient: "Proficient",
  familiar: "Familiar",
}

function LevelRow({
  level,
  skills,
}: {
  level: Skill["level"]
  skills: Skill[]
}) {
  if (skills.length === 0) return null

  return (
    <div className="grid grid-cols-[80px_1fr] items-start gap-x-4 gap-y-1">
      <span className="pt-[3px] text-xs text-text-tertiary">
        {levelLabel[level]}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

// ─── Category block ────────────────────────────────────────────────────────────
//
// Left column: name + prose description.
// Right column: skills grouped by level.
// Divider border separates each category row.

function CategoryBlock({ category }: { category: SkillCategory }) {
  const byLevel = (level: Skill["level"]) =>
    category.skills.filter((s) => s.level === level)

  return (
    <div className="grid gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-12">
      {/* Label + description */}
      <div>
        <h3 className="text-sm font-semibold text-text">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {category.description}
        </p>
      </div>

      {/* Skill rows */}
      <div className="space-y-3">
        <LevelRow level="core" skills={byLevel("core")} />
        <LevelRow level="proficient" skills={byLevel("proficient")} />
        <LevelRow level="familiar" skills={byLevel("familiar")} />
      </div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function Skills({ categories }: SkillsProps) {
  if (categories.length === 0) return null

  return (
    <section
      id="skills"
      data-section="skills"
      aria-label="Technical skills"
      className="py-16 md:py-20 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            as="h2"
            overline="Skills"
            title="Technical depth"
            subtitle="Grouped by area and how deeply I work with each technology."
          />
        </FadeIn>

        {/* Legend — explains the visual badge language once, upfront */}
        <FadeIn delay={0.05} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-xs text-text-tertiary">Level:</span>
          {(["core", "proficient", "familiar"] as Skill["level"][]).map((level) => (
            <span key={level} className="flex items-center gap-1.5">
              <SkillBadge skill={{ name: levelLabel[level], level }} />
            </span>
          ))}
        </FadeIn>

        {/* Categories */}
        <div className="mt-10 divide-y divide-border">
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.06}>
              <CategoryBlock category={cat} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
