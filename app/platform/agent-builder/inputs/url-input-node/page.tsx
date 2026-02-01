import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "URL Input Node - Agent Builder | Growthub Agent OS",
  description: "Fetch and process web content from URLs in your agent workflows.",
}

export default function URLInputNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="URL Input Node"
      />

      <PageContent description="The URL Input Node fetches and processes web content, allowing your agents to scrape pages, extract data, and analyze online resources.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Web Scraping:</strong> Extract text, images, and structured data
            </li>
            <li>
              <strong>API Fetching:</strong> Make GET/POST requests to APIs
            </li>
            <li>
              <strong>Content Parsing:</strong> Automatic HTML to text conversion
            </li>
            <li>
              <strong>Screenshot Capture:</strong> Visual snapshots of web pages
            </li>
          </ul>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/url-input-node" />
    </main>
  )
}
