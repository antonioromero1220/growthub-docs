import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Files Node - Agent Builder | Growthub Agent OS",
  description: "Upload and process documents, PDFs, spreadsheets, and other file types in your agent workflows.",
}

export default function FilesNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Files Node"
      />

      <PageContent description="The Files Node enables your agents to accept and process document uploads including PDFs, spreadsheets, images, and other file types.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Supported File Types</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Documents:</strong> PDF, DOCX, TXT, RTF, Markdown
            </li>
            <li>
              <strong>Spreadsheets:</strong> XLSX, CSV, Google Sheets
            </li>
            <li>
              <strong>Images:</strong> PNG, JPG, WebP, SVG
            </li>
            <li>
              <strong>Data:</strong> JSON, XML, YAML
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Processing Options</h2>
          <p className="text-gray-700 leading-relaxed">
            Configure automatic text extraction, OCR for scanned documents, and structured data parsing for
            spreadsheets.
          </p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/files-node" />
    </main>
  )
}
