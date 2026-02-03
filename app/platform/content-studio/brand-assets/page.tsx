import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"
import { VideoPlayer } from "@/components/video-player"

export const metadata: Metadata = {
  title: "Brand Asset Integration | Growthub Documentation",
  description:
    "Upload and manage logos, product photos, and competitor ads for automatic integration into AI-generated content",
}

export default function BrandAssets() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "Brand Asset Integration" },
          ]}
          title="Brand Asset Integration"
          showCopy={true}
        />

        <PageContent description="Centralize logos, product photos, and visual references for automatic integration into all AI-generated images and videos.">
          <VideoPlayer 
            url="https://youtu.be/fokR8O19DIA?si=gPl--l3NcKm4k-aD" 
            title="How to Hijack Competitor Ads Using AI"
            caption="Use competitor ad references as visual hooks for your own AI-generated content."
          />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What are Brand Assets?</h2>
            <p className="text-gray-700 leading-relaxed">
              Brand Assets are visual references stored in your Brand Kit that automatically integrate into AI-generated
              content. Upload logos, product photos, competitor ads, and winning creative examples once, then reference
              them across all image and video generation workflows for consistent branding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Setting Up Brand Assets</h2>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Step-by-Step Setup</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Navigate to Dashboard → Manage → Brand Kit</li>
                <li>Create or select a Brand Kit for your client/brand</li>
                <li>Go to the "Brand Assets" tab</li>
                <li>Upload your logo (PNG/SVG with transparent background recommended)</li>
                <li>Upload product photos (multiple angles, high resolution 1080p+)</li>
                <li>Upload competitor ad references or winning creative examples</li>
                <li>Optionally upload style guides, color palettes, and typography samples</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported Asset Types</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Logos</h3>
                <p className="text-sm text-gray-700">
                  PNG or SVG format. Transparent backgrounds preferred. Upload multiple logo variations (full color,
                  white, black) for different use cases.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Product Photos</h3>
                <p className="text-sm text-gray-700">
                  High-resolution images (1080p minimum) showing products from multiple angles. Include lifestyle shots,
                  close-ups, packaging, and in-use examples. AI uses these as references for accurate product rendering.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Competitor Ads</h3>
                <p className="text-sm text-gray-700">
                  Screenshots or downloads of high-performing competitor ads and viral content. The AI analyzes
                  composition, hooks, and visual style to generate similar concepts with your unique branding.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">Reference Frames</h3>
                <p className="text-sm text-gray-700">
                  Key frames from winning video ads for scene continuity and creative cloning. Upload screenshots of
                  actors, settings, and visual styles you want to replicate across new videos.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">How Brand Assets Apply to Generated Content</h2>
            <p className="text-gray-700 leading-relaxed">
              When you select a Brand Kit in any image or video generation node, all uploaded assets become available
              as reference images. The AI automatically:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Matches product visuals from your uploaded photos for accurate representation</li>
              <li>Incorporates your logo placement and branding elements</li>
              <li>Applies color schemes and visual styles from your style guide</li>
              <li>Replicates composition and hooks from competitor ad references</li>
              <li>Maintains consistent typography and design patterns</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Using Assets Across Workflows</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">In Sandbox (Quick Generation)</h3>
                <p className="text-sm text-gray-700">
                  Select your Brand Kit from the folder icon dropdown. All assets are available. Alternatively,
                  drag-and-drop individual reference images without selecting a full Brand Kit for quick tests.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">In Workflow Canvas</h3>
                <p className="text-sm text-gray-700">
                  In Video or Image Generation nodes, select Brand Kit from the dropdown. Check the boxes for specific
                  assets you want to reference (logo, product photos). The AI uses these as visual context.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2">In Agent Templates</h3>
                <p className="text-sm text-gray-700">
                  When configuring image/video generation tools within agents, select the Brand Kit. Assets
                  automatically apply to all generations triggered by that agent.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Best Practices</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Organize by Client:</strong> Create separate Brand Kits for each client or brand to avoid
                mixing assets and maintain clear organization.
              </li>
              <li>
                <strong>High-Quality Images:</strong> Upload 1080p+ resolution assets. Low-quality references result in
                lower-quality AI generations.
              </li>
              <li>
                <strong>Multiple Angles:</strong> For products, upload 5-10 photos from different angles, lighting
                conditions, and use cases for AI flexibility.
              </li>
              <li>
                <strong>Update Regularly:</strong> Add new winning ad references quarterly based on performance data to
                keep your creative library fresh.
              </li>
              <li>
                <strong>Test Without Brand Kit:</strong> For quick experiments, use drag-and-drop in the sandbox
                without selecting a full Brand Kit to test individual reference images.
              </li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="brand-assets" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Scene Continuity", url: "/platform/content-studio/scene-continuity" }}
          nextPage={{ label: "Knowledge System", url: "/platform/knowledge-system" }}
        />
      </div>
    </main>
  )
}
