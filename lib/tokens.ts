/**
 * Design tokens for JS/TypeScript contexts.
 * The authoritative source is app/globals.css — keep values in sync.
 *
 * Use cases:
 *   Motion variants (duration/ease as numbers and tuples)
 *   Inline styles when Tailwind utilities can't reach the prop
 *   Programmatic logic (breakpoint checks, z-index comparisons)
 */

// Duration in seconds — Motion convention (not milliseconds)
export const duration = {
  instant: 0,
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  entrance: 0.6,
} as const

// Cubic bezier tuples — pass directly to Motion's `ease` prop
export const ease = {
  standard: [0.4, 0, 0.2, 1] as const,
  enter: [0, 0, 0.2, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const

export const zIndex = {
  below: -1,
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
} as const

// Breakpoints in px — for matchMedia or conditional logic
export const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

// Container max-widths in px
export const container = {
  narrow: 640,
  default: 1080,
  wide: 1280,
} as const

// Radius as rem strings — for inline styles when rounded-* classes won't work
export const radius = {
  none: "0",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  full: "9999px",
} as const

// CSS variable references — for style props when Tailwind color utilities aren't available
export const cssVar = {
  // Surfaces
  bg: "var(--c-bg)",
  bgSubtle: "var(--c-bg-subtle)",
  bgRaised: "var(--c-bg-raised)",
  bgOverlay: "var(--c-bg-overlay)",
  // Text
  text: "var(--c-text)",
  textSecondary: "var(--c-text-secondary)",
  textTertiary: "var(--c-text-tertiary)",
  textDisabled: "var(--c-text-disabled)",
  textInverse: "var(--c-text-inverse)",
  // Borders
  border: "var(--c-border)",
  borderStrong: "var(--c-border-strong)",
  // Accent
  accent: "var(--c-accent)",
  accentHover: "var(--c-accent-hover)",
  accentSubtle: "var(--c-accent-subtle)",
  accentText: "var(--c-accent-text)",
  // Shadows
  shadowSm: "var(--c-shadow-sm)",
  shadowMd: "var(--c-shadow-md)",
  shadowLg: "var(--c-shadow-lg)",
  shadowXl: "var(--c-shadow-xl)",
  // Layout
  navHeight: "var(--nav-height)",
} as const

// Motion animation variants — pass to the Motion `variants` prop
export const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.slow, ease: ease.enter },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: duration.slow, ease: ease.standard },
    },
  },
  stagger: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
} as const
