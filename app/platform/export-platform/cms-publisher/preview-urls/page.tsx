import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Preview URLs | CMS Publisher | Growthub Documentation",
  description: "Generate temporary preview URLs for AI-generated content review and collaboration",
}

export default function PreviewURLs() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "CMS Publisher", url: "/platform/export-platform/cms-publisher" },
            { label: "Preview URLs" },
          ]}
          title="Preview URLs"
          showCopy={true}
        />

        <PageContent description="Review AI-generated content in a live environment before publishing to production with temporary, shareable preview URLs.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What are Preview URLs?</h2>
            <p className="text-gray-700 leading-relaxed">
              Preview URLs are temporary, shareable links that display your AI-generated content in a live environment
              before it goes to production. Perfect for team reviews, client approvals, and quality assurance workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Temporary Links</strong> - Active for 7 days or until published
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Shareable Access</strong> - Send preview links to team members and
                  clients
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Password Protection</strong> - Optional password gates for sensitive
                  content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Real-time Updates</strong> - Edit content and see changes reflected
                  instantly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Feedback Collection</strong> - Gather comments before final publish
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Workflow</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">1.</span>
                <span>Agent generates content based on your specifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">2.</span>
                <span>System creates a temporary preview URL automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">3.</span>
                <span>Share the link with stakeholders for review</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">4.</span>
                <span>Make edits based on feedback (updates appear in real-time)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">5.</span>
                <span>Publish to production when approved</span>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Access Control</h2>
            <p className="text-gray-700 leading-relaxed">
              Control who can view preview content with password protection, email allowlists, or public access. Set
              expiration dates manually or let previews auto-delete after publishing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Use Cases</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Client approvals for agency work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Internal team reviews before launch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>A/B testing content variations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Stakeholder feedback collection</span>
              </li>
            </ul>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="cms-publisher-preview-urls" />

        <PageFooter
          previousPage={{
            label: "Shopify Integration",
            url: "/platform/export-platform/cms-publisher/shopify-integration",
          }}
          nextPage={{ label: "Custom Domains", url: "/platform/export-platform/cms-publisher/custom-domains" }}
        />
      </div>
    </main>
  )
}
