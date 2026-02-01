import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Specific Knowledge Base Features | Growthub Documentation",
  description: "Advanced Knowledge System capabilities",
}

export default function SpecificKnowledgeBaseFeatures() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System", url: "/platform/knowledge-system" },
            { label: "Specific Features" },
          ]}
          title="Specific Knowledge Base Features"
          showCopy={true}
        />

        <PageContent description="Explore advanced features that make the Knowledge System powerful for collective intelligence.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Thread Summaries</h2>
            <p className="text-gray-700">
              Automatically generate notebook-style summaries of long conversations or complex data threads. Extract key
              insights, action items, and decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Audio Generation</h2>
            <p className="text-gray-700">
              Convert written reports, knowledge items, or conversation summaries into audio using ElevenLabs
              integration. Perfect for audio-first consumers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Semantic Search</h2>
            <p className="text-gray-700">
              Advanced semantic search that understands intent and context, not just keyword matches. Find related
              knowledge across your entire repository.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Multi-Tenant Sharing</h2>
            <p className="text-gray-700">
              Share knowledge across teams and organizations with fine-grained access controls. Support multiple use
              cases from private to fully open.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Continuous Learning</h2>
            <p className="text-gray-700">
              Enable your knowledge base to grow and improve continuously as agents interact with it. Knowledge
              compounds over time, making agents smarter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Export & Backup</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Export knowledge bases to JSON, CSV, or other formats</li>
              <li>Automatic backups and version history</li>
              <li>Disaster recovery options</li>
              <li>Archive management</li>
            </ul>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Creating KB", url: "/platform/knowledge-system/creating-kb" }}
          nextPage={{ label: "Brand Kit System", url: "/platform/brand-kit-system" }}
        />
      </div>
    </main>
  )
}
