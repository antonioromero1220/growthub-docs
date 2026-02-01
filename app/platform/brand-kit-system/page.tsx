import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Brand Kit System | Growthub Documentation",
  description: "Manage unlimited brand profiles with unified identity",
}

export default function BrandKitSystem() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Brand Kit System" },
          ]}
          title="Brand Kit System"
          showCopy={true}
        />

        <PageContent description="Create distinct brand profiles for different clients or internal brands with unified asset accessibility across the platform.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What's in a Brand Kit?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Target Customer Profiles (ICP)</h3>
                <p className="text-muted-foreground">
                  Define ideal customer personas to inform agent behavior, content generation, and marketing messaging.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Voice Guidelines</h3>
                <p className="text-muted-foreground">
                  Document brand tone, messaging pillars, and communication style. Used by Content Studio for RLHF
                  training.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Visual Assets</h3>
                <p className="text-muted-foreground">
                  Store logos, color palettes, fonts, and imagery. Automatically applied to generated content and
                  exported interfaces.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Global Asset Accessibility</h2>
            <p className="text-muted-foreground mb-3">Brand Kit assets automatically populate across:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong className="text-foreground">Agent Builder</strong> - Agents inherit brand voice and style
              </li>
              <li>
                <strong className="text-foreground">Content Studio</strong> - Generated content is on-brand by default
              </li>
              <li>
                <strong className="text-foreground">Export Platform</strong> - Exported interfaces use brand colors and
                assets
              </li>
              <li>
                <strong className="text-foreground">All Workflows</strong> - Brand consistency across all automations
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Use Cases</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Managing multiple client brands within a single agency</li>
              <li>Maintaining distinct sub-brands for different market segments</li>
              <li>Ensuring consistency across internal and external communications</li>
              <li>Scaling brand-compliant content production</li>
            </ul>
          </section>
        </PageContent>

        <PageFooter
          previousPage={{ label: "Knowledge System", url: "/platform/knowledge-system" }}
          nextPage={{ label: "Workflow Orchestration", url: "/platform/workflow-orchestration" }}
        />
      </div>
    </main>
  )
}
