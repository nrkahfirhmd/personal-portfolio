import { notFound } from "next/navigation"
import { publishedPosts } from "@/content/posts"
import { postMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = publishedPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return postMetadata(post)
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = publishedPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return <main id="main-content" />
}
