import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Knowledge Base Nodes | Growthub Documentation",
  description: "Understanding KB nodes in workflow orchestration",
}

export default function KnowledgeBaseNodes() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System", url: "/platform/knowledge-system" },
            { label: "KB Nodes" },
          ]}
          title="Knowledge Base Nodes"
          showCopy={true}
        />

        <PageContent description="Learn how to use KB nodes in your workflow orchestration for intelligent agent routing and decision-making.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What are KB Nodes?</h2>
            <p className="text-gray-700">
              KB Nodes are workflow components that enable agents to query and reference knowledge bases during
              execution. They allow agents to access shared intelligence to make better decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Node Types</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Query Node</strong> - Search and retrieve knowledge items
              </li>
              <li>
                <strong>Reference Node</strong> - Inline knowledge references in responses
              </li>
              <li>
                <strong>Decision Node</strong> - Route based on knowledge conditions
              </li>
              <li>
                <strong>Append Node</strong> - Add new knowledge from workflow results
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Usage Patterns</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Add a KB node to your workflow</li>
              <li>Configure the knowledge base to reference</li>
              <li>Set query parameters or decision logic</li>
              <li>Connect input data</li>
              <li>Route outputs to next workflow steps</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Advanced Features</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Semantic search across knowledge</li>
              <li>Filtered queries with metadata</li>
              <li>Context-aware result ranking</li>
              <li>Fallback behaviors</li>
            </ul>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "How to Use", url: "/platform/knowledge-system/how-to-use" }}
          nextPage={{ label: "Creating a Knowledge Base", url: "/platform/knowledge-system/creating-kb" }}
        />
      </div>
    </main>
  )
}
