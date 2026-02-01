import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

// =============================================================================
// METADATA - SEO optimized
// =============================================================================

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/getting-started"])

export default function GettingStarted() {
  return (
    <main className="flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="Getting Started with Growthub Agent OS"
        description="Quick start guide for Growthub Agent OS. Learn how to create your first AI agent, set up Brand Kits, configure Knowledge Bases, and deploy content in minutes."
      />

      <div className="mx-auto max-w-4xl space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[{ label: "Documentation" }, { label: "Quick Start" }]}
          title="Quick Start Guide"
          showCopy={true}
        />

        <PageContent description="Get up and running with Growthub in just a few minutes. This guide covers the essentials to understand the platform's core concepts.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What is Growthub?</h2>
            <p className="text-base leading-relaxed">
              Growthub is the first fully autonomous B2B SaaS growth engine—one product with six core
              features in one unified orchestration layer. The integration layer allows Brand Kits, Knowledge Items,
              and Agent Skills to flow seamlessly across all tools, creating a natural flywheel effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Core Concepts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Brand Kits</h3>
                <p className="text-muted-foreground">
                  Create unlimited brand profiles with target customer profiles (ICP), voice guidelines, and visual
                  assets. These flow globally across the platform.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Knowledge Items</h3>
                <p className="text-muted-foreground">
                  Store and share collective intelligence across teams and agents. Generate thread summaries and convert
                  to audio.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Agent Skills</h3>
                <p className="text-muted-foreground">
                  Equip custom agents with tools and functions. Swap between 40+ LLM models in a single agent
                  configuration.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4. Content Generation</h3>
                <p className="text-muted-foreground">
                  Create on-brand multi-modal content. Use RLHF brand training to automatically align generated content
                  with your brand.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Next Steps</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Set up your first Brand Kit</span> - Define your brand
                voice and visual identity
              </li>
              <li>
                <span className="font-semibold text-foreground">Create a custom agent</span> - Use the Agent Builder to
                create your first automation
              </li>
              <li>
                <span className="font-semibold text-foreground">Generate content</span> - Use Content Studio to create
                multi-modal assets
              </li>
              <li>
                <span className="font-semibold text-foreground">Deploy and share</span> - Export your agent via the
                Export Platform
              </li>
              <li>
                <span className="font-semibold text-foreground">Build workflows</span> - Set up event-driven
                orchestration with Workflow Engine
              </li>
            </ol>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="getting-started" />

        <PageFooter
          previousPage={{ label: "Home", url: "/" }}
          nextPage={{ label: "Platform Overview", url: "/platform/platform-overview" }}
        />
      </div>
    </main>
  )
}
