import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/content-studio/gh-max-mode"])

export default function GHMaxModePage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
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

        <PageContent description="Activate long-running AI agent workflows for fully agentic video generation. From advanced planning to final video processing, GH Max Mode handles end-to-end creative operations automatically.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is GH Max Mode?</h2>
            <p className="text-gray-700 leading-relaxed">
              GH Max Mode is where long-running AI agent tasks perform their work in Growthub. When you select the 
              Video Generation agent from the main chat input, you enter an agentic workflow that handles the entire 
              creative operations process—from understanding your goals through advanced planning, generating a 
              professional creative brief, compiling multi-scene videos, and processing the final output with 
              automatic transitions.
            </p>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
              <p className="text-sm text-blue-800">
                <strong>Enterprise-Grade Performance:</strong> This workflow is modeled after our Creative OS process 
                that manages over $10 million monthly in ad spend and delivers hundreds of creatives to enterprise clients.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Accessing GH Max Mode</h2>
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              <li>
                <strong>Navigate to Chat Input:</strong> Go to the main page and locate the chat input area.
              </li>
              <li>
                <strong>Select GH Max Mode:</strong> Click on "Growthub Max Mode" to access long-running agent tasks.
              </li>
              <li>
                <strong>Choose Video Generation Agent:</strong> Select the Video Generation agent to generate 
                multi-scene videos from an AI-proof creative brief.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Pre-Configuration Settings</h2>
            <p className="text-gray-700 leading-relaxed">
              After selecting the Video Generation agent, you'll see the pre-configuration panel with the following options:
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Model Selection</h3>
                <p className="text-sm text-gray-700">
                  Pre-selected to 3.1 (VO 3.1) for optimal actor-based generation. VO 3.1 is best for UGC content 
                  and testimonials with human faces.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Format</h3>
                <p className="text-sm text-gray-700">
                  When set to Default, you lead the creative direction. Preset formats handle heavy lifting with 
                  proven structures that have generated millions in revenue. New formats are continuously added.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Aspect Ratio</h3>
                <p className="text-sm text-gray-700">
                  Select 9:16 for vertical social ads (TikTok, Reels, Shorts), 16:9 for horizontal YouTube/display ads, 
                  or 1:1 for square format feed posts.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">AI Actor Studio</h3>
                <p className="text-sm text-gray-700">
                  Generate, upload, or select saved actors. Freeze your actor to maintain visual consistency across 
                  all scenes. See the <a href="/platform/content-studio/ai-actor-studio" className="text-blue-600 hover:underline">AI Actor Studio</a> documentation for details.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Brand Kit Fidelity</h3>
                <p className="text-sm text-gray-700">
                  Toggle on to pass Brand Kit guidelines to the agent. The agent knows your brand, main persona, 
                  and do's/don'ts for generating high-quality, on-brand outputs.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">The Agentic Workflow</h2>
            <p className="text-gray-700 leading-relaxed">
              Once configured, the Video Generation agent follows a structured workflow to produce your final video:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">1</span>
                  <h3 className="font-semibold text-black">Advanced Planning</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  The agent synthesizes your input and asks 3 clarifying questions to better understand what you 
                  want for your video. These questions help refine the creative direction. You can skip them if 
                  you prefer, but they significantly improve output quality.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">2</span>
                  <h3 className="font-semibold text-black">Creative Brief Generation</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  After answering the planning questions, the agent generates a full creative brief in about 30 seconds. 
                  This includes the complete video plan with scenes, hooks, and CTA. The brief is modeled after 
                  professional Creative OS workflows used by enterprise clients.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">3</span>
                  <h3 className="font-semibold text-black">Scene Building</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Once you approve the creative brief, the agent builds the actual video scenes. This takes approximately 
                  3 minutes. Multiple scenes are generated according to the brief, each as a separate video block.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">4</span>
                  <h3 className="font-semibold text-black">Final Video Processing</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  After scenes are generated, processing the final video takes 3-5 minutes. The system automatically 
                  concatenates scenes, applies transitions, and produces one final output video ready for delivery.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Scene Track & Preview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Scene Track is your video timeline showing all generated blocks. Before processing the final video, 
              you can review individual scenes:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Hover to Preview:</strong> Hover over any block in the scene track to pull up a preview 
                of that individual clip.
              </li>
              <li>
                <strong>Audio Track:</strong> View the full audio track associated with your video—voiceovers, 
                music, and sound effects.
              </li>
              <li>
                <strong>Video Blocks:</strong> Each generated scene appears as a block that can be reviewed 
                independently before final processing.
              </li>
              <li>
                <strong>Intelligent Placement:</strong> The AI intelligently places logos and brand elements 
                without explicit prompting when Brand Kit is enabled.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Team Workflow Integration</h2>
            <p className="text-gray-700 leading-relaxed">
              GH Max Mode threads function as work sessions in the AI cloud. Teams can share threads and collaborate 
              on video generation workflows:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Share Threads:</strong> Share video generation sessions across team members for review 
                and collaboration.
              </li>
              <li>
                <strong>Creative Strategy to Delivery:</strong> Move from creative briefing directly to video 
                editors for final outputs in less than 24 hours.
              </li>
              <li>
                <strong>Data-Driven Decisions:</strong> Read signals from ad accounts, get metrics, and take 
                actionable decisions to drive performance.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Performance & Timeline</h2>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-3">Typical Generation Times</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Creative Brief Generation</span>
                  <span className="text-sm font-medium text-black">~30 seconds</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Scene Building (4 scenes)</span>
                  <span className="text-sm font-medium text-black">~3 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Final Video Processing</span>
                  <span className="text-sm font-medium text-black">3-5 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-semibold text-gray-900">Total End-to-End</span>
                  <span className="text-sm font-semibold text-black">&lt;10 minutes</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Use Cases</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">B2B Enterprise Ads</h3>
                <p className="text-sm text-gray-700">
                  Generate professional testimonial-style videos targeting enterprise buyers. Freeze a middle-aged 
                  business owner actor, enable Brand Kit, and let the agent create compelling before/after narratives.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">E-commerce Product Videos</h3>
                <p className="text-sm text-gray-700">
                  Showcase products with lifestyle scenes. Upload product reference images, generate consumer actors, 
                  and produce videos highlighting product benefits with negative ion technology, safety features, etc.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Agency Scale Production</h3>
                <p className="text-sm text-gray-700">
                  White-label creative operations for clients. Generate hundreds of creatives with consistent quality, 
                  reducing creative ops costs by at least 70% while delivering in under 24 hours.
                </p>
              </div>
            </div>
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
