import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Asana Integration - Growthub Agent OS",
  description: "Connect your Asana account to sync tasks, projects, and workspaces with Growthub agents.",
}

export default function AsanaIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader breadcrumbs={[{ label: "INTEGRATIONS", href: "/integrations" }]} title="Asana" />

      <PageContent description="Project management and team collaboration platform. Connect your Asana account to sync tasks, projects, and workspaces. Create tasks, manage projects, and track team progress directly from Growthub.">
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            API Token
          </span>
          <span className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black">
            MCP Connector
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Developed by{" "}
          <a href="https://asana.com" className="text-[#0174C7] hover:underline inline-flex items-center gap-1">
            Asana <ExternalLink className="size-3" />
          </a>
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              asana_tasks
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              asana_projects
            </span>
            <span className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-[5px] shadow-sm text-black font-mono">
              asana_workspaces
            </span>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Details</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Author:</strong> Asana
            </p>
            <p>
              <strong>More info:</strong>{" "}
              <a href="#" className="text-[#0174C7] hover:underline inline-flex items-center gap-1">
                Documentation <ExternalLink className="size-3" />
              </a>
              {" · "}
              <a href="#" className="text-[#0174C7] hover:underline inline-flex items-center gap-1">
                Support <ExternalLink className="size-3" />
              </a>
              {" · "}
              <a href="#" className="text-[#0174C7] hover:underline inline-flex items-center gap-1">
                Privacy Policy <ExternalLink className="size-3" />
              </a>
            </p>
          </div>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/integrations/asana" />
    </main>
  )
}
