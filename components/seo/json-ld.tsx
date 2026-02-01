import { SITE_CONFIG, organizationSchema, websiteSchema, softwareApplicationSchema } from "@/lib/seo-config"

// =============================================================================
// JSON-LD SCRIPT COMPONENT - Renders structured data
// =============================================================================

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// =============================================================================
// ORGANIZATION SCHEMA COMPONENT
// =============================================================================

export function OrganizationJsonLd() {
  return <JsonLd data={organizationSchema} />
}

// =============================================================================
// WEBSITE SCHEMA COMPONENT
// =============================================================================

export function WebsiteJsonLd() {
  return <JsonLd data={websiteSchema} />
}

// =============================================================================
// SOFTWARE APPLICATION SCHEMA COMPONENT
// =============================================================================

export function SoftwareApplicationJsonLd() {
  return <JsonLd data={softwareApplicationSchema} />
}

// =============================================================================
// BREADCRUMB SCHEMA GENERATOR
// =============================================================================

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={generateBreadcrumbSchema(items)} />
}

// =============================================================================
// FAQ PAGE SCHEMA GENERATOR
// =============================================================================

export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  return <JsonLd data={generateFAQSchema(faqs)} />
}

// =============================================================================
// ARTICLE/TECH ARTICLE SCHEMA GENERATOR - For documentation pages
// =============================================================================

export interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: props.title,
    description: props.description,
    url: `${SITE_CONFIG.url}${props.url}`,
    image: props.image || SITE_CONFIG.ogImage,
    datePublished: props.datePublished || new Date().toISOString(),
    dateModified: props.dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.mainSiteUrl,
    },
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${props.url}`,
    },
  }
}

export function ArticleJsonLd(props: ArticleSchemaProps) {
  return <JsonLd data={generateArticleSchema(props)} />
}

// =============================================================================
// HOW-TO SCHEMA GENERATOR - For step-by-step guides
// =============================================================================

export interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

export interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
}

export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: props.name,
    description: props.description,
    totalTime: props.totalTime || "PT10M",
    step: props.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
      image: step.image,
    })),
  }
}

export function HowToJsonLd(props: HowToSchemaProps) {
  return <JsonLd data={generateHowToSchema(props)} />
}

// =============================================================================
// COMBINED ROOT SCHEMAS - All schemas for the root layout
// =============================================================================

export function RootSchemas() {
  const combinedSchemas = [organizationSchema, websiteSchema, softwareApplicationSchema]

  return <JsonLd data={combinedSchemas} />
}
