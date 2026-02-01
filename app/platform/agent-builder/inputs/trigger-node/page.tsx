import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Trigger Node - Agent Builder | Growthub Agent OS",
  description:
    "Automatically run your workflow based on external triggers from GitHub, Gmail, Outlook, Stripe, and more.",
}

export default function TriggerNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Trigger Node"
      />

      <PageContent description="The Trigger Node allows you to automatically run your workflow based on certain triggers. Connect external events to kickstart your agent workflows.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Available Triggers</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>GitHub:</strong> Pull requests, issues, commits, releases
            </li>
            <li>
              <strong>Gmail:</strong> New emails, labels, attachments
            </li>
            <li>
              <strong>Outlook:</strong> Inbox events, calendar updates
            </li>
            <li>
              <strong>Stripe:</strong> Payments, subscriptions, invoices
            </li>
            <li>
              <strong>Typeform:</strong> Form submissions
            </li>
            <li>
              <strong>Zendesk:</strong> Support tickets, updates
            </li>
            <li>
              <strong>Time:</strong> Scheduled intervals (cron)
            </li>
            <li>
              <strong>Webhook:</strong> Custom HTTP triggers
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">How Triggers Work</h2>
          <p className="text-gray-700 leading-relaxed">
            A Trigger Node will start your workflow when a certain event occurs, such as an email being received in your
            Gmail account, or a pull request created on GitHub. Configure the trigger conditions and map the incoming
            data to your workflow variables.
          </p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/trigger-node" />
    </main>
  )
}
