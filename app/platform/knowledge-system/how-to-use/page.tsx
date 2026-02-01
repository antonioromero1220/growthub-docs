import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "How to Use Knowledge Bases | Growthub Documentation",
  description: "Get started with the Knowledge System",
}

export default function HowToUseKnowledgeBases() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System", url: "/platform/knowledge-system" },
            { label: "How to Use" },
          ]}
          title="How to Use Knowledge Bases"
          showCopy={true}
        />

        <PageContent description="Step-by-step guide to using the Knowledge System in your workflows.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Navigate to the Knowledge System from your dashboard</li>
              <li>Create a new knowledge base or select an existing one</li>
              <li>Add knowledge items through the interface or API</li>
              <li>Reference knowledge items in your agent workflows</li>
              <li>Monitor usage and performance</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Creating Knowledge Items</h2>
            <p className="text-gray-700 mb-3">Knowledge items can be created in multiple ways:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Manual creation through the UI</li>
              <li>Bulk import from files or APIs</li>
              <li>Automatic generation from agent interactions</li>
              <li>Conversion from summaries or reports</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Best Practices</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Keep knowledge items focused and atomic</li>
              <li>Use clear, descriptive titles and metadata</li>
              <li>Update knowledge regularly</li>
              <li>Archive outdated information</li>
              <li>Link related knowledge items</li>
            </ul>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Overview", url: "/platform/knowledge-system/overview" }}
          nextPage={{ label: "Knowledge Base Nodes", url: "/platform/knowledge-system/kb-nodes" }}
        />
      </div>
    </main>
  )
}
