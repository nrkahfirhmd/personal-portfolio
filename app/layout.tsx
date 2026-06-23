import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { rootMetadata, jsonLd } from "@/lib/metadata"
import { Providers } from "@/components/layout/providers"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = rootMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>
        {/* Skip link — first focusable element, visually hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-toast focus:rounded-md focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
        >
          Skip to main content
        </a>

        <Providers>
          {/* Fixed navigation — offset applied to page wrapper below */}
          <Nav />

          {/* Page wrapper — flex column so footer is always at viewport bottom */}
          <div className="flex min-h-dvh flex-col pt-[var(--nav-height)]">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
