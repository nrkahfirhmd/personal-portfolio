import { cn } from "@/lib/utils"

type ContainerVariant = "default" | "narrow" | "wide" | "full"

const variantClass: Record<ContainerVariant, string> = {
  default: "container-default",
  narrow: "container-narrow",
  wide: "container-wide",
  full: "container-full",
}

interface ContainerProps {
  children: React.ReactNode
  variant?: ContainerVariant
  as?: "div" | "header" | "footer" | "nav" | "article" | "aside"
  className?: string
}

export function Container({
  children,
  variant = "default",
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={cn(variantClass[variant], className)}>{children}</Tag>
  )
}
