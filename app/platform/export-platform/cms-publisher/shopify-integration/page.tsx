import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Shopify Integration | CMS Publisher | Growthub Documentation",
  description: "Native Shopify integration for automated product descriptions and content publishing",
}

export default function ShopifyIntegration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "CMS Publisher", url: "/platform/export-platform/cms-publisher" },
            { label: "Shopify Integration" },
          ]}
          title="Shopify Integration"
          showCopy={true}
        />

        <PageContent description="Automate Shopify content creation with AI-powered product descriptions, collection pages, and blog posts that maintain your brand voice.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Shopify Integration enables seamless content publishing directly to your Shopify store. Generate
              product descriptions, blog posts, collection pages, and metafields using AI while maintaining complete
              brand consistency.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported Content Types</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Product Descriptions</strong> - AI-generated descriptions with SEO
                  optimization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Collection Pages</strong> - Automated collection descriptions and
                  metadata
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Blog Posts</strong> - Full blog articles with images and formatting
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">SEO Metafields</strong> - Titles, meta descriptions, and alt tags
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Setup Process</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">1.</span>
                <span>Connect your Shopify store via API credentials in the Integrations section</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">2.</span>
                <span>Configure content generation templates with your Brand Kit settings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">3.</span>
                <span>Set up publishing workflows with scheduling and approval rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">4.</span>
                <span>Test with preview mode before publishing to production</span>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Batch Publishing</h2>
            <p className="text-gray-700 leading-relaxed">
              Generate and publish content for multiple products simultaneously using batch generation workflows.
              Perfect for seasonal updates, new product launches, or store-wide content refreshes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">SEO Optimization</h2>
            <p className="text-gray-700 leading-relaxed">
              All generated content includes SEO best practices: keyword optimization, structured data, meta
              descriptions, and alt text for images. Automatically populate Shopify metafields for enhanced search
              visibility.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="cms-publisher-shopify-integration" />

        <PageFooter
          previousPage={{ label: "CMS Publisher", url: "/platform/export-platform/cms-publisher" }}
          nextPage={{ label: "Preview URLs", url: "/platform/export-platform/cms-publisher/preview-urls" }}
        />
      </div>
    </main>
  )
}
