import { cn } from "@/lib/utils"

interface StackTagListProps {
  stack: string[]
  limit?: number
  className?: string
}

export function StackTagList({ stack, limit = Infinity, className }: StackTagListProps) {
  const visible = stack.slice(0, limit)
  const overflow = stack.length - visible.length

  return (
    <ul
      aria-label="Technologies"
      className={cn("flex flex-wrap gap-1.5", className)}
    >
      {visible.map((tag) => (
        <li key={tag}>
          <span className="inline-block rounded-sm bg-bg-subtle px-2 py-0.5 text-xs font-medium tracking-wide text-text-secondary">
            {tag}
          </span>
        </li>
      ))}
      {overflow > 0 && (
        <li>
          <span
            aria-label={`${overflow} more technologies`}
            className="inline-block rounded-sm border border-border px-2 py-0.5 text-xs font-medium tracking-wide text-text-tertiary"
          >
            +{overflow} more
          </span>
        </li>
      )}
    </ul>
  )
}
