import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"

// =============================================================================
// METADATA - SEO optimized
// =============================================================================

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/integrations"])

const integrations = [
  {
    title: "Slack",
    href: "/integrations/slack",
    description: "Team messaging and webhook triggers",
    tags: ["OAuth", "Webhooks"],
  },
  {
    title: "Asana",
    href: "/integrations/asana",
    description: "Project management and team collaboration",
    tags: ["API Token", "MCP Connector"],
  },
  {
    title: "HubSpot",
    href: "/integrations/hubspot",
    description: "CRM and marketing automation",
    tags: ["OAuth", "API Key"],
  },
  {
    title: "GoHighLevel",
    href: "/integrations/gohighlevel",
    description: "All-in-one marketing platform",
    tags: ["API Key"],
  },
  {
    title: "Shopify",
    href: "/integrations/shopify",
    description: "E-commerce platform publishing",
    tags: ["OAuth", "Storefront API"],
  },
  {
    title: "WordPress",
    href: "/integrations/wordpress",
    description: "CMS content publishing",
    tags: ["REST API", "XML-RPC"],
  },
]

export default function IntegrationsPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      {/* Structured Data */}
      <PageSEO
        title="Integrations | Connect Third-Party Tools"
        description="Connect Growthub with your favorite tools. Integrations with Slack, Asana, HubSpot, GoHighLevel, Shopify, WordPress, and more."
      />

      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="Integrations" />

      <PageContent description="Connect your Growthub agents with third-party tools and services. Export leads to your CRM, publish content to your website, and automate workflows across platforms.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Available Integrations</h2>
          <div className="space-y-3">
            {integrations.map((integration) => (
              <Link
                key={integration.title}
                href={integration.href}
                className="block p-4 bg-white border border-gray-200 rounded-[5px] shadow-sm hover:border-[#39D9FD] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-black">{integration.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{integration.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {integration.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 border border-gray-200 rounded-[5px] text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations" />
    </main>
  )
}
