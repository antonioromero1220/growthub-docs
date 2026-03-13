import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode/browser-research-agent"])

export default function BrowserResearchAgentPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="Browser Research Agent | GH Max Mode"
        description="The GH Max Browser Research Agent autonomously browses the web, captures competitive intelligence, and delivers structured analysis summaries directly into your workspace."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode", url: "/platform/gh-max-mode" },
            { label: "Browser Research Agent" },
          ]}
          title="Browser Research Agent"
          showCopy={true}
        />

        <PageContent description="The GH Max Browser Research Agent browses the web autonomously on your behalf. Give it a URL or a research goal and it captures, analyzes, and delivers a structured report — no manual browsing, no copy-pasting, no summarizing required.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What It Does</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Browser Research Agent takes a research goal — a competitor URL, a market question, a content audit request — navigates to the relevant web pages autonomously, captures what it finds, analyzes it with AI, and delivers a structured written summary directly into your Growthub session. What used to take hours of manual research happens in minutes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What You Can Research</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Competitor Analysis", desc: "Capture positioning, messaging, pricing, and product pages from competitor sites" },
                { label: "Market Research", desc: "Gather structured data from industry sources, reports, and news" },
                { label: "Content Audits", desc: "Analyze content structure, topic coverage, and SEO signals from any website" },
                { label: "Pricing Research", desc: "Capture and compare pricing from multiple sources in one pass" },
                { label: "Lead Enrichment", desc: "Research prospects by URL — gather context about their business before outreach" },
                { label: "Social Monitoring", desc: "Capture public social profiles, recent posts, and engagement signals" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How It Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Give it a URL or research goal</h3>
                <p className="text-muted-foreground leading-relaxed">Paste a URL, list multiple competitor URLs, or describe what you want to research. The agent determines the best approach automatically.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Agent browses autonomously</h3>
                <p className="text-muted-foreground leading-relaxed">The agent navigates the web, captures page content, and reads the relevant sections. It works through multiple pages if needed — no manual clicking required on your end.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI analysis and synthesis</h3>
                <p className="text-muted-foreground leading-relaxed">The captured content is passed to an AI model that analyzes the data, identifies key insights, and structures them into a readable summary report.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Structured report in your session</h3>
                <p className="text-muted-foreground leading-relaxed">The final analysis lands in your session as a structured artifact. You can read it, share it, save it to your Knowledge System, or use it as context for other agents in the same session.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Using Research Output With Other Agents</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Research outputs don't live in isolation. Save them to your Knowledge System and they become context available to any other agent in Growthub. Use competitor analysis to brief the Meta Ads Agent. Use market research to inform the Video Generation Agent's campaign direction. The Browser Research Agent feeds the intelligence layer that makes every other GH Max agent more effective.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Gets Captured</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The agent captures publicly accessible web content — page text, headings, product information, pricing tables, and other structured data visible in the browser. It does not access gated content, authenticated pages, or private data.
            </p>
          </section>

          <TLDRFAQSection pageKey="browser-research-agent" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Meta Ads Agent", url: "/platform/gh-max-mode/meta-ads-agent" }}
          nextPage={{ label: "AI Actor Studio", url: "/platform/gh-max-mode/ai-actor-studio" }}
        />
      </div>
    </main>
  )
}
