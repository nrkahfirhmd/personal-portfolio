import { publishedPosts } from "@/content/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and notes.",
}

export default function BlogPage() {
  void publishedPosts
  return <main id="main-content" />
}
