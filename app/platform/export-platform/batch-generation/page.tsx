import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Batch Generation | Growthub Documentation",
  description: "Schedule and loop content generation across channels",
}

export default function BatchGeneration() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "Batch Generation" },
          ]}
          title="Batch Generation"
          showCopy={true}
        />

        <PageContent description="Automatically generate and publish content batches on schedule. Loop through the Content Studio to create diverse content variations across all formats.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Batch Generation Overview</h2>
            <p className="text-gray-700">
              Batch Generation enables you to loop the Content Studio generation engine to create multiple variations of
              content in a single execution. Perfect for campaigns, seasonal content, or multi-channel content
              strategies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Supported Content Types</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Text content (blog posts, social media, emails)</li>
              <li>Images (product images, social graphics, banners)</li>
              <li>Videos (shorts, promos, tutorials)</li>
              <li>Mixed batches combining all formats</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Scheduling</h2>
            <p className="text-gray-700 mb-3">Configure batch generation schedules:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>One-time batches</li>
              <li>Daily, weekly, or monthly schedules</li>
              <li>Custom cron expressions</li>
              <li>Timezone-aware scheduling</li>
              <li>Automatic publishing to all connected channels</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Use Cases</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Daily social media content calendar</li>
              <li>Weekly email newsletter series</li>
              <li>Monthly blog post batches</li>
              <li>Product image generation campaigns</li>
              <li>Seasonal content variations</li>
              <li>A/B testing content variations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Configuration</h2>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Create a batch generation workflow</li>
              <li>Select content types to generate</li>
              <li>Configure loop parameters and variations</li>
              <li>Set schedule and distribution channels</li>
              <li>Define quality checks and approval workflows</li>
              <li>Enable and monitor execution</li>
            </ol>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "CMS Publisher Node", url: "/platform/export-platform/cms-publisher" }}
          nextPage={{ label: "Brand Kit System", url: "/platform/brand-kit-system" }}
        />
      </div>
    </main>
  )
}
