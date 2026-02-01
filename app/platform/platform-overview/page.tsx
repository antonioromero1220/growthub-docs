import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Platform Overview | Growthub Documentation",
  description: "Understand the Growthub Agent OS platform architecture",
}

export default function PlatformOverview() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[{ label: "AGENT OS PLATFORM", url: "/platform/platform-overview" }, { label: "Overview" }]}
          title="Platform Overview"
          showCopy={true}
        />

        <PageContent description="Growthub Agent OS is a unified orchestration layer combining five distinct product categories into one cohesive growth engine.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Five Core Products</h2>
            <p className="text-muted-foreground mb-6">
              Each product solves a specific part of the growth problem, but their true power emerges when combined
              through a shared layer of Brand Kits, Knowledge Items, and Agent Skills.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Agent Builder</h3>
                <p className="text-muted-foreground">
                  Create custom marketing and operational agents with a no-code visual builder. Access 40+ LLM models
                  and pre-built CMS templates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Content Studio</h3>
                <p className="text-muted-foreground">
                  Generate multi-modal content (images, videos, text) directly from agents with automatic brand
                  alignment and RLHF training.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Export Platform</h3>
                <p className="text-muted-foreground">
                  Deploy agents via form interfaces or chat assistants with shareable public URLs and customizable
                  branding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4. Knowledge System</h3>
                <p className="text-muted-foreground">
                  Share collective intelligence across teams with thread summaries, audio generation, and multi-tenant
                  knowledge bases.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5. Workflow Orchestration</h3>
                <p className="text-muted-foreground">
                  Coordinate multi-agent loops with L1-L5 modular architecture, event-driven triggers, and reactive
                  intelligence.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Integration Layer</h2>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <strong className="text-foreground">Brand Kits</strong> - Unlimited brand profiles with voice guidelines
                and visual assets that flow globally
              </div>
              <div>
                <strong className="text-foreground">Knowledge Items</strong> - Shared context and collective
                intelligence accessible to all agents
              </div>
              <div>
                <strong className="text-foreground">Agent Skills</strong> - Reusable tools and functions that extend
                agent capabilities
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Flywheel Effect</h2>
            <p className="text-muted-foreground mb-4">
              As you build agents with the Agent Builder, they can access Knowledge Items for context and inherit Brand
              Kit guidelines. When they generate content via Content Studio, that content is on-brand by default. When
              you export them, the interfaces maintain your branding. And as workflows run via Workflow Orchestration,
              they feed learnings back into the Knowledge System.
            </p>
            <p className="text-muted-foreground">
              This creates a natural compounding effect where each product makes every other product more powerful.
            </p>
          </section>
        </PageContent>

        <PageFooter
          previousPage={{ label: "Quick Start", url: "/getting-started" }}
          nextPage={{ label: "Agent Builder", url: "/platform/agent-builder" }}
        />
      </div>
    </main>
  )
}
