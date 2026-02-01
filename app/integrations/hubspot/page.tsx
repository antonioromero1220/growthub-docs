import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "HubSpot Integration - Growthub Agent OS",
  description: "Export leads and sync contacts with HubSpot CRM from your Growthub agents.",
}

export default function HubSpotIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="HubSpot" />

      <PageContent description="CRM and marketing automation platform. Export captured leads directly to HubSpot, sync contacts, and trigger marketing workflows from your Growthub agents.">
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            OAuth
          </span>
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            API Key
          </span>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              hubspot_contacts
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              hubspot_deals
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              hubspot_companies
            </span>
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations/hubspot" />
    </main>
  )
}
