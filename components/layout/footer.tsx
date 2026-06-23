import { meta } from "@/content/meta"
import { Container } from "./container"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Site footer" className="mt-auto">
      <Container>
        {/* Separator */}
        <div role="separator" className="border-t border-border" />

        {/* Footer body */}
        <div className="flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity + copyright */}
          <div className="flex flex-col gap-1">
            {meta.name && (
              <p className="text-sm font-medium text-text">{meta.name}</p>
            )}
            <p className="text-sm text-text-tertiary">
              <span aria-label="Copyright">©</span>{" "}
              <time dateTime={String(year)}>{year}</time>
            </p>
          </div>

          {/* Social links + resume */}
          <div className="flex flex-wrap items-center gap-4">
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
            {meta.resume && (
              <a
                href={meta.resume}
                aria-label="Download resume PDF"
                download
                className="text-sm font-medium text-text-secondary transition-colors duration-fast hover:text-text"
              >
                Resume ↓
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  )
}
