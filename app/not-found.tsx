import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <main id="main-content">
      <p>404</p>
      <h1>Page not found</h1>
      <Link href="/">← Back to home</Link>
    </main>
  )
}
