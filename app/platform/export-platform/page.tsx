import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Export Platform | Growthub Documentation",
  description: "Deploy agents and share with public URLs and custom branding",
}

export default function ExportPlatform() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform" },
          ]}
          title="Export Platform"
          showCopy={true}
        />

        <PageContent description="Deploy your agents through multiple export interfaces with advanced customization and deployment options.">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Export Interface Options</h2>
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">📋</span> Form Interfaces
                </h3>
                <p className="text-gray-700">
                  Structured data collection with gated lead captures, CRM integrations (HubSpot, GoHighLevel), and
                  Brand Kit customization. Forms are fully shareable and customizable through the no-code form builder.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">💬</span> Chat Assistant
                </h3>
                <p className="text-gray-700">
                  Conversational interfaces for natural agent interaction. Perfect for support, sales, and advisory use
                  cases with full customization.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🤖</span> Landing Page Chatbot
                </h3>
                <p className="text-gray-700">
                  Deploy chatbots with gated lead captures and export controls. Built-in CRM integrations and
                  HubSpot/GoHighLevel support for seamless lead management.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🌐</span> CMS Publisher Node
                </h3>
                <p className="text-gray-700">
                  Sub-agent that publishes generated content to Shopify, WordPress, or any custom domain. Creates
                  tailored content automatically with full control over placement and formatting.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">⚙️</span> Batch Generation
                </h3>
                <p className="text-gray-700">
                  Loop and sequence content generation on schedule. Generate batches across image, video, and text
                  formats for various content needs across all channels.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <p className="text-gray-700">
              Select one of the export interface options below to get started with deployment:
            </p>
          </section>
        </PageContent>

        <PageFooter
          previousPage={{ label: "Content Studio", url: "/platform/content-studio" }}
          nextPage={{ label: "Form Interfaces", url: "/platform/export-platform/form" }}
        />
      </div>
    </main>
  )
}
