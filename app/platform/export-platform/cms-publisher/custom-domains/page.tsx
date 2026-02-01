import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Custom Domains | CMS Publisher | Growthub Documentation",
  description:
    "Enterprise custom domain support with DNS configuration and environment-specific deployment for brand-aligned publishing",
}

export default function CustomDomains() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "CMS Publisher", url: "/platform/export-platform/cms-publisher" },
            { label: "Custom Domains" },
          ]}
          title="Custom Domains"
          showCopy={true}
        />

        <PageContent description="Configure custom domains for your published content with automatic SSL certificates, DNS validation, and environment-specific deployment.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Custom Domains allow enterprise customers to publish AI-generated content on their own branded domains.
              Growthub handles SSL certificates, DNS validation, and environment management automatically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Adding a Custom Domain</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Navigate to Settings {">"} Domains {">"} Add Domain to configure your custom domain:
            </p>

            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/img-0443.png"
                alt="Add Custom Domain modal showing DNS configuration interface with CNAME record setup and validation status"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <ol className="space-y-3 text-gray-700 mt-4">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">1.</span>
                <span>Enter your domain name (e.g., growthub.co)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">2.</span>
                <span>Copy the provided DNS records to add to your domain provider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">3.</span>
                <span>
                  Add a CNAME record with name <code className="bg-gray-100 px-2 py-1 rounded text-sm">www</code>{" "}
                  pointing to the provided value
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">4.</span>
                <span>Wait for DNS validation (up to 24 hours for propagation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">5.</span>
                <span>Connect to an environment (Production, Staging, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black">6.</span>
                <span>Save your configuration</span>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">DNS Configuration</h2>
            <p className="text-gray-700 leading-relaxed">
              Configure your DNS records with your domain provider. The system provides exact CNAME values and validates
              your configuration automatically:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-black">
                <div>Type</div>
                <div>Name</div>
                <div>Value</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div>CNAME</div>
                <div>
                  <code className="bg-white px-2 py-1 rounded border border-gray-200">www</code>
                </div>
                <div>
                  <code className="bg-white px-2 py-1 rounded border border-gray-200">growthub.ai</code>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              DNS changes may take up to 24 hours to propagate. Use the DNS Validation tool to check status in
              real-time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Managing Domains</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              View and manage all configured domains from the Settings page:
            </p>

            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white mb-4">
              <Image
                src="/images/img-0444.png"
                alt="Settings page showing Custom Domains management interface with active domains list"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Edit domain configurations to update DNS settings, change environment connections, or manage redirects:
            </p>

            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/img-0442.png"
                alt="Edit Domain modal showing active domain status, DNS configuration, and environment settings"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Environment Management</h2>
            <p className="text-gray-700 leading-relaxed">
              Connect domains to specific environments for organized deployment workflows:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Production</strong> - Live content for end-users
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Staging</strong> - Pre-production testing environment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>
                  <strong className="text-black">Development</strong> - Internal development and experimentation
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">SSL & Security</h2>
            <p className="text-gray-700 leading-relaxed">
              SSL certificates are automatically provisioned and renewed for all custom domains. All content is served
              over HTTPS with modern TLS encryption. No manual certificate management required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Troubleshooting</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-black">DNS Validation Failed</h3>
                <p className="text-gray-700 text-sm">
                  Verify your CNAME record points to the exact value provided. Wait up to 24 hours for DNS propagation.
                  Use the DNS Validation tool to see detailed error messages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Domain Shows Inactive</h3>
                <p className="text-gray-700 text-sm">
                  Check that DNS records are correctly configured and fully propagated. Click Refresh to re-validate
                  DNS status.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">SSL Certificate Not Provisioning</h3>
                <p className="text-gray-700 text-sm">
                  Ensure DNS validation is complete first. SSL certificates provision automatically after successful DNS
                  validation.
                </p>
              </div>
            </div>
          </section>
        </PageContent>

        <TLDRFAQSection pageKey="cms-publisher-custom-domains" />

        <PageFooter
          previousPage={{ label: "Preview URLs", url: "/platform/export-platform/cms-publisher/preview-urls" }}
          nextPage={{ label: "Batch Generation", url: "/platform/export-platform/batch-generation" }}
        />
      </div>
    </main>
  )
}
