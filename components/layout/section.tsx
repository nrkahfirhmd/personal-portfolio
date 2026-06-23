import { cn } from "@/lib/utils"

type SectionBackground = "default" | "subtle" | "raised"

const backgroundClass: Record<SectionBackground, string> = {
  default: "bg-bg",
  subtle: "bg-bg-subtle",
  raised: "bg-bg-raised",
}

interface SectionProps {
  children: React.ReactNode
  id?: string
  "data-section"?: string
  "aria-label"?: string
  background?: SectionBackground
  /** Override the default vertical padding (py-16 md:py-20 lg:py-32) */
  className?: string
}

export function Section({
  children,
  id,
  "data-section": dataSection,
  "aria-label": ariaLabel,
  background = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      data-section={dataSection}
      aria-label={ariaLabel}
      className={cn(
        "py-16 md:py-20 lg:py-32",
        backgroundClass[background],
        className,
      )}
    >
      {children}
    </section>
  )
}
