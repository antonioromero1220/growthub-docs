import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/platform/content-studio/ai-actor-studio"])

export default function AIActorStudioPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      {/* Structured Data */}
      <PageSEO
        title="AI Actor Studio | Generate & Manage AI Actors"
        description="Generate AI actors on-demand through prompting. Save, freeze, and share actors with team members for consistent character representation across multi-scene video campaigns."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Content Studio", url: "/platform/content-studio" },
            { label: "AI Actor Studio" },
          ]}
          title="AI Actor Studio"
          showCopy={true}
        />

        <PageContent description="Generate, save, and manage AI actors on-demand for video generation. Create consistent characters through prompting, freeze actors for multi-scene campaigns, and share with team members.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              AI Actor Studio is one of the most powerful features in the Growthub video generation system. It allows 
              you to generate AI actors on demand with one click through prompting, upload existing actors, or reutilize 
              and save actors for consistent use across campaigns. This is especially powerful for maintaining visual 
              continuity in multi-scene video ads and UGC content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Creating an AI Actor</h2>
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              <li>
                <strong>Access AI Actor Studio:</strong> In the Video Generation agent pre-configuration panel, 
                locate the AI Actor Studio section.
              </li>
              <li>
                <strong>Describe Your Actor:</strong> Enter a detailed description of your desired actor including 
                age, appearance, style, and persona. For B2B content, describe a professional business owner. For 
                e-commerce, describe relatable consumers matching your target demographic.
              </li>
              <li>
                <strong>Generate or Upload:</strong> Click Generate to create an AI actor from your description, 
                or upload an existing reference image of an actor you want to use.
              </li>
              <li>
                <strong>Save to Library:</strong> Once satisfied with the generated actor, click Save to add them 
                to your actor library for future use.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Freezing Actors</h2>
            <p className="text-gray-700 leading-relaxed">
              When you freeze an actor, you lock their visual appearance for use in video generation. This is 
              critical for maintaining consistency across multi-scene videos and campaign assets.
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">How Freezing Works</h3>
              <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                <li>Select your saved actor from the library</li>
                <li>Click the Freeze button to lock their appearance</li>
                <li>The frozen actor will be used consistently across all video generation in the session</li>
                <li>Combine frozen actors with reference images and Brand Kit assets</li>
                <li>Unfreeze at any time to select a different actor</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Team Sharing & Collaboration</h2>
            <p className="text-gray-700 leading-relaxed">
              Share your AI actors with team members to maintain consistent character representation across your 
              organization. This is essential for agencies managing multiple clients and campaigns.
            </p>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-black mb-2">Sharing an Actor</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                <li>Navigate to your saved actor in the library</li>
                <li>Click the Share Settings button</li>
                <li>Enter collaborator email addresses to invite</li>
                <li>Collaborators will have access to use the actor in their own video workflows</li>
                <li>Manage permissions and remove access at any time</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Brand Kit Integration</h2>
            <p className="text-gray-700 leading-relaxed">
              AI actors can be combined with Brand Kit assets for complete brand alignment. Toggle Brand Kit 
              Fidelity to pass your brand guidelines, persona data, and do's and don'ts to the video generation agent.
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>With Brand Kit:</strong> The agent knows your brand, main persona, and guidelines, 
                ensuring generated videos align with your brand identity alongside the AI actor.
              </li>
              <li>
                <strong>Without Brand Kit:</strong> Generate videos with just the AI actor and prompt, 
                allowing more creative flexibility without brand constraints.
              </li>
              <li>
                <strong>Asset Upload:</strong> Upload additional reference images from your Brand Kit 
                assets to guide the visual generation alongside your frozen actor.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Best Practices by Use Case</h2>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">B2B Enterprise Content</h3>
                <p className="text-sm text-gray-700">
                  Create middle-aged business owner actors that match your enterprise buyer persona. Professional 
                  appearance, confident demeanor. Freeze the actor and use across all sales enablement videos.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">E-commerce Product Videos</h3>
                <p className="text-sm text-gray-700">
                  Generate relatable consumer actors matching your target demographic. Combine with product 
                  reference images from Brand Kit. Create multiple actor variations for A/B testing.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-1">UGC Testimonials</h3>
                <p className="text-sm text-gray-700">
                  Create diverse actors representing your customer base. Use VO 3.1 model for realistic 
                  actor-based content. Generate multiple testimonial variations with the same frozen actor.
                </p>
              </div>
            </div>
          </section>

          <TLDRFAQSection pageKey="ai-actor-studio" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Video Generation", url: "/platform/content-studio/video-generation" }}
          nextPage={{ label: "GH Max Mode", url: "/platform/content-studio/gh-max-mode" }}
        />
      </div>
    </main>
  )
}
