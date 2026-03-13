import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/export-platform/webhook-integrations"])

export default function WebhookIntegrationsPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="Webhook Integrations | Export Platform"
        description="Connect exported agents to external systems via webhooks. Trigger workflows on form submissions, chat completions, or agent events with customizable payloads and retry logic."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "Webhook Integrations" },
          ]}
          title="Webhook Integrations"
          showCopy={true}
        />

        <PageContent description="Connect your exported agents to external systems using webhooks. Trigger real-time notifications, sync data with CRMs, or kick off downstream workflows whenever agents complete tasks.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Webhook Integrations enable real-time communication between your Growthub agents and external systems. 
              When forms are submitted, chats complete, or agents finish tasks, webhooks push event data to your 
              configured endpoints instantly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported Events</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Form Submission</strong> - Fires when a user submits an exported form
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Chat Completion</strong> - Fires when a chat session ends or reaches a goal
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Lead Capture</strong> - Fires when contact information is collected
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Agent Task Complete</strong> - Fires when an agent finishes a workflow
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Configuration</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">1.</span>
                <span>Navigate to Export Settings for your agent or form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">2.</span>
                <span>Add your webhook URL (must be HTTPS in production)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">3.</span>
                <span>Select events to subscribe to and configure authentication headers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">4.</span>
                <span>Use the Test Webhook button to verify your endpoint receives data</span>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Payload Format</h2>
            <p className="text-gray-700 leading-relaxed">
              Webhooks deliver JSON payloads containing the event type, timestamp, agent metadata, and full input/output 
              data. Use payload templates to transform the structure and map fields to your external system&apos;s expected format.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Retry Logic</h2>
            <p className="text-gray-700 leading-relaxed">
              Failed deliveries (non-2xx responses) automatically retry with exponential backoff: 1 second, 5 seconds, 
              30 seconds, then 5 minutes. After 4 failed attempts, the webhook is marked as failed and logged for review 
              in the Export Platform dashboard.
            </p>
          </section>

          <TLDRFAQSection pageKey="webhook-integrations" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Custom Domains", url: "/platform/export-platform/custom-domains" }}
          nextPage={{ label: "Agent Orchestration", url: "/platform/agent-orchestration" }}
        />
      </div>
    </main>
  )
}
