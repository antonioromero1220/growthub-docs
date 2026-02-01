import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Creating a Knowledge Base | Growthub Documentation",
  description: "Step-by-step guide to creating knowledge bases",
}

export default function CreatingKnowledgeBase() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System", url: "/platform/knowledge-system" },
            { label: "Creating KB" },
          ]}
          title="Creating a Knowledge Base"
          showCopy={true}
        />

        <PageContent description="Create and configure a new knowledge base for your team and agents.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Create a New Knowledge Base</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Navigate to Knowledge System</li>
              <li>Click "Create Knowledge Base"</li>
              <li>Name your knowledge base</li>
              <li>Set access permissions</li>
              <li>Configure indexing settings</li>
              <li>Save and start adding items</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Configuration Options</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Visibility</strong> - Private, team, or organization-wide
              </li>
              <li>
                <strong>Indexing</strong> - Enable semantic search and metadata indexing
              </li>
              <li>
                <strong>Retention</strong> - Auto-archive old items
              </li>
              <li>
                <strong>Notifications</strong> - Alert on updates
              </li>
              <li>
                <strong>Integrations</strong> - Connect external data sources
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Adding Content</h2>
            <p className="text-gray-700 mb-3">Populate your knowledge base through:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Manual item creation</li>
              <li>Document uploads (PDF, Word, Markdown)</li>
              <li>Web scraping and URL imports</li>
              <li>API integration</li>
              <li>Automatic generation from agents</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Organization</h2>
            <p className="text-gray-700">
              Organize knowledge items with tags, categories, and custom metadata to enable efficient search and
              retrieval.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "KB Nodes", url: "/platform/knowledge-system/kb-nodes" }}
          nextPage={{ label: "Specific KB Features", url: "/platform/knowledge-system/specific-features" }}
        />
      </div>
    </main>
  )
}
