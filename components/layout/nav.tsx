"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"
import { meta } from "@/content/meta"
import { cn } from "@/lib/utils"
import { Container } from "./container"

// Work and Contact are home-page anchor sections.
// Blog and Lab are standalone pages.
const NAV_LINKS = [
  { label: "Work", anchor: "work" },
  { label: "Blog", href: "/blog" },
  { label: "Lab", href: "/experiments" },
  { label: "Contact", anchor: "contact" },
] as const

type NavLink = (typeof NAV_LINKS)[number]

function isAnchorLink(link: NavLink): link is Extract<NavLink, { anchor: string }> {
  return "anchor" in link
}

export function Nav() {
  const pathname = usePathname()
  const activeSection = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isHome = pathname === "/"

  function getHref(link: NavLink): string {
    if (isAnchorLink(link)) {
      return isHome ? `#${link.anchor}` : `/#${link.anchor}`
    }
    return link.href
  }

  function isActive(link: NavLink): boolean {
    if (isAnchorLink(link)) {
      return activeSection === link.anchor
    }
    return pathname === link.href || pathname.startsWith(`${link.href}/`)
  }

  // Sync dialog visibility with state
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (mobileOpen) {
      dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [mobileOpen])

  // Propagate native dialog close (Escape key) back to state
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    function onClose() {
      setMobileOpen(false)
    }
    dialog.addEventListener("close", onClose)
    return () => dialog.removeEventListener("close", onClose)
  }, [])

  // Close on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Derive monogram — first letter of each word, max 2
  const monogram = meta.name
    ? meta.name
        .split(" ")
        .map((w) => w[0] ?? "")
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "NR"

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-sticky h-[var(--nav-height)]">
        <nav
          aria-label="Main navigation"
          className="flex h-full items-center border-b border-border bg-bg/90 backdrop-blur-md"
        >
          <Container className="flex items-center justify-between">
            {/* Logo / monogram */}
            <Link
              href="/"
              aria-label={meta.name ? `${meta.name} — home` : "Home"}
              className="text-sm font-semibold tracking-tight text-text transition-colors duration-fast hover:text-accent"
            >
              {monogram}
            </Link>

            {/* Desktop links */}
            <ul role="list" className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={getHref(link)}
                    aria-current={isActive(link) ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium transition-colors duration-fast",
                      isActive(link)
                        ? "text-text"
                        : "text-text-secondary hover:text-text",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile trigger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-haspopup="dialog"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors duration-fast hover:text-text md:hidden"
            >
              <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Container>
        </nav>
      </header>

      {/* Mobile navigation — native <dialog> for focus trap + Escape key */}
      <dialog
        ref={dialogRef}
        aria-label="Mobile navigation"
        className={cn(
          "m-0 h-dvh w-screen max-h-none max-w-none bg-bg p-0",
          "md:hidden",
          // Hide the browser's default ::backdrop (dialog fills the screen)
          "[&::backdrop]:hidden",
        )}
      >
        {/* Dialog header — mirrors the main nav bar */}
        <div className="flex h-[var(--nav-height)] items-center justify-between border-b border-border px-6">
          <Link
            href="/"
            aria-label={meta.name ? `${meta.name} — home` : "Home"}
            className="text-sm font-semibold tracking-tight text-text"
            onClick={() => setMobileOpen(false)}
          >
            {monogram}
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors duration-fast hover:text-text"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="px-6 py-8">
          <ul role="list">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={getHref(link)}
                  aria-current={isActive(link) ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-4 text-2xl font-semibold transition-colors duration-fast",
                    isActive(link)
                      ? "text-text"
                      : "text-text-secondary hover:text-text",
                  )}
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <div
                    role="separator"
                    aria-hidden="true"
                    className="border-t border-border"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Social links */}
          {meta.links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-4">
              {meta.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-secondary transition-colors duration-fast hover:text-text"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </dialog>
    </>
  )
}
