"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const elements = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  section: motion.section,
} as const

type As = keyof typeof elements

interface StaggerProps {
  children: React.ReactNode
  /** Seconds between each child's animation start. */
  staggerDelay?: number
  /** Seconds before the first child starts. */
  initialDelay?: number
  once?: boolean
  as?: As
  className?: string
}

/**
 * Orchestrates staggered entrance animations across child FadeIn components.
 * Propagates "hidden" → "visible" variant state to all descendant motion elements.
 *
 * Children must use string-based variants (hidden/visible) to participate —
 * FadeIn already does this by default.
 */
export function Stagger({
  children,
  staggerDelay = 0.08,
  initialDelay = 0.05,
  once = true,
  as = "div",
  className,
}: StaggerProps) {
  const MotionTag = elements[as] as React.ElementType

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
