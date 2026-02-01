import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Shopify Integration - Growthub Agent OS",
  description: "Publish products and content to your Shopify store from Growthub agents.",
}

export default function ShopifyIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="Shopify" />

      <PageContent description="E-commerce platform integration. Use the CMS Publisher Node to publish product descriptions, blog posts, and landing pages directly to your Shopify store.">
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            OAuth
          </span>
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            Storefront API
          </span>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              shopify_products
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              shopify_pages
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              shopify_blog
            </span>
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations/shopify" />
    </main>
  )
}
