import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { FileInput, File, Zap, Link2, Headphones, ImageIcon } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Inputs - Agent Builder | Growthub Agent OS",
  description:
    "Configure multi-modal inputs for your Growthub agents including text, files, triggers, URLs, audio, and images.",
}

const inputNodes = [
  {
    title: "Input Node",
    href: "/platform/agent-builder/inputs/input-node",
    icon: FileInput,
    description: "Standard text and data inputs",
  },
  {
    title: "Files Node",
    href: "/platform/agent-builder/inputs/files-node",
    icon: File,
    description: "Upload and process documents",
  },
  {
    title: "Trigger Node",
    href: "/platform/agent-builder/inputs/trigger-node",
    icon: Zap,
    description: "Event-based workflow triggers",
  },
  {
    title: "URL Input Node",
    href: "/platform/agent-builder/inputs/url-input-node",
    icon: Link2,
    description: "Fetch and process web content",
  },
  {
    title: "Audio Input Node",
    href: "/platform/agent-builder/inputs/audio-input-node",
    icon: Headphones,
    description: "Voice and audio processing",
  },
  {
    title: "Image Input Node",
    href: "/platform/agent-builder/inputs/image-input-node",
    icon: ImageIcon,
    description: "Visual content analysis",
  },
]

export default function InputsPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Inputs"
      />

      <PageContent description="Configure how your agents receive and process different types of input data. Growthub supports multi-modal inputs including text, files, triggers, URLs, audio, and images.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Available Input Types</h2>
          <div className="space-y-3">
            {inputNodes.map((node) => (
              <Link
                key={node.title}
                href={node.href}
                className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-[5px] shadow-sm hover:border-[#39D9FD] transition-colors"
              >
                <div className="p-2 rounded-md bg-gradient-to-r from-[#39D9FD]/10 to-[#0174C7]/10">
                  <node.icon className="size-5 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-black">{node.title}</h3>
                  <p className="text-sm text-gray-600">{node.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Multi-Modal Input Handling</h2>
          <p className="text-gray-700 leading-relaxed">
            The Growthub Agent OS supports a structured start node that manages inputs from tagging agents, supports
            both custom and pre-configured input types, and appropriately passes information to sub-agents for
            processing.
          </p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs" />
    </main>
  )
}
