import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "GoHighLevel Integration - Growthub Agent OS",
  description: "Connect GoHighLevel for lead management, marketing automation, and CRM sync.",
}

export default function GoHighLevelIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="GoHighLevel" />

      <PageContent description="All-in-one marketing platform for agencies. Sync leads captured by your Growthub agents, trigger automations, and manage client pipelines seamlessly.">
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            API Key
          </span>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              ghl_contacts
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              ghl_pipelines
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              ghl_campaigns
            </span>
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations/gohighlevel" />
    </main>
  )
}
