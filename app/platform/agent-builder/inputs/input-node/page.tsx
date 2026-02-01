import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Input Node - Agent Builder | Growthub Agent OS",
  description: "Configure standard text and data inputs for your Growthub agents.",
}

export default function InputNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Input Node"
      />

      <PageContent description="The Input Node is the primary entry point for text and structured data in your agent workflows. It accepts user input and passes it to downstream nodes for processing.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Configuration Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Input Type:</strong> Text, Number, Boolean, JSON, or Custom Schema
            </li>
            <li>
              <strong>Validation:</strong> Required fields, format validation, length limits
            </li>
            <li>
              <strong>Default Values:</strong> Pre-populate inputs with default data
            </li>
            <li>
              <strong>Variable Mapping:</strong> Map inputs to workflow variables
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            Drag the Input Node onto your canvas and connect it to the next node in your workflow. Configure the input
            schema to define what data your agent expects to receive.
          </p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/input-node" />
    </main>
  )
}
