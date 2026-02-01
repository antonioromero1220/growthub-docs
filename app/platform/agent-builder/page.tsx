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

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/agent-builder"])

export default function AgentBuilder() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="Agent Builder | Create Custom AI Agents"
        description="Build custom marketing and operational AI agents with no code. Access 40+ LLM models, pre-built templates, custom skills, and seamless deployment."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[{ label: "AGENT OS PLATFORM", url: "/platform/platform-overview" }, { label: "Agent Builder" }]}
          title="Agent Builder"
          showCopy={true}
        />

        <PageContent description="Create custom marketing and operational agents using our no-code builder. Leverage 40+ LLM models and pre-built templates.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Overview</h2>
            <p className="text-base leading-relaxed text-gray-800">
              The Agent Builder is the core orchestration layer for creating autonomous agents that handle marketing and
              operational tasks. Build once, deploy everywhere across your organization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <span className="text-gray-800">
                  <strong>No-Code Agent Creation</strong> - Build marketing and operational agents without writing code
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <span className="text-gray-800">
                  <strong>LLMOS Support</strong> - Access and swap between 40+ LLM models within a single agent
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <span className="text-gray-800">
                  <strong>Agent Skills</strong> - Equip agents with custom tools and reusable functions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <span className="text-gray-800">
                  <strong>CMS Templates</strong> - Utilize pre-built templates for rapid deployment
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Getting Started</h2>
            <ol className="space-y-2 list-decimal list-inside text-gray-800">
              <li>Select a template or start from scratch</li>
              <li>Define your agent's name, description, and capabilities</li>
              <li>Choose your LLM model or enable multi-model support</li>
              <li>Add custom skills and tools</li>
              <li>Configure agent parameters and behavior</li>
              <li>Test your agent before deployment</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Integration with Other Features</h2>
            <p className="text-base leading-relaxed text-gray-800">
              Agents automatically inherit your Brand Kit voice and visual guidelines. They access Knowledge Items for
              context, and their capabilities are determined by available Agent Skills. Once built, deploy them via the
              Export Platform with a single click.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="agent-builder" />

        <PageFooter
          previousPage={{ label: "Platform Overview", url: "/platform/platform-overview" }}
          nextPage={{ label: "Content Studio", url: "/platform/content-studio" }}
        />
      </div>
    </main>
  )
}
