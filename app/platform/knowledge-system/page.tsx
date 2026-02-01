import type { Metadata } from "next"
import { Database, FileText, Headphones } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { FeatureCard } from "@/components/feature-card"
import { Card } from "@/components/ui/card"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Knowledge System | Growthub Documentation",
  description: "Share collective intelligence across teams and agents",
}

export default function KnowledgeSystem() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Knowledge System" },
          ]}
          title="Knowledge System"
          showCopy={true}
        />

        <PageContent description="Create a unified knowledge repository shared across teams and agents. Generate summaries, audio transcripts, and maintain context.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Core Features</h2>
            <div className="grid gap-4">
              <FeatureCard
                icon={Database}
                title="Multi-Tenant Knowledge Sharing"
                description="Store and share 'Knowledge Items' across teams and agents. Ensure a unified context that improves agent performance."
                colorVariant="gradient"
                details={[
                  { label: "Storage", value: "Unlimited Knowledge Items" },
                  { label: "Access", value: "Team & Agent-based permissions" },
                  { label: "Sync", value: "Real-time updates" },
                  { label: "Format", value: "Text, JSON, Documents" },
                ]}
                highlights={[
                  "Cross-team knowledge synchronization",
                  "Version-controlled knowledge updates",
                  "Semantic search across all items",
                  "Auto-tagging with Brand Kit categories",
                ]}
              />

              <FeatureCard
                icon={FileText}
                title="Thread Summaries"
                description="Generate notebook-style summaries of long conversations or complex data threads. Automatically extract key insights and action items."
                colorVariant="cyan"
                details={[
                  { label: "Input", value: "Conversations, Documents, Threads" },
                  { label: "Output", value: "Structured Summaries" },
                  { label: "AI Model", value: "GPT-4o / Claude 3.5" },
                  { label: "Export", value: "Markdown, PDF, Notion" },
                ]}
                highlights={[
                  "Automatic action item extraction",
                  "Key insight identification",
                  "Timeline-based organization",
                  "Shareable summary links",
                ]}
              />

              <FeatureCard
                icon={Headphones}
                title="Audio Generation"
                description="Convert written reports, knowledge items, or conversation summaries into audio using ElevenLabs integration."
                colorVariant="azure"
                details={[
                  { label: "Provider", value: "ElevenLabs API" },
                  { label: "Voices", value: "50+ Premium Voices" },
                  { label: "Languages", value: "29 Languages" },
                  { label: "Format", value: "MP3, WAV, OGG" },
                ]}
                highlights={[
                  "Natural voice synthesis",
                  "Custom voice cloning",
                  "Multi-language support",
                  "Batch audio generation",
                ]}
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">How It Works</h2>
            <Card className="p-6 border-[#39D9FD]/30 bg-gradient-to-r from-[#39D9FD]/5 to-[#0174C7]/5">
              <p className="text-gray-700 mb-4">
                Knowledge Items act as shared context that flows between agents. When an agent creates insights or
                learns from interactions, that knowledge is automatically available to other agents and teams.
              </p>
              <p className="text-gray-700">
                This creates a compounding effect: each agent learns from the collective intelligence, making every
                agent smarter over time.
              </p>
            </Card>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="knowledge-system" />

        <PageFooter
          previousPage={{ label: "Export Platform", url: "/platform/export-platform" }}
          nextPage={{ label: "Brand Kit System", url: "/platform/brand-kit-system" }}
        />
      </div>
    </main>
  )
}
