import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Image Input Node - Agent Builder | Growthub Agent OS",
  description: "Analyze and process images with computer vision, OCR, and visual understanding.",
}

export default function ImageInputNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Image Input Node"
      />

      <PageContent description="The Image Input Node enables visual content analysis using computer vision, OCR text extraction, and multi-modal AI understanding.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Vision Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Image Analysis:</strong> Describe and understand image content
            </li>
            <li>
              <strong>OCR:</strong> Extract text from images and screenshots
            </li>
            <li>
              <strong>Object Detection:</strong> Identify objects, faces, and landmarks
            </li>
            <li>
              <strong>Visual Q&A:</strong> Answer questions about image content
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Supported Formats</h2>
          <p className="text-gray-700">PNG, JPG, JPEG, WebP, GIF, BMP, SVG</p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/image-input-node" />
    </main>
  )
}
