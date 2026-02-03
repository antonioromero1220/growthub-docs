import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { generatePageMetadata, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = generatePageMetadata(PAGE_SEO_CONFIG["/integrations/gohighlevel/social-posting"])

export default function GHLSocialPostingPage() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <PageSEO
        title="Social Posting | Growthub Documentation"
        description="Learn how to use Growthub's Social Posting integration to automate your social media presence with AI-powered content and scheduling."
      />

      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "INTEGRATIONS", url: "/integrations" },
            { label: "GoHighLevel", url: "/integrations/gohighlevel" },
            { label: "Social Posting" },
          ]}
          title="Social Posting"
          showCopy={true}
        />

        <PageContent description="Transform Growthub into your autonomous social media engine. This integration allows you to push AI-generated, on-brand content directly from your workflows into GoHighLevel.">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">The Growthub AI Social Flywheel</h2>
            <p className="text-gray-700 leading-relaxed">
              Growthub's integration with GoHighLevel (GHL) isn't just a simple connection—it's a powerful expansion of your content engine. By combining **Content Studio**, **Workflow Orchestration**, and the **Export Platform**, you can now automate the entire journey from content ideation to scheduled publication.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">On-Brand Consistency</h3>
                <p className="text-sm text-blue-800">
                  Every post automatically inherits your Brand Kit—colors, fonts, logos, and voice—ensuring your social presence is perfectly aligned.
                </p>
              </div>
              <div className="p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
                <h3 className="font-semibold text-cyan-900 mb-2">Knowledge-Driven Content</h3>
                <p className="text-sm text-cyan-800">
                  Your agents pull from your multi-tenant Knowledge System to create context-aware posts that actually provide value to your audience.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 mt-12">
            <h2 className="text-2xl font-bold text-black">Feature Showcase</h2>
            
            <div className="space-y-12">
              {/* Image 3: Agent Config */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">1. Workflow Setup & Account Selection</h3>
                <p className="text-gray-700">
                  Easily configure which GHL location and specific social media accounts (Instagram, LinkedIn, etc.) your agents should publish to. The intuitive interface allows for seamless connection management and timezone handling.
                </p>
                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-md bg-white max-w-[500px]">
                  <Image
                    src="/product_screenshots/socialaccounts.png"
                    alt="Agent configuration for GHL Social Post Scheduler showing account selection"
                    width={500}
                    height={333}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Image 2: Post Composer Preview */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">2. AI-Powered Content Creation</h3>
                <p className="text-gray-700">
                  Inside the Growthub UI, witness your Content Studio in action. Agents generate high-performing captions, automatically add relevant emojis and hashtags, and bind media assets from your Brand Kit or AI-generated gallery.
                </p>
                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-md bg-white max-w-[500px]">
                  <Image
                    src="/product_screenshots/preview-post.png"
                    alt="Growthub Post Composer Preview showing an AI-generated Instagram post"
                    width={500}
                    height={333}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Image 1: GHL Social Planner Dashboard */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">3. Seamless Scheduling into GHL</h3>
                <p className="text-gray-700">
                  The final result is a perfectly scheduled post in your GoHighLevel Social Planner. Growthub handles the secure media transfer and scheduling logistics, leaving you with a clean, organized content calendar ready for engagement.
                </p>
                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-md bg-white max-w-[500px]">
                  <Image
                    src="/product_screenshots/dropdown-scheduler.png"
                    alt="GHL Social Planner Dashboard showing a scheduled post from Growthub"
                    width={500}
                    height={333}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 mt-12">
            <h2 className="text-2xl font-bold text-black">Why This Matters</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This integration transforms scattered social media efforts into a centralized, democratized intelligence system. By leveraging Growthub's L1-L5 architecture, every post is more than just content—it's a versioned knowledge item that can be audited, refined via RLHF, and replayed for maximum reliability.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Scale with Confidence:</strong> Batch schedule hundreds of posts across multiple brands.</li>
                <li><strong>Enterprise Reliability:</strong> Immutable execution logs ensure your team can track and optimize every workflow.</li>
                <li><strong>Visual Organization:</strong> Integrated calendar boards provide public URLs for team collaboration and client reviews.</li>
              </ul>
            </div>
          </section>

          <TLDRFAQSection />
        </PageContent>

        <PageFooter
          previousPage={{ label: "GoHighLevel Overview", url: "/integrations/gohighlevel" }}
          nextPage={{ label: "Shopify Integration", url: "/integrations/shopify" }}
        />
      </div>
    </main>
  )
}
