import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "L1: Input & Validation | Agent Orchestration | Growthub",
  description: "Entry point for agent workflows with automatic validation, type checking, and data integrity verification",
}

export default function Layer1InputPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "AGENT ORCHESTRATION", url: "/platform/agent-orchestration" },
            { label: "L1: Input & Validation" },
          ]}
          title="L1: Input & Validation"
          showCopy={true}
        />

        <PageContent description="The foundational layer that validates all data entering your agent workflows, ensuring clean inputs for reliable processing.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Layer 1?</h2>
            <p className="text-gray-700 leading-relaxed">
              Layer 1 (L1) serves as the entry point for all agent workflows. Before any data reaches your agents, it passes through validation gates that check data types, required fields, format compliance, and business rules. This ensures only clean, verified data enters the processing pipeline.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported Input Types</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Text & JSON</strong> - Structured data with schema validation</li>
              <li><strong>Files & Documents</strong> - PDFs, spreadsheets, and text files</li>
              <li><strong>Images & Audio</strong> - Multi-modal inputs for vision and speech agents</li>
              <li><strong>URLs & Web Content</strong> - Automatic content extraction and parsing</li>
              <li><strong>API Payloads</strong> - REST and webhook data with authentication</li>
              <li><strong>Form Submissions</strong> - User inputs from custom forms and interfaces</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Validation Features</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Schema Validation</h3>
                <p className="text-sm text-gray-600">
                  Define custom schemas with required fields, data types, and format patterns. Invalid inputs are rejected with detailed error messages.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Integrity Checking</h3>
                <p className="text-sm text-gray-600">
                  Automatic checksums and deduplication ensure data hasn't been corrupted or duplicated during transmission.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Business Rules</h3>
                <p className="text-sm text-gray-600">
                  Apply custom business logic constraints—value ranges, conditional requirements, and cross-field validations.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Error Handling</h2>
            <p className="text-gray-700 leading-relaxed">
              When validation fails, L1 provides detailed error responses with field-level feedback. Configure error handling strategies: reject invalid data, apply defaults, or route to manual review queues.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="layer-1-input" />

        <PageFooter />
      </div>
    </main>
  )
}
