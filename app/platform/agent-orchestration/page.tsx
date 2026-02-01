import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Agent Orchestration | Growthub Documentation",
  description: "L1-L5 modular architecture for coordinating multi-agent workflows with event-driven triggers and intelligent automation",
}

export default function AgentOrchestration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Agent Orchestration" },
          ]}
          title="Agent Orchestration"
          showCopy={true}
        />

        <PageContent description="Coordinate multi-agent workflows with L1-L5 modular architecture, event-driven triggers, and continuous learning through sk1 snapshots.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Agent Orchestration?</h2>
            <p className="text-gray-700 leading-relaxed">
              Agent Orchestration is the intelligent coordination system that manages multi-agent workflows through a 5-layer modular architecture. Each layer handles a specific responsibility—from input validation to final presentation—ensuring clean separation of concerns and optimal performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">L1-L5 Modular Architecture</h2>
            <p className="text-gray-700 mb-4">
              The orchestration pipeline uses a 5-layer stack that processes workflows from raw input to polished output:
            </p>
            
            <div className="space-y-3">
              <a
                href="/platform/agent-orchestration/layer-1-input"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-cyan-600">L1</span>
                  <h3 className="font-semibold text-black">Input & Validation</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Entry point with automatic validation, type checking, and integrity verification
                </p>
              </a>

              <a
                href="/platform/agent-orchestration/layer-2-processing"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-cyan-600">L2</span>
                  <h3 className="font-semibold text-black">Data Processing</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Transform and enrich data with parsing, formatting, and context injection
                </p>
              </a>

              <a
                href="/platform/agent-orchestration/layer-3-orchestration"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-cyan-600">L3</span>
                  <h3 className="font-semibold text-black">Orchestration & Heuristics</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Intelligent routing and multi-agent coordination with conditional logic
                </p>
              </a>

              <a
                href="/platform/agent-orchestration/layer-4-execution"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-cyan-600">L4</span>
                  <h3 className="font-semibold text-black">Execution & Workflows</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Execute workflows with parallel processing, error handling, and progress tracking
                </p>
              </a>

              <a
                href="/platform/agent-orchestration/layer-5-presentation"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-cyan-600">L5</span>
                  <h3 className="font-semibold text-black">Presentation & UI</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Transform results into user-facing formats with Brand Kit styling
                </p>
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">sk1 Freeze: Continuous Learning</h2>
            <p className="text-gray-700 leading-relaxed">
              Every workflow execution creates an immutable snapshot (sk1 freeze) that captures the complete state, context, and decision tree. This enables continuous improvement through reinforcement learning from human feedback built into every turn.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These frozen snapshots can be replayed, analyzed, and optimized to enhance agent performance over time while maintaining full auditability and reproducibility of past decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Event-Driven Triggers</h2>
            <p className="text-gray-700 mb-3">
              Orchestrate workflows reactively based on external events:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-semibold min-w-32">Cron Jobs</span>
                <span>Schedule workflows for specific times and intervals</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-32">API Triggers</span>
                <span>Launch workflows from external systems via REST APIs</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-32">Webhooks</span>
                <span>Reactive intelligence that responds to real-time events</span>
              </li>
            </ul>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="agent-orchestration" />

        <PageFooter />
      </div>
    </main>
  )
}
