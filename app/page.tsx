import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Zap, Layout, Share2, Book, Palette, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Growthub Agent OS | Multi-Product B2B SaaS Platform",
  description:
    "Comprehensive documentation for Growthub Agent OS - the autonomous B2B SaaS growth engine combining Agent Builder, Content Studio, Export Platform, Knowledge System, Brand Kit System, and Workflow Orchestration.",
}

const features = [
  {
    icon: Zap,
    title: "Agent Builder",
    description: "Custom agent creation with LLMOS (40+ LLM models) and pre-built CMS templates",
    href: "/platform/agent-builder",
  },
  {
    icon: Layout,
    title: "Content Studio",
    description: "Multi-modal generation with image refinement, masking, and RLHF brand training",
    href: "/platform/content-studio",
  },
  {
    icon: Share2,
    title: "Export Platform",
    description: "Deploy agents via form interfaces or chat assistants with public URLs",
    href: "/platform/export-platform",
  },
  {
    icon: Book,
    title: "Knowledge System",
    description: "Multi-tenant knowledge sharing with thread summaries and audio generation",
    href: "/platform/knowledge-system",
  },
  {
    icon: Palette,
    title: "Brand Kit System",
    description: "Unlimited brand profiles with global asset accessibility",
    href: "/platform/brand-kit-system",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "L1-L5 modular architecture with event-driven triggers and MCP integration",
    href: "/platform/workflow-orchestration",
  },
]

export default function Home() {
  return (
    <main className="flex-1 overflow-auto">
      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 sm:py-14 md:px-6 md:py-16">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
            <span className="gh-gradient-text">Growthub:</span>{" "}
            <span className="text-foreground">
              Agent OS<sup className="text-lg">™</sup>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            The Multi-Product Convergence Engine. Harness the power of six integrated products unified by Brand Kits,
            Knowledge Items, and Agent Skills—creating a natural flywheel effect where every feature makes every other
            feature more valuable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="gh-gradient text-white hover:opacity-90 transition-opacity">
            <Link href="/getting-started">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-accent hover:border-primary/50 bg-transparent"
          >
            <Link href="/platform/platform-overview">
              Platform Overview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 sm:py-14 md:px-6 md:py-16">
        <div className="space-y-6 border-b border-border pb-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-black">What is Growthub?</h2>
            <p className="text-lg text-black leading-relaxed">
              Growthub is an autonomous B2B SaaS growth engine that combines five integrated products into a unified
              platform. By leveraging Brand Kits, Knowledge Items, and Agent Skills, Growthub creates a natural flywheel
              where each feature enhances every other feature, enabling businesses to deploy custom agents in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 p-4 rounded-lg bg-accent/30 border border-border">
              <h3 className="font-semibold text-black">For Enterprise Teams</h3>
              <p className="text-sm text-black">
                Deploy multi-agent systems with advanced RLHF training, content generation, and knowledge management.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-accent/30 border border-border">
              <h3 className="font-semibold text-black">For Developers</h3>
              <p className="text-sm text-black">
                Build custom agents using 40+ LLM models, modular architecture, and webhook integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 sm:py-14 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Core Products</h2>
          <p className="text-muted-foreground">Explore each product and its capabilities</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link key={feature.href} href={feature.href}>
                <div className="group rounded-xl border border-border/60 p-6 transition-all hover:border-primary/50 hover:bg-accent/50 hover:gh-glow">
                  <div className="mb-3 inline-flex rounded-lg gh-gradient p-2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 sm:py-14 md:px-6 md:py-16">
        <div className="space-y-6 border-b border-border pb-8">
          <h2 className="text-3xl font-bold text-black">Key Concepts</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Agent Builder</h3>
              <p className="text-sm text-black">
                The core orchestration layer for creating autonomous agents with LLMOS support and pre-built templates.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Brand Kit</h3>
              <p className="text-sm text-black">
                Global brand profiles that enable consistent styling, messaging, and asset management across all agents.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Knowledge System</h3>
              <p className="text-sm text-black">
                Multi-tenant knowledge sharing platform with thread summaries and audio generation capabilities.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Content Studio</h3>
              <p className="text-sm text-black">
                Multi-modal content generation supporting images, videos, and text with AI refinement and RLHF training.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Export Platform</h3>
              <p className="text-sm text-black">
                Deploy agents via public URLs with form interfaces, chat assistants, and third-party integrations.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg border border-border/60">
              <h3 className="font-semibold text-black">Workflow Orchestration</h3>
              <p className="text-sm text-black">
                L1-L5 modular architecture with event-driven triggers, API integrations, and MCP support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14 md:px-6 md:py-16">
        <div className="rounded-2xl gh-gradient p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to dive deeper?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm sm:text-base">
            Start with our getting started guide or explore the API reference for detailed information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild variant="secondary" className="bg-white text-[#1a6b9c] hover:bg-white/90">
              <Link href="/getting-started">Documentation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Link href="/api-reference">API Reference</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
