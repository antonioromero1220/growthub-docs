import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode/overview"])

export default function GHMaxOverviewPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="What is GH Max Mode | GH Max Overview"
        description="GH Max Mode turns Growthub into a fully autonomous production engine. Learn how custom agents handle planning, brief creation, execution, and delivery end-to-end."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode", url: "/platform/gh-max-mode" },
            { label: "What is GH Max Mode" },
          ]}
          title="What is GH Max Mode"
          showCopy={true}
        />

        <PageContent description="GH Max Mode is Growthub's fully autonomous agent mode. When you activate it, a specialized AI agent takes over the entire workflow — from understanding your goal to delivering a finished production output.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Core Idea</h2>
            <p className="text-base leading-relaxed">
              Most AI tools require you to manage every step manually — write the prompt, review each output, trigger the next task. GH Max Mode is built differently. You give the agent a goal, approve its plan, and it runs the full production workflow autonomously. You get the output without touching the middle.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This is what enables 1,000+ real pipelines to run on Growthub every day — marketers and growth teams producing campaigns, videos, and research at a scale that would be impossible manually.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Session as Your Workspace</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              When you open Growthub, everything lives inside a session. A session holds your intent, the agent's execution history, all generated artifacts, and your workspace surfaces. GH Max Mode runs inside this session — meaning every output, every decision, and every artifact stays in one place. Nothing gets lost between steps.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This is the key difference from standalone AI tools. GH Max agents don't start fresh every time — they work within the context of your session, your brand, your goals.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Happens When You Activate GH Max Mode</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">1. The agent asks clarifying questions</h3>
                <p className="text-muted-foreground">Rather than guessing your intent, the agent asks 2-3 focused questions about your campaign goal, audience, and brand direction. This takes about 30 seconds and dramatically improves output quality.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2. A creative brief is synthesized</h3>
                <p className="text-muted-foreground">Based on your answers and your Brand Kit, the agent generates a structured production plan — a creative brief that outlines exactly what it will produce and how. You review and approve before anything is generated.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3. The agent executes the full workflow</h3>
                <p className="text-muted-foreground">Once approved, the agent runs every production step — generating content, building outputs, applying brand guidelines, and managing the entire production sequence autonomously.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">4. Your deliverable appears in your session</h3>
                <p className="text-muted-foreground">Final outputs land directly in your session workspace — ready to review, download, share, or publish. No exporting between tools, no manual assembly.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Built for Marketers and Growth Teams</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              GH Max Mode requires no technical knowledge, no prompt engineering, and no pipeline configuration. The agent handles everything that would normally require a production team — brief writing, content generation, video compilation, research analysis — so your team can focus on strategy and decisions, not execution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Available GH Max Agents</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Video Generation Agent", href: "/platform/gh-max-mode/video-generation-agent", desc: "End-to-end multi-scene video campaign production" },
                { title: "Meta Ads Agent", href: "/platform/gh-max-mode/meta-ads-agent", desc: "Full ad campaign copy, creatives, and targeting" },
                { title: "Browser Research Agent", href: "/platform/gh-max-mode/browser-research-agent", desc: "Autonomous web research and competitive analysis" },
                { title: "AI Actor Studio", href: "/platform/gh-max-mode/ai-actor-studio", desc: "Consistent AI human identity across video scenes" },
              ].map((agent) => (
                <a key={agent.href} href={agent.href} className="rounded-lg border border-border bg-card p-4 space-y-1 hover:bg-accent transition-colors">
                  <p className="font-semibold text-sm">{agent.title}</p>
                  <p className="text-xs text-muted-foreground">{agent.desc}</p>
                </a>
              ))}
            </div>
          </section>

          <TLDRFAQSection pageKey="gh-max-overview" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "GH Max Mode", url: "/platform/gh-max-mode" }}
          nextPage={{ label: "Video Generation Agent", url: "/platform/gh-max-mode/video-generation-agent" }}
        />
      </div>
    </main>
  )
}
