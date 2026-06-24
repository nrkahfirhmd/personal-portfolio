import type { Metadata } from "next"
import { Contact } from "@/components/sections/contact"
import { meta } from "@/content/meta"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return <Contact meta={meta} variant="page" />
}
