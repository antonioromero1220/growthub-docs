import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "L3: Orchestration & Heuristics | Agent Orchestration | Growthub",
  description: "Intelligent decision engine for multi-agent routing, coordination, and conditional logic based on heuristics",
}

export default function Layer3OrchestrationPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "AGENT ORCHESTRATION", url: "/platform/agent-orchestration" },
            { label: "L3: Orchestration & Heuristics" },
          ]}
          title="L3: Orchestration & Heuristics"
          showCopy={true}
        />

        <PageContent description="The intelligent decision layer that routes data to appropriate agents and manages multi-agent coordination with adaptive logic.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Layer 3?</h2>
            <p className="text-gray-700 leading-relaxed">
              Layer 3 (L3) acts as the intelligent brain of your agent workflows. It decides which agents to activate, how to route data between them, and applies conditional logic based on real-time signals and learned heuristics. This layer enables adaptive, context-aware automation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Intelligent Routing</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Conditional Branching</h3>
                <p className="text-sm text-gray-600">
                  Route data to different agents based on content type, sentiment, urgency, or custom business rules. Create if/then/else logic without code.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Dynamic Agent Selection</h3>
                <p className="text-sm text-gray-600">
                  Automatically select the best agent for each task based on capabilities, past performance, and current load balancing.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Heuristic Rules</h3>
                <p className="text-sm text-gray-600">
                  Apply learned patterns and optimization rules that improve routing decisions based on historical success rates.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Multi-Agent Coordination</h2>
            <p className="text-gray-700 mb-3">
              Manage complex workflows involving multiple agents:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Sequential Chains</strong> - Pass outputs from one agent to the next in order</li>
              <li><strong>Parallel Execution</strong> - Run multiple agents simultaneously for faster processing</li>
              <li><strong>Fan-out/Fan-in</strong> - Distribute work across agents and merge results</li>
              <li><strong>Dependency Management</strong> - Ensure agents run in correct order based on data dependencies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Adaptive Learning</h2>
            <p className="text-gray-700 leading-relaxed">
              L3 continuously learns from workflow outcomes to improve routing decisions. Successful patterns are reinforced while suboptimal routes are deprioritized, creating an ever-improving orchestration layer that adapts to your specific use cases.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="layer-3-orchestration" />

        <PageFooter />
      </div>
    </main>
  )
}
