import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { VideoPlayer } from "@/components/video-player"

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

        <PageContent description="Growthub Agent OS is one product — a unified AI workspace where agents plan, produce, and deliver real growth work autonomously. Over 1,000 production pipelines run on this platform every day.">
          <VideoPlayer 
            url="https://youtu.be/DArAgdkpZSc?si=JQ7T0RYgFGIKuTIP" 
            title="Growthub Platform Overview"
            caption="A deep dive into the foundational architecture of the Growthub Agent OS."
          />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">GH Max Mode</h2>
            <p className="text-muted-foreground leading-relaxed">
              GH Max Mode is Growthub's fully autonomous production engine — powering 1,000+ real pipelines across video, ads, and research. Activate a GH Max agent, give it a goal, and it handles planning, brief synthesis, execution, and delivery end-to-end. No manual steps, no prompt engineering, no managing individual outputs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Available GH Max agents: <strong className="text-foreground">Video Generation Agent</strong> (multi-scene campaign videos in under 10 minutes), <strong className="text-foreground">Meta Ads Agent</strong> (complete ad packages with copy and creative direction), <strong className="text-foreground">Browser Research Agent</strong> (autonomous competitive intelligence from any URL), and <strong className="text-foreground">AI Actor Studio</strong> (consistent AI human identity across all video scenes).
            </p>
            <a href="/platform/gh-max-mode" className="inline-block text-sm font-medium underline underline-offset-4">
              Explore GH Max Mode
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Platform</h2>
            <p className="text-muted-foreground mb-4">
              Growthub is built around one core architecture: a persistent session workspace where AI agents run, artifacts accumulate, and every tool stays connected to the same context. Each feature solves a specific part of the growth problem — their true power emerges when combined through a shared layer of Brand Kits, Knowledge Items, and Agent Skills.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Agent Builder</h3>
                <p className="text-muted-foreground">
                  Create custom marketing and operational agents with a no-code visual builder. Access 40+ LLM models and pre-built templates. Every agent you build can use Brand Kits, Knowledge Items, and Agent Skills automatically.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Content Studio</h3>
                <p className="text-muted-foreground">
                  Generate multi-modal content — images, videos, text — directly from agents with automatic brand alignment. Includes the full GH Max video pipeline with AI Actor Studio and multi-scene generation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Export Platform</h3>
                <p className="text-muted-foreground">
                  Deploy agents as form interfaces, chat assistants, or landing page chatbots with shareable public URLs. Publish directly to CMS platforms including Shopify and WordPress with native integrations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Knowledge System</h3>
                <p className="text-muted-foreground">
                  Store and share collective intelligence across teams with structured knowledge bases, thread summaries, audio generation, and multi-tenant access controls.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Workflow Orchestration</h3>
                <p className="text-muted-foreground">
                  Coordinate multi-agent loops with visual workflow graphs, event-driven triggers, and the L1-L5 modular architecture that makes complex automation manageable at scale.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Integration Layer</h2>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <strong className="text-foreground">Brand Kits</strong> — Unlimited brand profiles with ICP, voice guidelines, and visual assets that flow globally across every agent and workflow automatically.
              </div>
              <div>
                <strong className="text-foreground">Knowledge Items</strong> — Shared context and collective intelligence accessible to all agents. Research outputs, session summaries, and documents become reusable context for any future agent run.
              </div>
              <div>
                <strong className="text-foreground">Agent Skills</strong> — Reusable tools and functions that extend agent capabilities across your entire account.
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Flywheel Effect</h2>
            <p className="text-muted-foreground mb-3">
              As you build agents with the Agent Builder, they inherit Brand Kit guidelines and Knowledge Item context automatically. When they generate content via Content Studio, it is on-brand by default. When you export them, the interfaces maintain your branding. As workflows run, they feed outputs back into the Knowledge System — making every future agent run smarter.
            </p>
            <p className="text-muted-foreground">
              GH Max Mode sits at the top of this flywheel. It is the high-throughput production layer that converts all of this infrastructure into real deliverables — 1,000+ pipelines worth of video, ads, and research — running autonomously inside the same platform.
            </p>
          </section>
        </PageContent>

        <PageFooter
          previousPage={{ label: "Quick Start", url: "/getting-started" }}
          nextPage={{ label: "GH Max Mode", url: "/platform/gh-max-mode" }}
        />
      </div>
    </main>
  )
}
