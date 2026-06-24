import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Meta } from "@/types/content"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/motion/fade-in"

interface HeroProps {
  meta: Meta
}

/**
 * Hero section — first impression.
 * Left-aligned. Typography does the visual work.
 *
 * Hierarchy: overline (role) → name (H1) → statement → CTAs → scroll indicator
 * No decorative elements. No hero image. The name is the visual.
 */
export function Hero({ meta }: HeroProps) {
  return (
    <section
      id="hero"
      data-section="hero"
      aria-label="Introduction"
      className="relative flex flex-col"
      style={{ minHeight: "calc(100svh - var(--nav-height))" }}
    >
      {/* Content — vertically centered in available space */}
      <div className="flex flex-1 items-center">
        <Container className="py-16">
          {/* Overline: role */}
          {meta.role && (
            <FadeIn as="p" delay={0}>
              <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {meta.role}
              </span>
            </FadeIn>
          )}

          {/* H1: name — not animated, renders immediately. Weight of type IS the visual. */}
          {meta.name && (
            <h1 className="mt-3 text-5xl font-bold leading-tight tracking-tight text-text md:text-6xl">
              {meta.name}
            </h1>
          )}

          {/* Statement — framed by horizontal rules */}
          {meta.statement && (
            <FadeIn delay={0.1} className="mt-6 max-w-xl">
              <div className="border-t border-border" />
              <p className="py-4 text-xl leading-snug text-text-secondary">
                {meta.statement}
              </p>
              <div className="border-b border-border" />
            </FadeIn>
          )}

          {/* CTAs */}
          <FadeIn delay={0.2} className="mt-8">
            <div className="flex flex-wrap items-center gap-6">
              {/* Primary: filled button */}
              <Link
                href="/#work"
                className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-semibold text-text-inverse transition-colors duration-fast hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See my work
              </Link>

              {/* Secondary: text link with arrow — avoids symmetric two-button template */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-fast hover:text-text"
              >
                Get in touch
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="translate-y-px"
                />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Scroll indicator — absolute bottom, communicates "more below" */}
      <FadeIn
        direction="none"
        delay={0.5}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <span
          aria-label="Scroll to content"
          className="select-none text-sm text-text-tertiary"
        >
          ↓
        </span>
      </FadeIn>
    </section>
  )
}
