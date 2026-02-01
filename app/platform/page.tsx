import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform | Growthub Documentation",
  description: "Explore Growthub's core features",
}

export default function Platform() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Platform Overview</h1>
          <p className="text-lg text-muted-foreground">
            Growthub is one product: six core features that create a powerful ecosystem where every feature strengthens the
            others through shared Brand Kits, Knowledge, and Agent Skills.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">One Product, Six Core Features</h2>
          <p className="text-muted-foreground mb-6">
            Unlike single-purpose tools, Growthub is one product with six core features in
            one orchestration layer, creating network effects where every feature enhances every other feature.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Key Integration Points</h2>
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                <strong className="text-foreground">Brand Kits</strong> - Global asset accessibility that automatically
                populates across Agent Builder, Content Studio, and Export Interfaces
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                <strong className="text-foreground">Knowledge System</strong> - Multi-tenant knowledge sharing ensures
                unified context across all agents and workflows
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                <strong className="text-foreground">Agent Skills</strong> - Custom tools and templates that work
                seamlessly across the entire platform
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Think of Growthub As...</h2>
          <p className="text-muted-foreground italic bg-accent/50 p-4 rounded-lg border border-primary/20">
            A digital Swiss Army Knife with a brain. While competitors offer just a "blade" (Agent Builder) or just a
            "magnifying glass" (Knowledge System), Growthub is one product where every core feature shares the same
            "power source" (your Brand Kit and Knowledge Vault) so they all work toward the same goal.
          </p>
        </div>
      </div>
    </main>
  )
}
