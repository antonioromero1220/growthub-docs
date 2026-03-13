import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/gh-max-mode/ai-actor-studio"])

export default function GHMaxAIActorStudioPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="AI Actor Studio | GH Max Mode"
        description="Generate, save, freeze, and reuse AI actors across multi-scene video campaigns. Maintain visual identity consistency without managing technical details."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "GH Max Mode", url: "/platform/gh-max-mode" },
            { label: "AI Actor Studio" },
          ]}
          title="AI Actor Studio"
          showCopy={true}
        />

        <PageContent description="AI Actor Studio lets you create, save, and reuse AI-generated human actors across your video campaigns. Freeze an actor once and they appear consistently in every scene — no re-selecting, no re-attaching, no managing technical details.">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What AI Actor Studio Solves</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Multi-scene video campaigns need a consistent human presence. Without a dedicated system, maintaining the same actor across 5, 10, or 20 scenes would require manually attaching the same reference to every clip — and results would still drift. AI Actor Studio solves this by treating your actor as a locked creative asset that flows through the entire video automatically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Create an Actor</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Option 1: Generate from a description</h3>
                <p className="text-muted-foreground leading-relaxed">Open AI Actor Studio from your video controls and describe the person you want — age, appearance, style, role. The AI generates a photorealistic actor image and builds a structured actor profile from it automatically.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Option 2: Upload a reference image</h3>
                <p className="text-muted-foreground leading-relaxed">Have a real person or existing image you want to use? Upload it directly. The system analyzes the image and builds the actor profile from the actual visual — no prompting required.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Option 3: Reuse a saved actor</h3>
                <p className="text-muted-foreground leading-relaxed">If you have previously saved actors in your library, select one and it loads immediately — ready to freeze and use in the current campaign.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Freezing Your Actor</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Freezing is the key action in AI Actor Studio. When you freeze an actor, you are committing them as the visual identity anchor for the video campaign. Once frozen:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="leading-relaxed">The actor's image is locked and attached as a reference for every scene</li>
              <li className="leading-relaxed">You do not need to re-attach the actor per clip or per scene</li>
              <li className="leading-relaxed">The actor flows through the entire Video Generation Agent workflow automatically</li>
              <li className="leading-relaxed">Your approved creative brief and brand assets remain the primary drivers — the actor is the continuity layer, not the story</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Saving and Reusing Actors</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Save any actor to your library after generating or uploading them. Saved actors become durable creative assets you can reuse across campaigns without re-generating. Your actor library grows over time — building a roster of brand-consistent characters available for any future video campaign.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2">
              {[
                { action: "Rename", desc: "Give actors memorable names for easy identification in your library" },
                { action: "Duplicate", desc: "Create variations of an actor for different campaign contexts" },
                { action: "Delete", desc: "Remove actors you no longer need from your library" },
                { action: "Share", desc: "Give team members access to the same actors for brand consistency" },
              ].map((item) => (
                <div key={item.action} className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <p className="font-semibold text-sm">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Sharing Actors With Your Team</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Saved actors can be shared with collaborators directly from your actor library. Team members get access to the exact same actor — ensuring every video your team produces uses a consistent visual identity. This is especially valuable for brand characters, spokesperson actors, or any persona your brand uses repeatedly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How the Actor Works With Your Campaign</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Your actor is one layer of the video. The approved creative brief, your Brand Kit, and your product reference images all remain the primary source of campaign meaning. The actor provides visual identity continuity — the same face across scenes — while the brief drives the story, the tone, the CTA, and the brand direction. These layers work together, not against each other.
            </p>
          </section>

          <TLDRFAQSection pageKey="gh-max-ai-actor-studio" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Browser Research Agent", url: "/platform/gh-max-mode/browser-research-agent" }}
          nextPage={{ label: "Agent Builder", url: "/platform/agent-builder" }}
        />
      </div>
    </main>
  )
}
