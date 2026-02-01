import type { Metadata } from "next"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/knowledge-system"])

export default function KnowledgeSystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
