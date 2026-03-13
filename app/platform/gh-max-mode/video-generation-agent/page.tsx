import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode/video-generation-agent"])

export default function VideoGenerationAgentPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="Video Generation Agent | GH Max Mode"
        description="The GH Max Video Generation Agent plans, scripts, generates, and compiles multi-scene video campaigns automatically. From brief to final video in under 10 minutes."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode", url: "/platform/gh-max-mode" },
            { label: "Video Generation Agent" },
          ]}
          title="Video Generation Agent"
          showCopy={true}
        />

        <PageContent description="The GH Max Video Generation Agent is a fully autonomous video production system. Give it your campaign goal and it handles planning, brief creation, scene generation, and final video compilation — from start to finish in under 10 minutes.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What It Does</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Video Generation Agent replaces the entire video production workflow. Where a traditional process requires a brief writer, a creative director, a video producer, and an editor — this agent handles all of it autonomously. You describe your campaign, it plans, produces, and delivers a complete multi-scene video.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Production Workflow</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">1</div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Advanced Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">The agent asks 3 focused questions about your campaign goal, target audience, and desired tone. Your answers — combined with your active Brand Kit — become the foundation of everything it produces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">2</div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Creative Brief Generation</h3>
                  <p className="text-muted-foreground leading-relaxed">In about 30 seconds, the agent synthesizes a complete creative brief — scene-by-scene breakdown, hooks, calls-to-action, audience targeting, and visual direction. You review and approve this plan before any video is produced.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">3</div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Scene Generation</h3>
                  <p className="text-muted-foreground leading-relaxed">The agent generates each video scene individually based on the approved brief. Your AI actor, brand assets, and reference images are applied automatically across every scene — maintaining visual consistency without manual work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">4</div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Scene Track Review</h3>
                  <p className="text-muted-foreground leading-relaxed">All generated scenes appear in your scene track — your video timeline. Preview individual clips by hovering, review audio tracks, and manage scene order before final compilation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">5</div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Final Video Compilation</h3>
                  <p className="text-muted-foreground leading-relaxed">Process the final video with one click. The agent adds transitions, concatenates all scenes, and delivers a complete campaign-ready video file. Total compilation takes 3-5 minutes.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Production Timeline</h2>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left px-4 py-3 font-semibold">Step</th>
                    <th className="text-left px-4 py-3 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Advanced planning + creative brief</td>
                    <td className="px-4 py-3 font-medium">~30 seconds</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Scene generation (multi-scene)</td>
                    <td className="px-4 py-3 font-medium">2-3 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Final video compilation</td>
                    <td className="px-4 py-3 font-medium">3-5 minutes</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="px-4 py-3 font-semibold">Total end-to-end</td>
                    <td className="px-4 py-3 font-semibold">Under 10 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Video Configuration Options</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-1">Video Model</h3>
                <p className="text-muted-foreground">Select the AI video model that best matches your quality and speed requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Video Format</h3>
                <p className="text-muted-foreground">Choose your ad format: UGC testimonial style for authentic user-generated content feel, or product benefits style for feature-focused campaigns. More formats are continuously being added.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Aspect Ratio</h3>
                <p className="text-muted-foreground">Configure for your target placement — vertical for social feeds, horizontal for YouTube pre-roll, square for multi-format campaigns.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Actor Studio</h3>
                <p className="text-muted-foreground">Generate or upload an AI actor, freeze them, and they carry through every scene automatically. See the <a href="/platform/gh-max-mode/ai-actor-studio" className="underline underline-offset-4">AI Actor Studio guide</a> for full details.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Frame Anchors</h3>
                <p className="text-muted-foreground">Set first and last frame reference images to control scene entry and exit visuals for tighter continuity across your campaign.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Brand Kit Integration</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Your active Brand Kit flows automatically through every step. Your ICP, voice guidelines, visual assets, and brand fidelity settings are embedded into planning, brief synthesis, scene generation, and final compilation. Toggle Brand Kit fidelity to control how strictly the agent applies your brand guidelines to each scene.
            </p>
          </section>

          <TLDRFAQSection pageKey="video-generation-agent" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "What is GH Max Mode", url: "/platform/gh-max-mode/overview" }}
          nextPage={{ label: "Meta Ads Agent", url: "/platform/gh-max-mode/meta-ads-agent" }}
        />
      </div>
    </main>
  )
}
