import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { VideoPlayer } from "@/components/video-player"

// =============================================================================
// METADATA - SEO optimized
// =============================================================================

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/getting-started"])

export default function GettingStarted() {
  return (
    <main className="flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="Getting Started with Growthub Agent OS"
        description="Quick start guide for Growthub Agent OS. Learn how to create your first AI agent, set up Brand Kits, configure Knowledge Bases, and deploy content in minutes."
      />

      <div className="mx-auto max-w-4xl space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[{ label: "Documentation" }, { label: "Quick Start" }]}
          title="Quick Start Guide"
          showCopy={true}
        />

        <PageContent description="Get up and running with Growthub in just a few minutes. This guide covers the essentials to understand the platform's core concepts.">
          <VideoPlayer 
            url="https://youtu.be/DArAgdkpZSc?si=JQ7T0RYgFGIKuTIP" 
            title="Build Your AI Content Engine in Minutes!"
            caption="Learn how to set up your foundational AI content engine, including Agents, Skills, and the Awareness Matrix."
          />
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What is Growthub?</h2>
            <p className="text-base leading-relaxed">
              Growthub is the first fully autonomous B2B SaaS growth engine — one platform where AI agents plan, produce, and deliver real growth work for you. Over 1,000 production pipelines run on Growthub every day, powering video campaigns, ad creative, competitive research, and content publishing without manual execution.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Everything runs inside a unified workspace where your Brand Kits, Knowledge Items, and Agent Skills flow automatically across every tool — creating a compounding growth flywheel the more you use it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Start With GH Max Mode</h2>
            <p className="text-muted-foreground leading-relaxed">
              The fastest way to see what Growthub can do is GH Max Mode — the platform's fully autonomous production engine. Select a GH Max agent, describe your goal, and it handles everything from planning to delivery. No setup required, no technical configuration needed.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2">
              {[
                ["Video Generation Agent", "Multi-scene campaign video from brief to final in under 10 min", "/platform/gh-max-mode/video-generation-agent"],
                ["Meta Ads Agent", "Full ad campaign with copy, headlines, and creative direction", "/platform/gh-max-mode/meta-ads-agent"],
                ["Browser Research Agent", "Autonomous competitive intelligence from any URL", "/platform/gh-max-mode/browser-research-agent"],
                ["AI Actor Studio", "Consistent AI human identity across every video scene", "/platform/gh-max-mode/ai-actor-studio"],
              ].map(([title, desc, href]) => (
                <a key={href} href={href} className="rounded-lg border border-border bg-card p-4 space-y-1 hover:bg-accent transition-colors">
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Core Concepts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Brand Kits</h3>
                <p className="text-muted-foreground">
                  Create unlimited brand profiles with ICP, voice guidelines, and visual assets. Brand Kits flow automatically into every agent, every GH Max workflow, and every piece of content generated on the platform.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Knowledge Items</h3>
                <p className="text-muted-foreground">
                  Store and share collective intelligence across teams and agents. Research outputs, session summaries, and documents become reusable context any agent can access.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Agent Skills</h3>
                <p className="text-muted-foreground">
                  Equip custom agents with tools and functions. Swap between 40+ LLM models in a single agent configuration and combine skills for advanced workflows.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sessions</h3>
                <p className="text-muted-foreground">
                  Every project runs inside a session — a persistent workspace that holds your intent, execution history, artifacts, and outputs together. GH Max agents run inside sessions, keeping every step connected.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Next Steps</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Try GH Max Mode</span> — Run your first autonomous agent workflow with <a href="/platform/gh-max-mode" className="underline underline-offset-4 text-foreground">GH Max Mode</a>
              </li>
              <li>
                <span className="font-semibold text-foreground">Set up your Brand Kit</span> — Define your brand voice, ICP, and visual assets so every agent output is on-brand by default
              </li>
              <li>
                <span className="font-semibold text-foreground">Build a custom agent</span> — Use the Agent Builder to create your first automated workflow
              </li>
              <li>
                <span className="font-semibold text-foreground">Generate content</span> — Use Content Studio to create multi-modal assets aligned to your brand
              </li>
              <li>
                <span className="font-semibold text-foreground">Deploy and share</span> — Export your agent via the Export Platform with a public URL
              </li>
            </ol>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="getting-started" />

        <PageFooter
          previousPage={{ label: "Home", url: "/" }}
          nextPage={{ label: "Platform Overview", url: "/platform/platform-overview" }}
        />
      </div>
    </main>
  )
}
