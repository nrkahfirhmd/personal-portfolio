import type { ExperienceItem } from "@/types/content"

/**
 * Work history. Rendered in the Experience section if non-empty.
 * Reverse chronological order — most recent first.
 *
 * Replace the placeholder entries below with your own.
 */
export const experience: ExperienceItem[] = [
  {
    company: "Studio Name",
    url: "https://example.com",
    role: "Senior Frontend Engineer",
    type: "Full-time",
    period: "2023 – Present",
    current: true,
    description:
      "Embedded in a small product team building a design-to-code platform used by enterprise design teams. Responsible for the component system, performance budget, and design-engineering bridge.",
    accomplishments: [
      "Built a component library adopted across 4 product teams, reducing UI inconsistencies and cutting design-to-dev handoff time by roughly half.",
      "Reduced initial bundle size from 340 kB to 87 kB through route-level code splitting and dependency auditing.",
      "Established a visual regression testing workflow that caught 23 unintended UI regressions before they reached production.",
    ],
  },
  {
    company: "Agency Name",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "2021 – 2023",
    description:
      "Worked across a portfolio of client products spanning fintech, healthcare, and e-commerce. Led frontend on 6 projects from kickoff to launch.",
    accomplishments: [
      "Delivered 6 client products on schedule across different stacks and design systems.",
      "Introduced Lighthouse CI to the agency workflow, bringing average performance scores from 54 to 91 across the portfolio.",
      "Mentored two junior engineers through their first production deployments.",
    ],
  },
  {
    company: "Startup",
    role: "Frontend Engineer",
    type: "Contract",
    period: "2020 – 2021",
    description:
      "Early hire on the product team. Helped build the MVP and the internal design system that outlasted the original product.",
    accomplishments: [
      "Built the MVP from scratch with React and Firebase; shipped in 11 weeks.",
      "Created a design token system that synced with Figma and the codebase, eliminating manual colour/spacing drift.",
    ],
  },
]
