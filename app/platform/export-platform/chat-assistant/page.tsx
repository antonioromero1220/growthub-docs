import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata: Metadata = {
  title: "Chat Assistant | Growthub Documentation",
  description: "Conversational agent interfaces for customer interaction",
}

export default function ChatAssistant() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[
            { label: "AGENT OS PLATFORM", url: "/platform/platform-overview" },
            { label: "Export Platform", url: "/platform/export-platform" },
            { label: "Chat Assistant" },
          ]}
          title="Chat Assistant"
          showCopy={true}
        />

        <PageContent description="Deploy conversational interfaces for natural agent interaction across support, sales, and advisory use cases.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Conversational Interfaces</h2>
            <p className="text-gray-700">
              Enable natural language interaction with your agents. Chat assistants support multi-turn conversations,
              context awareness, and intelligent responses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Use Cases</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Customer support and troubleshooting</li>
              <li>Sales qualification and lead nurturing</li>
              <li>Product advisory and recommendation</li>
              <li>Knowledge base search and assistance</li>
              <li>FAQ automation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Customization Options</h2>
            <p className="text-gray-700 mb-3">Tailor the chat interface to your brand:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Custom avatars and branding</li>
              <li>Message placeholders and system prompts</li>
              <li>Color schemes and theme customization</li>
              <li>Custom welcome messages</li>
              <li>Response personalization</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Deployment</h2>
            <p className="text-gray-700">
              Generate shareable chat links for instant deployment. Embed directly on websites or distribute via
              communication channels.
            </p>
          </section>
        </PageContent>

        <TLDRFAQSection />

        <PageFooter
          previousPage={{ label: "Form Interfaces", url: "/platform/export-platform/form" }}
          nextPage={{ label: "Landing Page Chatbot", url: "/platform/export-platform/landing-page-chatbot" }}
        />
      </div>
    </main>
  )
}
