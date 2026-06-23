import type { Metadata } from "next"
import type { Project, Post } from "@/types/content"
import { meta } from "@/content/meta"

const BASE_URL =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://nurkahfirahmada.com"

/** Root metadata applied to the entire site via app/layout.tsx. */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: meta.name,
      template: `%s | ${meta.name}`,
    },
    description: meta.bio.short || undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: meta.name,
      title: meta.name,
      description: meta.bio.short || undefined,
      images: meta.name
        ? [{ url: "/images/og/default.png", width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.name,
      description: meta.bio.short || undefined,
      images: meta.name ? ["/images/og/default.png"] : undefined,
    },
    robots: { index: true, follow: true },
  }
}

/** Per-project metadata for /work/[slug] pages. */
export function projectMetadata(project: Project): Metadata {
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      images: [
        {
          url: project.images.cover.startsWith("/")
            ? project.images.cover
            : `/images/og/${project.slug}.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  }
}

/** Per-post metadata for /blog/[slug] pages. */
export function postMetadata(post: Post): Metadata {
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: "/images/og/default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

/** JSON-LD Person schema for structured data in root layout. */
export function jsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.name,
    url: BASE_URL,
    jobTitle: meta.role,
    email: meta.email,
    sameAs: meta.links.map((l) => l.url),
  }
}
