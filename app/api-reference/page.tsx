import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "API Reference | Growthub Documentation",
  description: "Complete API reference for Growthub platform",
}

export default function ApiReference() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <PageHeader
          breadcrumbs={[{ label: "Best Practices", url: "/api-reference" }, { label: "API Reference" }]}
          title="API Reference"
          showCopy={true}
        />

        <PageContent description="Detailed API documentation for integrating Growthub services into your applications.">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Core Endpoints</h2>
            <Card className="p-4">
              <h3 className="font-semibold mb-2 font-mono text-sm">POST /api/agents</h3>
              <p className="text-sm text-muted-foreground mb-3">Create a new agent</p>
              <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto mb-3">
                {`{
  "name": "Marketing Agent",
  "description": "Handles marketing tasks",
  "llmModel": "gpt-4",
  "brandKitId": "brand_123"
}`}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2 font-mono text-sm">GET /api/agents/:id</h3>
              <p className="text-sm text-muted-foreground mb-3">Retrieve agent details</p>
              <p className="text-sm text-muted-foreground">Returns the full agent configuration and current status.</p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2 font-mono text-sm">POST /api/content/generate</h3>
              <p className="text-sm text-muted-foreground mb-3">Generate content using Content Studio</p>
              <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                {`{
  "prompt": "Create a hero image",
  "brandKitId": "brand_123",
  "contentType": "image"
}`}
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Authentication</h2>
            <Card className="p-6 border-primary/20 bg-accent/50">
              <p className="text-muted-foreground mb-4">
                All API requests require authentication using an API key in the Authorization header:
              </p>
              <div className="bg-muted p-3 rounded text-xs font-mono">Authorization: Bearer your_api_key_here</div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Rate Limiting</h2>
            <div className="text-muted-foreground space-y-2">
              <p>API requests are rate limited based on your plan:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Standard Plan: 100 requests per minute</li>
                <li>Pro Plan: 1,000 requests per minute</li>
                <li>Enterprise Plan: Custom limits</li>
              </ul>
            </div>
          </section>
        </PageContent>

        <PageFooter previousPage={{ label: "Workflow Orchestration", url: "/platform/workflow-orchestration" }} />
      </div>
    </main>
  )
}
