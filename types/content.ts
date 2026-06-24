export interface Skill {
  name: string
  /**
   * core      — Daily driver. Deep knowledge. Ships production systems with it.
   * proficient — Ships confidently. Understands internals well.
   * familiar   — Has shipped with it. Can contribute without ramping up.
   */
  level: "core" | "proficient" | "familiar"
}

export interface SkillCategory {
  /** Display name. e.g. "Frontend", "Backend & Data", "Tooling" */
  name: string
  /** 1–2 sentences of context. What role does this category play in your work? */
  description: string
  skills: Skill[]
}

export interface SocialLink {
  label: string
  url: string
  icon: "github" | "linkedin" | "twitter" | "email"
}

export interface Stat {
  /** Display value. e.g. "5+" or "30" */
  value: string
  /** Short label below the value. e.g. "Years of experience" */
  label: string
}

export interface Principle {
  /** Short title. 1–3 words. e.g. "Craft" or "Performance First" */
  title: string
  /** 1–2 sentences expanding on the principle. */
  body: string
}

export interface Meta {
  name: string
  role: string
  /** ≤ 15 words. Shown in hero below the name. */
  statement: string
  bio: {
    /** 2–3 sentences. Used in root meta description. */
    short: string
    /** Paragraphs rendered in the About section. */
    long: string[]
  }
  /** e.g. "Open to full-time roles" — shown in About sidebar. null hides the field. */
  availability: string | null
  email: string
  /** Path to profile photo in /public/images/. Optional — About section omits photo if absent. */
  photo?: string
  /** Tech tags shown in About section. No skill bars — just names. */
  tools: string[]
  /** 3–4 numbers. Displayed in the About sidebar. Optional. */
  stats?: Stat[]
  /** 2–3 core principles. Displayed below the bio paragraphs. Optional. */
  philosophy?: Principle[]
  links: SocialLink[]
  /** Path to resume PDF in /public/. e.g. "/resume.pdf" */
  resume: string
}

export interface Project {
  /** URL-safe slug. Becomes /work/[slug]. */
  slug: string
  title: string
  /** 1 sentence. Shown on project card. */
  description: string
  /** 2–3 sentences. Shown in project detail header. */
  summary: string
  role: string
  /** e.g. "Web App", "Tool", "Design". Used as overline in detail header. */
  category: string
  stack: string[]
  /** e.g. "2025" or "Jan 2025". */
  date: string
  /** What changed as a result of this project. 1–2 sentences. */
  outcome: string
  links: {
    live?: string
    github?: string
  }
  images: {
    /** Path to cover image in /public/images/projects/. e.g. "/images/projects/slug-cover.webp" */
    cover: string
    screenshots?: string[]
  }
  /** Show on home Work section. */
  featured: boolean
  /** Sort order within featured projects. Lower = first. */
  order: number
}

export interface Post {
  /** URL-safe slug. Becomes /blog/[slug]. */
  slug: string
  title: string
  /** 2–3 sentences. Used as meta description and shown as excerpt on listing. */
  description: string
  /** ISO date string. e.g. "2025-06-01" */
  date: string
  /** Estimated reading time in minutes. */
  readingTime: number
  tags: string[]
  /** false = draft, excluded from listing and sitemap. */
  published: boolean
}

export interface Experiment {
  /** URL-safe slug. No detail page — links directly out. */
  slug: string
  title: string
  /** 1 sentence. */
  description: string
  year: string
  stack: string[]
  links: {
    live?: string
    github?: string
  }
  /** Path to thumbnail in /public/images/. Optional — fallback tile rendered if absent. */
  thumbnail?: string
}

export interface ExperienceItem {
  company: string
  /** Optional: company website for a subtle link on the company name. */
  url?: string
  role: string
  /** "Full-time" | "Contract" | "Freelance" | "Internship" | "Part-time" */
  type?: string
  /** e.g. "2022 – 2024" */
  period: string
  /** 1–2 sentences of role context — what the team/product does, your scope. */
  description?: string
  /** Outcome-focused bullet points. 2–3 per role. */
  accomplishments: string[]
  /** Marks the current role. Shows a "Current" badge and accent dot. */
  current?: boolean
}
