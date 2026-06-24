import type { Meta } from "@/types/content"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactLinkList } from "@/components/ui/contact-link-list"
import { FadeIn } from "@/components/motion/fade-in"

interface ContactProps {
  meta: Meta
  /**
   * section — home page usage: h2, centered, row link variant
   * page    — /contact page usage: h1, left-aligned, list link variant
   */
  variant?: "section" | "page"
}

// ─── Email display ──────────────────────────────────────────────────────────────
//
// Framed by horizontal rules — makes the email address the focal CTA.

function EmailCTA({ email, large }: { email: string; large?: boolean }) {
  return (
    <div>
      <div className="border-t border-border" />
      <div className="py-6">
        <a
          href={`mailto:${email}`}
          aria-label={`Send email to ${email}`}
          className={
            large
              ? "text-xl font-medium text-accent-text transition-colors duration-fast hover:text-accent md:text-2xl"
              : "text-lg font-medium text-accent-text transition-colors duration-fast hover:text-accent"
          }
        >
          {email}
        </a>
      </div>
      <div className="border-b border-border" />
    </div>
  )
}

// ─── Section variant (home page) ───────────────────────────────────────────────
//
// Narrow container, centered. Email prominent. Links in a row below.

function SectionVariant({ meta }: { meta: Meta }) {
  return (
    <section
      id="contact"
      data-section="contact"
      aria-label="Contact"
      className="py-16 md:py-20 lg:py-32"
    >
      <Container variant="narrow">
        <FadeIn>
          <SectionHeading
            as="h2"
            overline="Contact"
            title="Let's work together"
            subtitle="Open to new projects, full-time roles, and interesting problems. The best way to reach me is email."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <EmailCTA email={meta.email} />
        </FadeIn>

        {meta.links.length > 0 && (
          <FadeIn delay={0.15} className="mt-8 flex justify-center">
            <ContactLinkList
              links={meta.links}
              resume={meta.resume}
              variant="row"
            />
          </FadeIn>
        )}
      </Container>
    </section>
  )
}

// ─── Page variant (/contact) ───────────────────────────────────────────────────
//
// Full page layout. Left-aligned. Email and links each in labeled subsections.

function PageVariant({ meta }: { meta: Meta }) {
  return (
    <main id="main-content">
      <section aria-label="Contact" className="py-16 md:py-20 lg:py-24">
        <Container variant="narrow">
          <FadeIn>
            <SectionHeading
              as="h1"
              overline="Contact"
              title="Let's work together"
              subtitle="Open to new projects, full-time roles, and interesting problems. The best way to reach me is email."
            />
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.08} className="mt-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">
              Email
            </p>
            <EmailCTA email={meta.email} large />
          </FadeIn>

          {/* Links */}
          {meta.links.length > 0 && (
            <FadeIn delay={0.14} className="mt-10">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                Elsewhere
              </p>
              <ContactLinkList
                links={meta.links}
                resume={meta.resume}
                variant="list"
              />
            </FadeIn>
          )}
        </Container>
      </section>
    </main>
  )
}

// ─── Public component ──────────────────────────────────────────────────────────

export function Contact({ meta, variant = "section" }: ContactProps) {
  if (variant === "page") return <PageVariant meta={meta} />
  return <SectionVariant meta={meta} />
}
