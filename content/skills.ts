import type { SkillCategory } from "@/types/content"

/**
 * Skill categories. Rendered in the Skills section.
 *
 * Levels:
 *   core       — Daily driver. Ship production systems with it.
 *   proficient — Ship confidently. Understand the internals well.
 *   familiar   — Have shipped with it. Can contribute without ramping.
 *
 * Replace or extend these to reflect your actual depth.
 */
export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    description:
      "Where I spend most of my time. React and TypeScript on Next.js is my primary environment — I've shipped at scale with this stack and understand its tradeoffs deeply.",
    skills: [
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "CSS", level: "core" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Radix UI", level: "proficient" },
      { name: "Framer Motion", level: "proficient" },
      { name: "Vite", level: "proficient" },
      { name: "Vue.js", level: "familiar" },
      { name: "Svelte", level: "familiar" },
    ],
  },
  {
    name: "Backend & Data",
    description:
      "Enough to build and own full-stack features independently. I'm most comfortable in Node.js runtimes and relational databases.",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Prisma", level: "proficient" },
      { name: "REST APIs", level: "proficient" },
      { name: "tRPC", level: "proficient" },
      { name: "GraphQL", level: "familiar" },
      { name: "Redis", level: "familiar" },
    ],
  },
  {
    name: "Tooling & Infrastructure",
    description:
      "The scaffolding that keeps production reliable. I care about testing, CI, and observability as much as the product code.",
    skills: [
      { name: "Git", level: "core" },
      { name: "Vitest", level: "proficient" },
      { name: "Playwright", level: "proficient" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Vercel", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "AWS", level: "familiar" },
    ],
  },
  {
    name: "Design",
    description:
      "Fluent in design tools and the design-to-code process. I work directly from Figma and have built design systems from scratch.",
    skills: [
      { name: "Figma", level: "core" },
      { name: "Design systems", level: "core" },
      { name: "Accessibility (WCAG)", level: "proficient" },
      { name: "Motion design", level: "familiar" },
    ],
  },
]
