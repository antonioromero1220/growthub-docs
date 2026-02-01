import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "CMS Publisher Node | Growthub Documentation",
  description: "Publish generated content to Shopify, WordPress, and custom domains",
}

export default function CMSPublisher() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "CMS Publisher Node" },
          ]}
          title="CMS Publisher Node"
          showCopy={true}
        />

        <PageContent description="Automated content publishing to CMS platforms with Shopify integration, preview URLs, and enterprise custom domain support.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is the CMS Publisher?</h2>
            <p className="text-gray-700 leading-relaxed">
              The CMS Publisher is a specialized node that automatically generates and publishes AI-created content to
              your web properties. It creates tailored content based on your specifications and distributes it across
              multiple channels with full Brand Kit consistency.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key Features</h2>
            <div className="grid gap-4">
              <a
                href="/platform/export-platform/cms-publisher/shopify-integration"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Shopify Integration</h3>
                <p className="text-sm text-gray-600">
                  Native integration for product descriptions, blog posts, and collection pages with real-time
                  synchronization
                </p>
              </a>

              <a
                href="/platform/export-platform/cms-publisher/preview-urls"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Preview URLs</h3>
                <p className="text-sm text-gray-600">
                  Generate temporary preview links to review AI-generated content before publishing to production
                </p>
              </a>

              <a
                href="/platform/export-platform/cms-publisher/custom-domains"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Custom Domains</h3>
                <p className="text-sm text-gray-600">
                  Enterprise custom domain support with DNS configuration, SSL certificates, and environment management
                </p>
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Content Types</h2>
            <p className="text-gray-700 mb-3">The CMS Publisher can generate and publish:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Blog posts and articles</li>
              <li>Product descriptions and listings</li>
              <li>Landing pages and promotional content</li>
              <li>SEO-optimized metadata</li>
              <li>Social media summaries</li>
              <li>Email content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Workflow</h2>
            <p className="text-gray-700 mb-3">The CMS Publisher workflow:</p>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Agent generates content based on inputs</li>
              <li>Content is formatted for target platform</li>
              <li>Metadata and SEO fields are populated</li>
              <li>Content is published or scheduled</li>
              <li>Analytics are tracked and reported</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Customization</h2>
            <p className="text-gray-700">
              Customize publishing templates, content formatting, scheduling, and distribution logic to match your
              content strategy perfectly.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Landing Page Chatbot", url: "/platform/export-platform/landing-page-chatbot" }}
          nextPage={{ label: "Batch Generation", url: "/platform/export-platform/batch-generation" }}
        />
      </div>
    </main>
  )
}
