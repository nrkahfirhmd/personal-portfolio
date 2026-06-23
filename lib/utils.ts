import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merges Tailwind classes with conflict resolution. The cn() utility. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/** Formats an ISO date string to a human-readable month + year. */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
}

/** Extracts the year from an ISO date string. */
export function formatYear(isoDate: string): string {
  return new Date(isoDate).getFullYear().toString()
}

/** Truncates text to the last word boundary at or before maxLength. Appends ellipsis. */
export function excerpt(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength)
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "…"
}
