import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Workflow Orchestration | Growthub Documentation",
  description: "Advanced automation with event-driven triggers and multi-agent coordination",
}

export default function WorkflowOrchestration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Workflow Orchestration" },
          ]}
          title="Workflow Orchestration"
          showCopy={true}
        />

        <PageContent description="Coordinate multi-agent loops with event-driven triggers, API integrations, and reactive intelligence.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">L1-L5 Modular Architecture</h2>
            <p className="text-muted-foreground mb-4">
              The underlying execution pipeline coordinates multi-agent loops with clear separation of concerns:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong className="text-foreground">L1 (Primitives)</strong> - Basic agent operations and tasks
              </li>
              <li>
                <strong className="text-foreground">L2 (Composition)</strong> - Agent combinations and sequences
              </li>
              <li>
                <strong className="text-foreground">L3 (Orchestration & Heuristics)</strong> - Multi-agent coordination with intelligent decision-making
              </li>
              <li>
                <strong className="text-foreground">L4 (Execution & Workflows)</strong> - Complex workflow execution and automation pipelines
              </li>
              <li>
                <strong className="text-foreground">L5 (Presentation Outputs & Custom UI)</strong> - User-facing interfaces, export formats, and custom brand experiences
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">sk1 Freeze: Infinite RLHF</h2>
            <p className="text-muted-foreground">
              Every agent execution creates a frozen snapshot (sk1 freeze) that captures the complete state, context, and decision tree. This enables +1 infinite RLHF (Reinforcement Learning from Human Feedback) built into every turn, allowing continuous improvement and learning from each interaction without losing historical context.
            </p>
            <p className="text-muted-foreground">
              The sk1 freeze acts as an immutable checkpoint that can be replayed, analyzed, and optimized, creating a continuous feedback loop that enhances agent performance over time while maintaining auditability and reproducibility.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Event-Driven Triggers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Cron Jobs</h3>
                <p className="text-muted-foreground">
                  Schedule workflows for specific times and intervals. Perfect for regular content generation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">API Triggers</h3>
                <p className="text-muted-foreground">
                  Trigger workflows from external systems via REST APIs. Build real-time integrations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Webhook Listeners</h3>
                <p className="text-muted-foreground">
                  Reactive intelligence that responds to events and triggers campaigns automatically.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Example Workflow</h2>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>Cron job triggers daily content generation</li>
              <li>Agent creates multi-modal content using Content Studio</li>
              <li>Content is tagged with Brand Kit and Knowledge Items</li>
              <li>Export Platform generates shareable links</li>
              <li>Webhook notifies external CMS when content is ready</li>
              <li>Analytics feed back into Knowledge System for optimization</li>
            </ol>
          </section>
        </PageContent>

        <PageFooter
          previousPage={{ label: "Brand Kit System", url: "/platform/brand-kit-system" }}
          nextPage={{ label: "API Reference", url: "/api-reference" }}
        />
      </div>
    </main>
  )
}
