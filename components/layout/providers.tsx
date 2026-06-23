"use client"

import { MotionConfig } from "motion/react"

/**
 * Client-side app providers.
 * Dark mode is handled via CSS (prefers-color-scheme) — no ThemeProvider needed.
 * MotionConfig sets reducedMotion="user" so all Motion components inherit the
 * user's OS preference without individual components needing to check it.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
