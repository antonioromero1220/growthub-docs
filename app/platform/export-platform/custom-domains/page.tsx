import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Custom Domains for Export - Growthub Agent OS",
  description:
    "White-label your exported chat assistants and form interfaces on your own custom domain with automatic SSL and DNS configuration.",
}

export default function ExportCustomDomainsPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          breadcrumbs={[
            { label: "PLATFORM", href: "/platform/platform-overview" },
            { label: "EXPORT PLATFORM", href: "/platform/export-platform" },
            { label: "CUSTOM DOMAINS", href: "/platform/export-platform/custom-domains" },
          ]}
          title="Custom Domains for Export"
        />

        <PageContent description="Serve your exported chat assistants and form interfaces on your own custom domain for a fully white-labeled, brand-aligned experience with automatic SSL.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">What Are Custom Domains?</h2>
            <p className="text-gray-700 leading-relaxed">
              Custom domains let you serve your exported agents on your own domain (e.g., chat.yourbrand.com) instead of
              the default Growthub platform host. This creates a fully white-labeled experience where visitors see your
              brand, your domain, and your trust signals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Both chat share links and form share links work on the same custom domain. For example,
              chat.yourbrand.com/share/abc123 serves the chat interface, and chat.yourbrand.com/share/form/def456
              serves the form interface.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Setting Up Your Custom Domain</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>
                <strong>Add Domain:</strong> Navigate to Settings → Domains and click "Add Domain". Enter your domain
                (e.g., chat.yourbrand.com).
              </li>
              <li>
                <strong>Configure DNS:</strong> In your domain provider (GoDaddy, Namecheap, Cloudflare), add the DNS
                records provided:
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>A Record: Point to 76.76.21.21</li>
                  <li>CNAME Record (www): Point to cname.vercel-dns.com</li>
                </ul>
              </li>
              <li>
                <strong>Validate DNS:</strong> Click "Validate DNS" in the Growthub UI to confirm records are
                configured correctly. DNS propagation takes up to 24 hours.
              </li>
              <li>
                <strong>Bind to Agent:</strong> Once validated, bind your domain to an exported agent. Select the agent
                and the domain from dropdowns, then click "Bind Domain".
              </li>
              <li>
                <strong>Go Live:</strong> Your chat and form URLs are now live on your custom domain. Share the links
                with your visitors.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key Features</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Automatic SSL:</strong> HTTPS certificates are provisioned and renewed automatically. No manual
                certificate management required.
              </li>
              <li>
                <strong>Dual URL Support:</strong> Both chat share links (/share/...) and form share links
                (/share/form/...) work on the same domain.
              </li>
              <li>
                <strong>White-Label Experience:</strong> Remove Growthub branding and serve agents under your own
                domain for maximum trust and brand consistency.
              </li>
              <li>
                <strong>DNS Validation:</strong> Built-in validation tool checks CNAME, A, TXT, and MX records before
                going live.
              </li>
              <li>
                <strong>Unbind and Delete:</strong> Easily unbind domains from agents or delete domains entirely when
                no longer needed.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Use Cases</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-black">Lead Capture Forms</h3>
                <p className="text-sm">
                  Serve AI-powered lead capture forms on your own domain (e.g., apply.yourbrand.com) to maximize trust
                  and conversion rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Customer Support Chatbots</h3>
                <p className="text-sm">
                  Deploy chat assistants on support.yourbrand.com to provide 24/7 customer support under your brand.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Product Demo Experiences</h3>
                <p className="text-sm">
                  Create interactive product demos on demo.yourbrand.com for prospects to explore features in a
                  branded environment.
                </p>
              </div>
            </div>
          </section>

          <TLDRFAQSection pageKey="export-custom-domains" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Batch Generation", url: "/platform/export-platform/batch-generation" }}
          nextPage={{ label: "Agent Orchestration", url: "/platform/agent-orchestration" }}
        />
      </div>
    </main>
  )
}
