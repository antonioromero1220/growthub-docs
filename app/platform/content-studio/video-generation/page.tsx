import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Video Generation | Growthub Documentation",
  description:
    "Generate AI-powered video ads with Sora 2 and VO 3.1, supporting scene continuity and Brand Kit integration",
}

export default function VideoGeneration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "Video Generation" },
          ]}
          title="Video Generation"
          showCopy={true}
        />

        <PageContent description="Generate high-quality video ads with AI using Sora 2, VO 3.1, and scene continuity workflows for UGC testimonials and product demonstrations.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported AI Models</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">VO 3.1 & VO 3.1 Fast</h3>
                <p className="text-sm text-gray-700">
                  Best for actor-based UGC content and testimonials. Supports reference images with human faces. Ideal
                  for cloning winning ad creatives and maintaining visual consistency across scenes.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Sora 2 & Sora 2 Pro</h3>
                <p className="text-sm text-gray-700">
                  Cost-effective option for product-focused videos and scenic content. Cannot use reference images with
                  human faces due to content moderation. Supports longer video durations.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Getting Started with Video Generation</h2>
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              <li>
                <strong>Set up Brand Kit:</strong> Navigate to Manage {"->"} Brand Kit and upload your logo, product
                photos, and competitor ad references under Brand Assets.
              </li>
              <li>
                <strong>Create Workflow:</strong> Go to Dashboard {"->"} Growth Tools {"->"} Workflows. Click Create
                Workflow and add a Video Generation node from the palette.
              </li>
              <li>
                <strong>Configure Settings:</strong> Select your AI model (VO 3.1 for actors, Sora for products),
                aspect ratio, duration, and reference images from Brand Kit.
              </li>
              <li>
                <strong>Write Prompt:</strong> Describe your 8-second video ad with details on actors, setting, product
                features, and call-to-action. Be specific about visual style.
              </li>
              <li>
                <strong>Execute Workflow:</strong> Click Save and Run. Your video generates in under 2 minutes and
                saves to the Asset Gallery for download.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Multi-Scene Workflows</h2>
            <p className="text-gray-700 leading-relaxed">
              Create extended video ads by chaining multiple video generation nodes together. The first node generates
              scene 1, and the second node uses "Extend Existing Video" to continue from the ending frame, creating
              seamless 15+ second videos.
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">How to Chain Scenes</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Add two Video Generation nodes to your workflow canvas</li>
                <li>Connect them with an edge (arrow)</li>
                <li>In the second node, enable "Extend Existing Video" option</li>
                <li>Click "Bind Output" and select the video URL from the first node</li>
                <li>Write a continuation prompt for scene 2 that flows from scene 1</li>
                <li>Save and execute to generate a seamlessly merged video</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Best Practices</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Use VO 3.1 for UGC:</strong> When generating testimonials or actor-based content, use VO 3.1
                and provide reference images of similar actors/settings from your Brand Kit.
              </li>
              <li>
                <strong>Batch Generation:</strong> Configure loop sequences (1-10 iterations) to generate multiple
                variations of the same prompt for A/B testing hooks and angles.
              </li>
              <li>
                <strong>Resolution Settings:</strong> Use 720p for faster generation during testing, 1080p for final
                ad delivery. VO 3.1 Fast is 2-3x faster than standard VO 3.1.
              </li>
              <li>
                <strong>Prompt Specificity:</strong> Include details on voiceover text, actor actions, product close-ups,
                camera angles, and brand colors for higher-quality outputs.
              </li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="video-generation" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Content Studio", url: "/platform/content-studio" }}
          nextPage={{ label: "Image Generation", url: "/platform/content-studio/image-generation" }}
        />
      </div>
    </main>
  )
}
