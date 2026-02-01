import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "WordPress Integration - Growthub Agent OS",
  description: "Publish content directly to WordPress sites using the CMS Publisher Node.",
}

export default function WordPressIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="WordPress" />

      <PageContent description="CMS content publishing integration. The CMS Publisher Node can automatically publish blog posts, pages, and custom content types to your WordPress site.">
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            REST API
          </span>
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            XML-RPC
          </span>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              wp_posts
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              wp_pages
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              wp_media
            </span>
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations/wordpress" />
    </main>
  )
}
