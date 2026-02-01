import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "L5: Presentation & UI | Agent Orchestration | Growthub",
  description: "Transform workflow outputs into user-facing formats with custom UI rendering, multi-channel export, and Brand Kit styling",
}

export default function Layer5PresentationPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "AGENT ORCHESTRATION", url: "/platform/agent-orchestration" },
            { label: "L5: Presentation & UI" },
          ]}
          title="L5: Presentation & UI"
          showCopy={true}
        />

        <PageContent description="Transform raw workflow outputs into polished, user-facing experiences with Brand Kit styling and multi-channel delivery.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Layer 5?</h2>
            <p className="text-gray-700 leading-relaxed">
              Layer 5 (L5) transforms raw workflow outputs into polished, user-facing content and interfaces. It applies Brand Kit styling, formats data for different channels, and generates custom UI components—ensuring every output is presentation-ready.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Output Formats</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Structured Data</h3>
                <p className="text-sm text-gray-600">
                  Export as JSON, CSV, XML, or custom formats for integration with downstream systems and APIs.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Document Formats</h3>
                <p className="text-sm text-gray-600">
                  Generate HTML, Markdown, PDF, or Word documents with proper formatting, tables, and styling.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Web Content</h3>
                <p className="text-sm text-gray-600">
                  Deploy as web pages, email templates, or embed in existing sites. SEO-optimized and responsive by default.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Brand Kit Integration</h2>
            <p className="text-gray-700 mb-3">
              All outputs automatically inherit your Brand Kit settings:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Visual Styling</strong> - Colors, fonts, logos applied consistently</li>
              <li><strong>Voice & Tone</strong> - Content reflects your brand personality</li>
              <li><strong>Templates</strong> - Reusable layouts for common output types</li>
              <li><strong>Custom Components</strong> - Build your own branded UI elements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Custom UI Builder</h2>
            <p className="text-gray-700 leading-relaxed">
              Create custom interfaces that render workflow data dynamically. Build dashboards, reports, client portals, and interactive experiences—all powered by your agent outputs and styled with your brand. Deploy as standalone pages or embed in existing applications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Snapshot Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              Each L5 output creates an immutable snapshot that captures the final state. These snapshots enable version comparison, rollback capabilities, and provide a complete audit trail of all published content.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="layer-5-presentation" />

        <PageFooter />
      </div>
    </main>
  )
}
