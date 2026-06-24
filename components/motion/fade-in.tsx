"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { duration, ease } from "@/lib/tokens"

type Direction = "up" | "down" | "left" | "right" | "none"

// Offset applied to the initial (hidden) state
const offsetBy: Record<Direction, object> = {
  up: { y: 16 },
  down: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
  none: {},
}

// Motion element map — extend if other element types are needed
const elements = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  section: motion.section,
  article: motion.article,
} as const

type As = keyof typeof elements

interface FadeInProps {
  children: React.ReactNode
  /** Element type rendered by Motion. Default: div. */
  as?: As
  direction?: Direction
  /** Delay in seconds before this element starts animating. */
  delay?: number
  /** Override animation duration in seconds. Default: tokens.duration.slow (0.4s). */
  animDuration?: number
  once?: boolean
  className?: string
}

/**
 * Scroll-triggered fade + slide entrance animation.
 * Respects prefers-reduced-motion via the root MotionConfig in Providers.
 *
 * Works standalone OR as a child of <Stagger> — when inside Stagger the
 * parent propagates "hidden"/"visible" state and applies staggerChildren delay.
 */
export function FadeIn({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  animDuration = duration.slow,
  once = true,
  className,
}: FadeInProps) {
  // Cast to ElementType for polymorphic rendering — props are uniform across motion elements
  const MotionTag = elements[as] as React.ElementType

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: { opacity: 0, ...offsetBy[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: animDuration, ease: ease.enter, delay },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
