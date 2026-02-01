import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Knowledge Bases Overview | Growthub Documentation",
  description: "Learn about the Knowledge System and knowledge bases",
}

export default function KnowledgeBasesOverview() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System", url: "/platform/knowledge-system" },
            { label: "Overview" },
          ]}
          title="Knowledge Bases Overview"
          showCopy={true}
        />

        <PageContent description="Understand the Knowledge System and how knowledge bases enable collective intelligence across your agent network.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What is the Knowledge System?</h2>
            <p className="text-gray-700">
              The Knowledge System is Growthub's unified repository for shared intelligence. It enables teams and agents
              to build collective knowledge that improves decision-making and agent performance over time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Core Benefits</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Multi-tenant knowledge sharing across agents</li>
              <li>Unified context that improves agent accuracy</li>
              <li>Collective learning over time</li>
              <li>Reduced redundancy in knowledge management</li>
              <li>Better decision-making through shared insights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Knowledge Items</h2>
            <p className="text-gray-700">
              Knowledge Items are discrete units of information that can be created, shared, and referenced across your
              agent network. Each item can contain text, summaries, audio transcripts, and metadata.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Knowledge System", url: "/platform/knowledge-system" }}
          nextPage={{ label: "How to Use Knowledge Bases", url: "/platform/knowledge-system/how-to-use" }}
        />
      </div>
    </main>
  )
}
