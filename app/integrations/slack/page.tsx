import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Slack Integration - Growthub Agent OS",
  description:
    "Connect Slack to trigger agents from messages, app mentions, and reactions with automatic replies and webhook-driven automation.",
}

export default function SlackIntegrationPage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          breadcrumbs={[
            { label: "INTEGRATIONS", href: "/integrations" },
            { label: "SLACK", href: "/integrations/slack" },
          ]}
          title="Slack Integration"
        />

        <PageContent description="Connect Slack to trigger agents from messages, app mentions, and reactions. Build intelligent Slack bots with automatic replies, thread management, and workflow automation.">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Slack integration enables webhook-driven agent triggers from Slack events including direct messages,
              app mentions, channel messages, and reactions. Agents can automatically reply in threads, post to
              channels, and execute workflows based on real-time Slack activity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Setting Up Slack Integration</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>
                <strong>Install Slack App:</strong> Navigate to Integrations → Slack and click "Connect Slack
                Workspace". Authorize the Growthub app with required OAuth scopes (channels:history, chat:write,
                app_mentions:read).
              </li>
              <li>
                <strong>Create Slack Trigger:</strong> In Agent Builder, add a new trigger and select "Slack" as the
                schedule type. Choose event types: Direct Messages, App Mentions, Channel Messages, or Reactions.
              </li>
              <li>
                <strong>Configure Event Filters:</strong> Optionally filter events by specific channels, users, or
                keywords to control when agents activate.
              </li>
              <li>
                <strong>Add Workflow Nodes:</strong> Connect Slack Trigger node → LLM Text Generation node → Slack
                Reply node. Configure prompt bindings and response templates.
              </li>
              <li>
                <strong>Test Trigger:</strong> Use "Run Test" button to validate with the last received Slack event.
                The system checks webhook connectivity and event parsing.
              </li>
              <li>
                <strong>Go Live:</strong> Activate the trigger. Agents will now respond to Slack events in real-time.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Supported Event Types</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Direct Messages (DM):</strong> Trigger agents when users send DMs to the bot.
              </li>
              <li>
                <strong>App Mentions:</strong> Activate agents when users mention the bot (@growthub) in channels or
                threads.
              </li>
              <li>
                <strong>Channel Messages:</strong> Monitor specific channels and trigger workflows based on message
                content or patterns.
              </li>
              <li>
                <strong>Reactions:</strong> Trigger agents when specific emoji reactions are added to messages.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Workflow Nodes</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-black">Slack Trigger Node</h3>
                <p className="text-sm">
                  Entry point for Slack events. Extracts channelId, userId, text, threadTs, and other metadata from
                  incoming webhooks. Provides bindings for downstream nodes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Slack Reply Node</h3>
                <p className="text-sm">
                  Sends messages to Slack channels or threads. Supports text formatting, bindings for channel/thread
                  from trigger node, and automatic thread continuation.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Use Cases</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-black">Internal Support Bot</h3>
                <p className="text-sm">
                  Respond to employee questions in #support channel with automated answers, FAQs, and escalation to
                  human agents.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Lead Qualification Bot</h3>
                <p className="text-sm">
                  Engage with prospects in your sales Slack channel. Ask qualifying questions and route hot leads to
                  CRM or sales team.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Content Summarization</h3>
                <p className="text-sm">
                  React to messages with a 📝 emoji to trigger AI summarization. Bot replies in thread with concise
                  summary and key takeaways.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black">Workflow Automation</h3>
                <p className="text-sm">
                  Trigger complex workflows from Slack commands. Create tasks in Asana, update CRM records, or generate
                  reports with a simple message.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Technical Notes</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm">
              <li>
                Single Events API URL per Slack app (configured at Slack app level, not per trigger). Growthub
                dispatcher resolves which trigger executes based on team_id and connectionId.
              </li>
              <li>
                Bot messages are automatically filtered to prevent infinite loops. Messages with bot_id or
                message_changed subtype are ignored.
              </li>
              <li>
                Supports multiple Slack workspaces with separate OAuth connections. Each workspace has its own
                connection stored in mcp_connections table.
              </li>
              <li>
                Default trigger selection: If one connection has a defaultTriggerId, that trigger executes. Otherwise,
                exactly one matching trigger must be active.
              </li>
            </ul>
          </section>

          <TLDRFAQSection pageKey="integrations-slack" />
        </PageContent>

        <PageFooter
          previousPage={{ label: "Integrations", url: "/integrations" }}
          nextPage={{ label: "Asana Integration", url: "/integrations/asana" }}
        />
      </div>
    </main>
  )
}
