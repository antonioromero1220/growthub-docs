import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode"])

export default function GHMaxModePage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="GH Max Mode | AI-Powered Long-Running Agent Workflows"
        description="GH Max Mode activates Growthub's most powerful AI agents for end-to-end video production, Meta ads, research, and more."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode" },
          ]}
          title="GH Max Mode"
          showCopy={true}
        />

        <PageContent description="GH Max Mode is Growthub's autonomous production engine. Activate a specialized AI agent, give it a goal, and it handles everything — planning, briefing, execution, and delivery — without you managing each step.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Makes GH Max Different</h2>
            <p className="text-base leading-relaxed">
              Standard agents execute a single configured task. GH Max agents run complete end-to-end workflows. They ask clarifying questions to understand your goal, synthesize a creative brief, execute every production step, and deliver a finished output — all inside one session. This is the foundation powering 1,000+ real production pipelines on Growthub.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Available GH Max Agents</h2>

            <div className="space-y-5">
              <div className="rounded-lg border border-border bg-card p-5 space-y-2">
                <h3 className="text-lg font-semibold">Video Generation Agent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plans, scripts, generates, and compiles multi-scene video campaigns from a single brief. From creative planning to final video in under 10 minutes. Supports AI actors, Brand Kit integration, frame anchors, and multiple ad formats.
                </p>
                <a href="/platform/gh-max-mode/video-generation-agent" className="text-sm font-medium text-foreground underline underline-offset-4">
                  Video Generation Agent guide
                </a>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 space-y-2">
                <h3 className="text-lg font-semibold">Meta Ads Agent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generates complete ad campaigns aligned to your Brand Kit — headlines, primary copy, creative direction, and audience targeting recommendations. Built for growth and performance marketing teams.
                </p>
                <a href="/platform/gh-max-mode/meta-ads-agent" className="text-sm font-medium text-foreground underline underline-offset-4">
                  Meta Ads Agent guide
                </a>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 space-y-2">
                <h3 className="text-lg font-semibold">Browser Research Agent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Autonomously browses the web, captures competitive intelligence from any URL, and delivers structured analysis reports inside your session. No manual browsing or copy-pasting required.
                </p>
                <a href="/platform/gh-max-mode/browser-research-agent" className="text-sm font-medium text-foreground underline underline-offset-4">
                  Browser Research Agent guide
                </a>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 space-y-2">
                <h3 className="text-lg font-semibold">AI Actor Studio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate, save, freeze, and reuse AI actors across multi-scene video campaigns. Once frozen, your actor maintains visual identity automatically across every scene — no re-attaching per clip.
                </p>
                <a href="/platform/gh-max-mode/ai-actor-studio" className="text-sm font-medium text-foreground underline underline-offset-4">
                  AI Actor Studio guide
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How GH Max Mode Works</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="leading-relaxed">
                <span className="font-semibold">Activate GH Max Mode</span>
                <span className="text-muted-foreground"> — Select GH Max Mode from your session and choose the agent you want to run.</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Give the agent your goal</span>
                <span className="text-muted-foreground"> — Describe what you want to produce. The agent asks 2-3 clarifying questions to understand your campaign intent, audience, and brand direction.</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Review the creative brief</span>
                <span className="text-muted-foreground"> — The agent synthesizes a structured production plan. You review it and approve before any output is generated.</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Agent executes autonomously</span>
                <span className="text-muted-foreground"> — The agent runs every production step: generating content, building scenes, compiling outputs, and applying Brand Kit guidelines throughout.</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Receive your deliverable</span>
                <span className="text-muted-foreground"> — Final output is delivered directly into your session — ready to use, share, or publish.</span>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Brand Kit Integration</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every GH Max agent automatically uses your active Brand Kit. Your voice guidelines, ICP profile, visual assets, and brand fidelity settings flow into every step of the agent's planning and production process — with no manual application required. The result is output that is on-brand by default, every time.
            </p>
          </section>

          <TLDRFAQSection pageKey="gh-max-mode" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Platform Overview", url: "/platform/platform-overview" }}
          nextPage={{ label: "What is GH Max Mode", url: "/platform/gh-max-mode/overview" }}
        />
      </div>
    </main>
  )
}
