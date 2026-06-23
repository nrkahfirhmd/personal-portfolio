"use client"

import { useEffect, useRef, useState } from "react"

type SectionId = "hero" | "about" | "work" | "contact"

/**
 * Tracks which page section is currently scrolled into the upper viewport.
 * Reads `data-section` attributes on <section> elements.
 * Used by Nav to highlight the active anchor link.
 *
 * Sections must render with: <section data-section="hero" id="hero">
 */
export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[data-section]",
    )

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute(
              "data-section",
            ) as SectionId | null
            if (sectionId) setActive(sectionId)
          }
        }
      },
      {
        // Trigger when section enters the top 30% of the viewport
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    )

    sections.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return active
}
