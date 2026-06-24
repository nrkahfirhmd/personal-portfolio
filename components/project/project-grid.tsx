import { cn } from "@/lib/utils"
import { Stagger } from "@/components/motion/stagger"

interface ProjectGridProps {
  children: React.ReactNode
  className?: string
}

export function ProjectGrid({ children, className }: ProjectGridProps) {
  return (
    <Stagger
      as="ul"
      className={cn("grid grid-cols-1 gap-6 md:grid-cols-2", className)}
    >
      {children}
    </Stagger>
  )
}
