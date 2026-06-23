import type { Post } from "@/types/content"

/**
 * Blog posts.
 * Gate: do not build /blog route until this array has 3+ published posts.
 * See docs/ROADMAP.md — Future Roadmap, v1.2.
 */
export const posts: Post[] = []

/** Published posts sorted newest first. Used by /blog listing and sitemap. */
export const publishedPosts = posts
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
