import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"
import { VideoPlayer } from "@/components/video-player"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/content-studio/gh-max-mode"])

export default function GHMaxModePage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="GH Max Mode | Agentic Video Generation Workflows"
        description="Long-running AI agent workflows for end-to-end video generation. Advanced planning, creative brief generation, multi-scene compilation, and automated scene track management."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "GH Max Mode" },
          ]}
          title="GH Max Mode"
          showCopy={true}
        />

        <PageContent description="Leverage fully agentic AI workflows for video generation. GH Max Mode handles long-running tasks including advanced planning, creative brief generation, multi-scene compilation, and automated video processing.">
          <VideoPlayer 
            url="https://youtu.be/KJOdWjPY_gY?si=1NAVM7XMNUS-mdkw" 
            title="GH Max Mode Video Generation"
            caption="See how GH Max Mode generates end-to-end video ads in under 10 minutes with agentic AI workflows."
          />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is GH Max Mode?</h2>
            <p className="text-gray-700 leading-relaxed">
              GH Max Mode is where long-running AI agent tasks perform their work. This is the agentic workflow 
              layer that enables breakthrough performance for enterprise creative operations. Managing over 10 million 
              a month in ad spend requires generating thousands of creatives efficiently—GH Max Mode delivers 10x 
              leverage through automated video generation workflows.
            </p>
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <p className="text-sm text-blue-900">
                <strong>Access GH Max Mode:</strong> Go to the chat input on the main page and select "Growthub Max Mode" 
                to access the Video Generation Agent and other long-running agentic workflows.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Pre-Configuration Settings</h2>
            <p className="text-gray-700 leading-relaxed">
              Before generating videos, configure the agent settings to match your requirements:
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Model Selection</h3>
                <p className="text-sm text-gray-700">
                  Pre-selected to 3.1 by default. The model determines video quality, style capabilities, 
                  and actor support. VO 3.1 excels at actor-based UGC content.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Format Presets</h3>
                <p className="text-sm text-gray-700">
                  Set to Default for full creative direction, or select from preset formats with proven 
                  structures that have generated millions in ad revenue. New formats continuously added.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Aspect Ratio</h3>
                <p className="text-sm text-gray-700">
                  Select the output aspect ratio (9:16 for Stories/Reels, 16:9 for YouTube, 1:1 for Feed posts). 
                  The agent generates videos optimized for your target placement.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Brand Kit Fidelity</h3>
                <p className="text-sm text-gray-700">
                  Toggle on to pass brand guidelines, persona data, and guardrails to the agent. The agent 
                  will know your brand, main persona, and the do's and don'ts for high-quality outputs.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Advanced Planning</h2>
            <p className="text-gray-700 leading-relaxed">
              After selecting the Video Generation Agent, the advanced planning step synthesizes your request 
              and generates 3 clarifying questions to better understand your video requirements:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Questions help the agent understand your target audience, messaging, and visual style</li>
              <li>Answer the questions for better results, or skip to proceed with default assumptions</li>
              <li>Responses inform the creative brief generation for more accurate outputs</li>
              <li>The agent uses your Brand Kit persona and guidelines to contextualize questions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Creative Brief Generation</h2>
            <p className="text-gray-700 leading-relaxed">
              The creative briefing process is modeled after the Creative OS workflow used by enterprise 
              creative teams. The agent generates a comprehensive video plan in approximately 30 seconds:
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Creative Brief Components</h3>
              <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                <li><strong>Scene Breakdowns:</strong> Individual scenes with visual direction and transitions</li>
                <li><strong>Hooks:</strong> Opening hooks designed to capture attention in the first 3 seconds</li>
                <li><strong>CTA:</strong> Call-to-action messaging and placement strategy</li>
                <li><strong>Persona Targeting:</strong> Messaging aligned with your Brand Kit persona</li>
                <li><strong>Visual Direction:</strong> Style, mood, and reference guidance for each scene</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Review the creative brief before proceeding. Once approved, the agent builds the actual video 
              generation which takes approximately 3 minutes for all scenes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Scene Track & Video Timeline</h2>
            <p className="text-gray-700 leading-relaxed">
              After scene generation completes, the Scene Track displays your video timeline with all 
              generated blocks:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Preview Clips:</strong> Hover over any block to preview the individual clip before 
                final processing.
              </li>
              <li>
                <strong>Video Blocks:</strong> Each scene appears as a block in the timeline, showing thumbnails 
                and duration.
              </li>
              <li>
                <strong>Audio Track:</strong> View and manage the audio layer synced with your video blocks.
              </li>
              <li>
                <strong>Final Processing:</strong> Process the final video to concatenate scenes, apply 
                transitions, and generate the complete output (3-5 minutes).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Team Collaboration & Handoff</h2>
            <p className="text-gray-700 leading-relaxed">
              Teams treat GH Max Mode threads as work sessions in the AI cloud. Share threads to collaborate 
              on creative strategy and hand off to video editors:
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Workflow Handoff Process</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Creative strategist generates video plan and scenes in GH Max Mode</li>
                <li>Share the thread with the video editing team</li>
                <li>Editors access the creative brief, individual clips, and final outputs</li>
                <li>Final polish and delivery completed in under 24 hours</li>
                <li>Metrics from ad accounts inform the next creative iteration</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Performance & Timing</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-black">Stage</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-black">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-gray-200 text-gray-700">Creative Brief Generation</td>
                    <td className="p-3 border-b border-gray-200 text-gray-700">~30 seconds</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200 text-gray-700">Multi-Scene Video Generation</td>
                    <td className="p-3 border-b border-gray-200 text-gray-700">~3 minutes</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200 text-gray-700">Final Processing (Transitions/Audio)</td>
                    <td className="p-3 border-b border-gray-200 text-gray-700">3-5 minutes</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200 font-semibold text-black">Total End-to-End</td>
                    <td className="p-3 border-b border-gray-200 font-semibold text-black">&lt;10 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Cost Reduction & ROI</h2>
            <p className="text-gray-700 leading-relaxed">
              GH Max Mode is designed to cut creative operations costs by at least 70% while increasing 
              output velocity. The fully agentic workflow handles the heavy lifting from creative strategy 
              to video delivery, enabling teams to:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Generate hundreds of creatives for clients expecting magic with no content</li>
              <li>Pump out ads and hand off from creative strategy to video editors same-day</li>
              <li>Read signals from ad accounts and take data-driven creative decisions</li>
              <li>Scale creative operations without scaling headcount proportionally</li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="gh-max-mode" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "AI Actor Studio", url: "/platform/content-studio/ai-actor-studio" }}
          nextPage={{ label: "Image Generation", url: "/platform/content-studio/image-generation" }}
        />
      </div>
    </main>
  )
}
