import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode/meta-ads-agent"])

export default function MetaAdsAgentPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="Meta Ads Agent | GH Max Mode"
        description="The GH Max Meta Ads Agent generates complete ad campaigns with headlines, copy, creatives, and audience targeting recommendations automatically aligned to your brand."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode", url: "/platform/gh-max-mode" },
            { label: "Meta Ads Agent" },
          ]}
          title="Meta Ads Agent"
          showCopy={true}
        />

        <PageContent description="The GH Max Meta Ads Agent produces complete, campaign-ready ad packages — headlines, primary copy, creative direction, and audience targeting — all automatically aligned to your brand and your ideal customer profile.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What It Produces</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Running the Meta Ads Agent delivers a complete campaign package. You don't need to write copy, brief a creative team, or research your audience separately. The agent uses your Brand Kit and campaign goal to generate everything in one autonomous workflow.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { label: "Primary Ad Copy", desc: "Conversion-focused body text aligned to your brand voice and ICP" },
                { label: "Headlines", desc: "Multiple attention-grabbing headline variations for testing" },
                { label: "Creative Direction", desc: "Visual direction and scene guidance for your creative team or AI video agent" },
                { label: "Audience Targeting", desc: "Audience segment recommendations based on your ICP and campaign goal" },
                { label: "Ad Variations", desc: "Multiple copy and angle variations ready for A/B testing" },
                { label: "Campaign Structure", desc: "Suggested campaign structure, objectives, and placement guidance" },
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
                <h3 className="font-semibold mb-1">Brief your campaign</h3>
                <p className="text-muted-foreground leading-relaxed">Describe your campaign goal — product launch, lead generation, retargeting, awareness — and the agent asks targeted clarifying questions to understand your offer, audience, and desired outcome.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Review the campaign brief</h3>
                <p className="text-muted-foreground leading-relaxed">The agent synthesizes a campaign brief outlining the angles, messaging strategy, and creative approach it will use. You approve the direction before any copy is generated.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Agent generates the full package</h3>
                <p className="text-muted-foreground leading-relaxed">Copy, headlines, creative direction, and audience recommendations are produced in one pass — all reflecting your Brand Kit, ICP, and the approved campaign brief.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Use output directly</h3>
                <p className="text-muted-foreground leading-relaxed">The full campaign package is delivered into your session. Copy it directly into your ad creation workflow, or feed the creative direction into the Video Generation Agent to produce matching video assets.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Brand Kit and ICP Integration</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Meta Ads Agent does not generate generic ad copy. It reads your active Brand Kit — your voice guidelines, your ideal customer profile, and your brand positioning — and uses that context to generate copy that sounds like your brand and speaks directly to your audience. The result is ad creative that is on-brand from the first draft.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Pairing With the Video Generation Agent</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Meta Ads Agent and Video Generation Agent are designed to work together. Run the Meta Ads Agent first to establish your campaign angles and messaging. Then use those approved angles as the brief for the Video Generation Agent to produce matching video creative — all inside the same GH Max Mode session.
            </p>
          </section>

          <TLDRFAQSection pageKey="meta-ads-agent" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Video Generation Agent", url: "/platform/gh-max-mode/video-generation-agent" }}
          nextPage={{ label: "Browser Research Agent", url: "/platform/gh-max-mode/browser-research-agent" }}
        />
      </div>
    </main>
  )
}
