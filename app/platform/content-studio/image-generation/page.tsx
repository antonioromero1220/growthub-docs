import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"
import { VideoPlayer } from "@/components/video-player"

export const metadata: Metadata = {
  title: "Image Generation | Growthub Documentation",
  description:
    "Generate on-brand images with Nano Banana Pro using Brand Kit assets and batch workflows",
}

export default function ImageGeneration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "Image Generation" },
          ]}
          title="Image Generation"
          showCopy={true}
        />

        <PageContent description="Create branded images for ads, creative briefs, and product mockups with AI-powered generation and Brand Kit consistency.">
          <VideoPlayer 
            url="https://youtu.be/khh3D0YXn4o?si=lY7csAyjfpECvxHJ" 
            title="Generate 30 Days of Brand Content in 60 Seconds"
            caption="Learn how to automate a month's worth of on-brand content in under a minute."
          />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Three Ways to Generate Images</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">1. Sandbox (Fastest)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Go to the main dashboard after authentication. Select Nano Banana Pro model, choose your Brand Kit
                  from the folder icon dropdown, and drag-and-drop reference images directly into the input field.
                </p>
                <p className="text-xs text-gray-600">Best for: Quick one-off generations and testing prompts</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">2. Agent Templates (Batch Workflows)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Navigate to Agents tab and select "Quick Image Generation" template. Configure loop settings
                  (1-10 iterations) to generate multiple variations in one execution. Add image generation as a tool
                  under any custom agent.
                </p>
                <p className="text-xs text-gray-600">Best for: Batch generation and scheduled recurring workflows</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">3. Workflow Canvas (Full Automation)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  In Workflows, add Image Generation node from the sub-agents palette. Connect nodes for multi-step
                  processes, conditional logic, and trigger-based automation (daily, weekly, monthly).
                </p>
                <p className="text-xs text-gray-600">
                  Best for: Complex workflows with multiple steps and automated delivery
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Using Brand Assets</h2>
            <p className="text-gray-700 leading-relaxed">
              Upload logos, product photos, and competitor ads to your Brand Kit under Brand Assets. When you select a
              Brand Kit in the image generation node, all assets become available as reference images. The AI
              automatically applies your brand colors, typography, and visual style.
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Workflow Example</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Set up Brand Kit with logos and product photos</li>
                <li>In image generation node, select your Brand Kit</li>
                <li>Choose reference images (product photos, competitor ad examples)</li>
                <li>Write prompt describing desired image (scene, style, composition)</li>
                <li>Configure batch loop for 3-5 variations</li>
                <li>Execute workflow and review outputs in carousel gallery</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Batch Generation & Scheduling</h2>
            <p className="text-gray-700 leading-relaxed">
              Generate 1-10 images per execution using loop configuration. Set up recurring triggers to automatically
              generate fresh creative variations daily, weekly, or monthly. All generated images save to the Asset
              Gallery and can be delivered via email.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-black">Use Cases</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-gray-700">
                <li>E-commerce product photos with consistent brand styling</li>
                <li>Storyboard frames for creative briefs and video editor direction</li>
                <li>Social media graphics and ad variations for A/B testing</li>
                <li>Book covers and digital product mockups</li>
                <li>Hero images and landing page visuals</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Best Practices</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Reference Images:</strong> Always provide 2-3 reference images (your product photos, competitor
                ads) for better visual accuracy and brand consistency.
              </li>
              <li>
                <strong>Prompt Structure:</strong> Include style (photorealistic, flat illustration), composition
                (centered, rule of thirds), lighting, and brand colors in your prompt.
              </li>
              <li>
                <strong>Iterate with Loops:</strong> Configure 3-5 iterations to generate multiple variations. Pick the
                best output and refine the prompt for the next batch.
              </li>
              <li>
                <strong>Scheduled Workflows:</strong> Set up daily triggers to receive fresh creative variations every
                morning, perfect for maintaining a content calendar.
              </li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="image-generation" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Video Generation", url: "/platform/content-studio/video-generation" }}
          nextPage={{ label: "Scene Continuity", url: "/platform/content-studio/scene-continuity" }}
        />
      </div>
    </main>
  )
}
