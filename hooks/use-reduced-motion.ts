"use client"

import { useEffect, useState } from "react"

/**
 * Returns true when the visitor has requested reduced motion via their OS setting.
 * SSR-safe: returns false on the server to avoid hydration mismatches.
 * Responds dynamically if the preference changes while the page is open.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return reduced
}
