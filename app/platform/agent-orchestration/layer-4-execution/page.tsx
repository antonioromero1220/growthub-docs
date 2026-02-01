import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "L4: Execution & Workflows | Agent Orchestration | Growthub",
  description: "Execute orchestrated workflows with automated task management, parallel processing, and real-time monitoring",
}

export default function Layer4ExecutionPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "AGENT ORCHESTRATION", url: "/platform/agent-orchestration" },
            { label: "L4: Execution & Workflows" },
          ]}
          title="L4: Execution & Workflows"
          showCopy={true}
        />

        <PageContent description="The runtime layer that executes agent workflows with parallel processing, error recovery, and real-time progress tracking.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Layer 4?</h2>
            <p className="text-gray-700 leading-relaxed">
              Layer 4 (L4) is the execution engine that runs your orchestrated workflows. It manages agent tasks, handles parallel processing, monitors progress in real-time, and implements sophisticated error recovery strategies to ensure reliable completion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Execution Features</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Parallel Processing</h3>
                <p className="text-sm text-gray-600">
                  Execute multiple workflow branches simultaneously. Automatic resource allocation and load balancing ensure optimal performance.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Task Management</h3>
                <p className="text-sm text-gray-600">
                  Queue management, priority scheduling, and task distribution across available agents. Handle thousands of concurrent executions.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Progress Tracking</h3>
                <p className="text-sm text-gray-600">
                  Real-time visibility into workflow status—see each step, execution time, success rates, and detailed logs for debugging.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Error Recovery</h2>
            <p className="text-gray-700 mb-3">
              Built-in resilience ensures workflows complete even when issues occur:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Automatic Retries</strong> - Failed steps retry with exponential backoff</li>
              <li><strong>Fallback Agents</strong> - Route to alternative agents when primary fails</li>
              <li><strong>Graceful Degradation</strong> - Continue with partial results when possible</li>
              <li><strong>Checkpoint Recovery</strong> - Resume from last successful step after failures</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Monitoring & Observability</h2>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive execution logs capture every decision and action. View execution timelines, identify bottlenecks, and optimize workflow performance with built-in analytics. Export logs for compliance and auditing requirements.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="layer-4-execution" />

        <PageFooter />
      </div>
    </main>
  )
}
