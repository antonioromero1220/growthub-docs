import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Form Interfaces | Growthub Documentation",
  description: "Lead capture forms with CRM integrations and Brand Kit customization",
}

export default function FormInterfaces() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "Form Interfaces" },
          ]}
          title="Form Interfaces"
          showCopy={true}
        />

        <PageContent description="Structured data collection interfaces with gated lead captures, CRM integrations, and full Brand Kit customization.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Gated Lead Captures</h2>
            <p className="text-gray-700">
              Control access to your forms through gating rules. Capture qualified leads and control export destinations
              directly to your CRM systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">CRM Integrations</h2>
            <p className="text-gray-700 mb-3">Built-in integrations with leading CRM platforms:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>HubSpot - Direct lead sync and workflow automation</li>
              <li>GoHighLevel - Complete CRM and pipeline management</li>
              <li>Custom webhooks for additional integrations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Form Customization</h2>
            <p className="text-gray-700 mb-3">Build fully customizable forms with:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>No-code form builder with drag-and-drop interface</li>
              <li>Brand Kit integration for consistent styling</li>
              <li>Custom form fields and conditional logic</li>
              <li>Shareable form links for distribution</li>
              <li>Analytics and submission tracking</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Sharing & Distribution</h2>
            <p className="text-gray-700">
              Generate unique form links that can be shared across channels, embedded on websites, or distributed
              directly to prospects.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Export Platform", url: "/platform/export-platform" }}
          nextPage={{ label: "Chat Assistant", url: "/platform/export-platform/chat-assistant" }}
        />
      </div>
    </main>
  )
}
