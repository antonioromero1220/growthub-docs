import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "L2: Data Processing | Agent Orchestration | Growthub",
  description: "Transform and enrich validated inputs with data parsing, formatting, aggregation, and context injection",
}

export default function Layer2ProcessingPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "AGENT ORCHESTRATION", url: "/platform/agent-orchestration" },
            { label: "L2: Data Processing" },
          ]}
          title="L2: Data Processing"
          showCopy={true}
        />

        <PageContent description="Transform raw validated inputs into structured, enriched data optimized for agent consumption.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Layer 2?</h2>
            <p className="text-gray-700 leading-relaxed">
              Layer 2 (L2) transforms raw validated inputs into structured data that agents can efficiently process. This includes parsing complex formats, normalizing data structures, enriching with contextual information, and aggregating related inputs for batch processing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Processing Capabilities</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Data Parsing</h3>
                <p className="text-sm text-gray-600">
                  Extract structured data from PDFs, HTML, spreadsheets, and unstructured text. Automatic format detection and conversion.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Normalization</h3>
                <p className="text-sm text-gray-600">
                  Standardize data formats, clean whitespace, normalize encodings, and apply consistent formatting rules across all inputs.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Aggregation</h3>
                <p className="text-sm text-gray-600">
                  Group related inputs for batch processing. Combine data from multiple sources into unified payloads for efficient agent execution.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Context Enrichment</h2>
            <p className="text-gray-700 mb-3">
              Automatically inject relevant context to enhance agent understanding:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Knowledge Items</strong> - Retrieve relevant documents from your Knowledge Base</li>
              <li><strong>Brand Kit Guidelines</strong> - Inject voice, tone, and style preferences</li>
              <li><strong>Historical Context</strong> - Include past interactions and decisions for continuity</li>
              <li><strong>Variable Substitution</strong> - Replace placeholders with dynamic values</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Batch Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              Process multiple inputs in parallel with configurable batch sizes. L2 optimizes payload sizes, manages memory efficiently, and prepares data for downstream layers to maximize throughput without sacrificing quality.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="layer-2-processing" />

        <PageFooter />
      </div>
    </main>
  )
}
