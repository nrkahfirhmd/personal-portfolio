import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { readFile } from "node:fs/promises"
import path from "node:path"
import type { ComponentType, ReactNode } from "react"

type MDXComponents = Record<string, ComponentType<Record<string, unknown>>>

interface MDXResult {
  content: ReactNode
}

/**
 * Loads and compiles an MDX file from the content directory.
 * Applies remark-gfm (GitHub Flavored Markdown) and rehype-pretty-code
 * (syntax highlighted code blocks via Shiki) automatically.
 *
 * @param contentPath - Path segments relative to content/. e.g. ("projects", "slug", "index.mdx")
 * @param components - Custom MDX component overrides injected at render time.
 */
export async function loadMDX(
  contentPath: string[],
  components: MDXComponents = {},
): Promise<MDXResult> {
  const filePath = path.join(process.cwd(), "content", ...contentPath)
  const source = await readFile(filePath, "utf-8")

  const { content } = await compileMDX<Record<string, never>>({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: {
                dark: "github-dark-dimmed",
                light: "github-light",
              },
              keepBackground: false,
            },
          ],
        ],
      },
    },
  })

  return { content }
}
