import { cn } from "@/lib/utils"

const tagStyles = {
  h1: "text-4xl font-bold leading-tight tracking-tight text-text md:text-5xl",
  h2: "text-2xl font-semibold leading-tight tracking-tight text-text md:text-3xl",
  h3: "text-xl font-semibold leading-snug text-text",
} as const

interface SectionHeadingProps {
  title: string
  as: "h1" | "h2" | "h3"
  overline?: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  title,
  as: Tag,
  overline,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {overline && (
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-tertiary">
          {overline}
        </p>
      )}
      <Tag className={tagStyles[Tag]}>{title}</Tag>
      {subtitle && (
        <p className="mt-3 text-base leading-normal text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
