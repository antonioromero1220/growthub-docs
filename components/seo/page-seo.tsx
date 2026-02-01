"use client"

import { usePathname } from "next/navigation"
import { BreadcrumbJsonLd, ArticleJsonLd, type BreadcrumbItem } from "./json-ld"
import { SITE_CONFIG } from "@/lib/seo-config"

// =============================================================================
// PAGE SEO COMPONENT - Adds structured data to individual pages
// =============================================================================

interface PageSEOProps {
  title: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
  datePublished?: string
  dateModified?: string
  noArticleSchema?: boolean
}

export function PageSEO({
  title,
  description,
  breadcrumbs,
  datePublished,
  dateModified,
  noArticleSchema = false,
}: PageSEOProps) {
  const pathname = usePathname()

  // Generate breadcrumbs from pathname if not provided
  const generatedBreadcrumbs: BreadcrumbItem[] = breadcrumbs || generateBreadcrumbsFromPath(pathname)

  return (
    <>
      {/* Breadcrumb Schema */}
      {generatedBreadcrumbs.length > 0 && <BreadcrumbJsonLd items={generatedBreadcrumbs} />}

      {/* Article Schema for documentation pages */}
      {!noArticleSchema && (
        <ArticleJsonLd
          title={title}
          description={description}
          url={pathname}
          datePublished={datePublished}
          dateModified={dateModified}
        />
      )}
    </>
  )
}

// =============================================================================
// HELPER: Generate breadcrumbs from URL path
// =============================================================================

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Home", url: "/" }]

  let currentPath = ""
  for (const segment of segments) {
    currentPath += `/${segment}`
    breadcrumbs.push({
      name: formatSegmentName(segment),
      url: currentPath,
    })
  }

  return breadcrumbs
}

function formatSegmentName(segment: string): string {
  // Map common slugs to proper names
  const nameMap: Record<string, string> = {
    platform: "Platform",
    "platform-overview": "Platform Overview",
    "agent-builder": "Agent Builder",
    "content-studio": "Content Studio",
    "knowledge-system": "Knowledge System",
    "brand-kit-system": "Brand Kit System",
    "export-platform": "Export Platform",
    "agent-orchestration": "Agent Orchestration",
    "workflow-orchestration": "Workflow Orchestration",
    integrations: "Integrations",
    "getting-started": "Getting Started",
    "api-reference": "API Reference",
    support: "Support",
    inputs: "Inputs",
    "input-node": "Input Node",
    "files-node": "Files Node",
    "trigger-node": "Trigger Node",
    "url-input-node": "URL Input Node",
    "audio-input-node": "Audio Input Node",
    "image-input-node": "Image Input Node",
    "video-generation": "Video Generation",
    "image-generation": "Image Generation",
    "scene-continuity": "Scene Continuity",
    "brand-assets": "Brand Assets",
    overview: "Overview",
    "how-to-use": "How to Use",
    "kb-nodes": "KB Nodes",
    "creating-kb": "Creating KB",
    "specific-features": "Specific Features",
    form: "Form Interfaces",
    "chat-assistant": "Chat Assistant",
    "landing-page-chatbot": "Landing Page Chatbot",
    "cms-publisher": "CMS Publisher",
    "shopify-integration": "Shopify Integration",
    "preview-urls": "Preview URLs",
    "custom-domains": "Custom Domains",
    "batch-generation": "Batch Generation",
    "layer-1-input": "L1: Input",
    "layer-2-processing": "L2: Processing",
    "layer-3-orchestration": "L3: Orchestration",
    "layer-4-execution": "L4: Execution",
    "layer-5-presentation": "L5: Presentation",
    slack: "Slack",
    asana: "Asana",
    hubspot: "HubSpot",
    gohighlevel: "GoHighLevel",
    shopify: "Shopify",
    wordpress: "WordPress",
  }

  return (
    nameMap[segment] ||
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  )
}

// =============================================================================
// SPEAKABLE SCHEMA - For voice assistant optimization
// =============================================================================

interface SpeakableSchemaProps {
  selectors: string[]
}

export function SpeakableSchema({ selectors }: SpeakableSchemaProps) {
  const pathname = usePathname()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_CONFIG.url}${pathname}`,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: selectors,
          },
        }),
      }}
    />
  )
}
