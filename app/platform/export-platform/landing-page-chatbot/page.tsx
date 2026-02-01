import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Landing Page Chatbot | Growthub Documentation",
  description: "Gated lead captures with CRM export controls",
}

export default function LandingPageChatbot() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "Landing Page Chatbot" },
          ]}
          title="Landing Page Chatbot"
          showCopy={true}
        />

        <PageContent description="Deploy chatbots with advanced lead capture, gating controls, and direct CRM export capabilities.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Growthub Differentiators</h2>
            <p className="text-gray-700 mb-3">Our landing page chatbots include unique features not found elsewhere:</p>

            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Gated Lead Capture</h3>
                <p className="text-gray-700">
                  Set conditional gating rules to qualify leads before they enter your sales pipeline. Capture intent
                  signals and qualification data automatically.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">CRM Export Controls</h3>
                <p className="text-gray-700">
                  Control exactly where captured leads are exported. Route to HubSpot, GoHighLevel, or multiple CRM
                  destinations with custom field mapping.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">HubSpot & GoHighLevel Integration</h3>
                <p className="text-gray-700">
                  Built-in integrations with leading CRM platforms. Leads sync in real-time with all captured data and
                  custom properties.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Hotspot Integration</h3>
                <p className="text-gray-700">
                  Track user interactions and create engagement hotspots. Understand exactly where visitors are engaging
                  with your chatbot.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Setup & Configuration</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Create a landing page chatbot agent</li>
              <li>Configure gating rules and qualification criteria</li>
              <li>Connect to your CRM (HubSpot or GoHighLevel)</li>
              <li>Set up lead export fields and mapping</li>
              <li>Enable Hotspot tracking</li>
              <li>Deploy to your landing page</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Performance Tracking</h2>
            <p className="text-gray-700">
              Monitor chatbot performance with built-in analytics. Track engagement rates, lead qualification, and
              export success metrics.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Chat Assistant", url: "/platform/export-platform/chat-assistant" }}
          nextPage={{ label: "CMS Publisher Node", url: "/platform/export-platform/cms-publisher" }}
        />
      </div>
    </main>
  )
}
