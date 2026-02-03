import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

// =============================================================================
// METADATA - SEO optimized
// =============================================================================

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/content-studio"])

import { VideoPlayer } from "@/components/video-player"

export default function ContentStudio() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="Content Studio | AI-Powered Content Generation"
        description="Generate multi-modal content with AI. Create images, videos, and text with Brand Kit consistency, batch workflows, and RLHF training for brand alignment."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio" },
          ]}
          title="Content Studio"
          showCopy={true}
        />

        <PageContent description="AI-powered content generation for images and videos with Brand Kit consistency, scene continuity, and multi-modal workflows.">
          <VideoPlayer 
            url="https://youtu.be/-ydkwdAPxNI?si=UZ5i9xsWHPYOR7K9" 
            title="Ethically Hijack Content Using AI"
            caption="Discover how to ethically leverage existing content for your brand's organic social strategy."
          />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Content Generation Tools</h2>
            <div className="grid gap-4">
              <a
                href="/platform/content-studio/video-generation"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Video Generation</h3>
                <p className="text-sm text-gray-600">
                  Generate AI video ads with Sora 2 and VO 3.1, supporting scene continuity, multi-clip workflows, and
                  UGC testimonials with Brand Kit integration.
                </p>
              </a>

              <a
                href="/platform/content-studio/image-generation"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Image Generation</h3>
                <p className="text-sm text-gray-600">
                  Create branded images with Nano Banana Pro using Brand Kit assets, batch generation, and scheduled
                  workflows for ads and creative briefs.
                </p>
              </a>

              <a
                href="/platform/content-studio/scene-continuity"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Scene Continuity</h3>
                <p className="text-sm text-gray-600">
                  Clone winning ad creatives and maintain visual consistency across multi-scene videos using reference
                  frames and workflow binding.
                </p>
              </a>

              <a
                href="/platform/content-studio/brand-assets"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors bg-white shadow-sm"
              >
                <h3 className="font-semibold text-black mb-1">Brand Asset Integration</h3>
                <p className="text-sm text-gray-600">
                  Upload and manage logos, product photos, and competitor ads for automatic integration into all
                  AI-generated content.
                </p>
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key Features</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Multi-Modal Generation:</strong> Create images, videos, and text content with consistent Brand
                Kit styling across all outputs.
              </li>
              <li>
                <strong>Batch Workflows:</strong> Generate 1-10 variations per execution with scheduled triggers for
                daily, weekly, or monthly automation.
              </li>
              <li>
                <strong>Reference Images:</strong> Use product photos, competitor ads, and winning creatives as visual
                references for accurate AI generation.
              </li>
              <li>
                <strong>Scene Continuity:</strong> Chain video clips seamlessly by binding workflow nodes for 15+
                second multi-scene videos.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Quick Start</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Set up your Brand Kit with logos, product photos, and visual assets</li>
              <li>Navigate to Workflows and create a new workflow or use the Sandbox for quick tests</li>
              <li>Add Video or Image Generation nodes, select your Brand Kit, and choose reference images</li>
              <li>Write detailed prompts describing your desired output (scene, style, composition)</li>
              <li>Execute workflow and review outputs in the Asset Gallery</li>
              <li>Download final assets or integrate directly into campaigns</li>
            </ol>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="content-studio" />

        <PageFooter />
      </div>
    </main>
  )
}
