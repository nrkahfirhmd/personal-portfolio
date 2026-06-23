import type { Project } from "@/types/content"

/**
 * All portfolio projects.
 * Minimum 2 projects required before Phase 2 development.
 * See docs/ROADMAP.md — Phase 0 gate.
 */
export const projects: Project[] = []

/** Featured projects sorted by display order. Used by the home Work section. */
export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order)
