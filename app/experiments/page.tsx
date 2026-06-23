import { experiments } from "@/content/experiments"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lab",
  description: "Experiments, explorations, and side work.",
}

export default function ExperimentsPage() {
  void experiments
  return <main id="main-content" />
}
