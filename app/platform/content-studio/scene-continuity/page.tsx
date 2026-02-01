import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Scene Continuity | Growthub Documentation",
  description:
    "Clone winning ad creatives and maintain visual consistency across multi-scene videos using reference frames",
}

export default function SceneContinuity() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "Scene Continuity" },
          ]}
          title="Scene Continuity"
          showCopy={true}
        />

        <PageContent description="Replicate winning ad creatives and extend videos seamlessly using reference frames, workflow binding, and performance-driven insights.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What is Scene Continuity?</h2>
            <p className="text-gray-700 leading-relaxed">
              Scene continuity enables you to clone winning ad creatives by using reference frames from existing videos.
              The AI analyzes the visual style, actors, settings, composition, and lighting to generate new scenes that
              maintain consistent branding. Perfect for extending testimonials, creating hook variations, and scaling
              UGC content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">How to Clone Winning Ads</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">Step 1: Identify Winning Creatives</h3>
                <p className="text-sm text-gray-700">
                  Review biweekly performance reports from Meta Ads or other ad platforms. Identify creatives with high
                  CTR, low CPA, or strong engagement metrics. Note the winning hooks, formats, and visual styles.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">Step 2: Extract Reference Frame</h3>
                <p className="text-sm text-gray-700">
                  Screenshot the key frame from your winning ad (thumbnail or critical moment). Ensure high quality and
                  proper framing. Upload this image to your Brand Kit under Brand Assets as a "product photo."
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">Step 3: Generate AI Prompt</h3>
                <p className="text-sm text-gray-700">
                  Use a copywriting agent to analyze the reference frame. Provide the image and ask the agent to
                  describe the scene in detail (actors, setting, lighting, product placement, voiceover). Copy the
                  generated prompt.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">Step 4: Generate New Variations</h3>
                <p className="text-sm text-gray-700">
                  In the workflow canvas, add a Video Generation node. Select VO 3.1 (supports actor reference images),
                  choose your Brand Kit, select the reference frame, paste the AI-generated prompt, and execute. The AI
                  creates new hooks maintaining the original visual style.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Multi-Scene Extension with Workflow Binding</h2>
            <p className="text-gray-700 leading-relaxed">
              Extend existing video clips by binding the output of one video generation node to another. The AI uses
              the ending frame as context to generate a seamless continuation, perfect for multi-scene testimonials and
              product demos.
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Workflow Binding Setup</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Add two Video Generation nodes to the canvas</li>
                <li>Generate scene 1 with the first node (e.g., actor testimonial intro)</li>
                <li>In the second node, enable "Extend Existing Video" option</li>
                <li>Click "Bind Output" and select the video URL from node 1</li>
                <li>Write continuation prompt (e.g., product demonstration, outro)</li>
                <li>Execute to generate a merged 15+ second video with scene continuity</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Use Cases</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Interview-Style Testimonials:</strong> Clone winning testimonial hooks with new voiceovers while
                maintaining actor consistency and visual branding.
              </li>
              <li>
                <strong>Product Demos:</strong> Create multi-angle product showcases by extending scenes from unboxing
                to usage to CTA.
              </li>
              <li>
                <strong>UGC Actor Cloning:</strong> Use reference frames to generate multiple videos with the same actor
                style, scaling UGC content without additional filming.
              </li>
              <li>
                <strong>Hook Variations:</strong> Test different opening hooks (scroll-stoppers) while keeping the same
                core message and visual style from winning ads.
              </li>
              <li>
                <strong>Before/After Sequences:</strong> Show transformation stories with consistent actors across
                multiple time points.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Best Practices</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>High-Quality Reference Frames:</strong> Use 1080p screenshots with clear actors, good lighting,
                and minimal motion blur for best AI replication results.
              </li>
              <li>
                <strong>Detailed AI Prompts:</strong> When analyzing reference frames with AI agents, request specific
                details on actor age, clothing, background elements, and camera angles.
              </li>
              <li>
                <strong>Use VO 3.1 for Actors:</strong> Sora cannot process human face references due to content
                moderation. Always use VO 3.1 or VO 3.1 Fast for actor-based scene continuity.
              </li>
              <li>
                <strong>Performance-Driven Iteration:</strong> Clone and test variations of your top 3 performing ads.
                Small hook changes can yield significant performance improvements.
              </li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="scene-continuity" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Image Generation", url: "/platform/content-studio/image-generation" }}
          nextPage={{ label: "Brand Asset Integration", url: "/platform/content-studio/brand-assets" }}
        />
      </div>
    </main>
  )
}
