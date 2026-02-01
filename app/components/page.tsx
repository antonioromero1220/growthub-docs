import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Components | Growthub Documentation",
  description: "UI components available for the Growthub documentation",
}

export default function Components() {
  return (
    <main className="mx-auto max-w-4xl flex-1 overflow-auto">
      <div className="space-y-8 px-6 py-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Documentation Components</h1>
          <p className="text-lg text-muted-foreground">
            Pre-built components for building documentation interfaces. All components are built with shadcn/ui.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Navigation</h2>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">AppSidebar</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Main sidebar navigation component with search, grouped navigation items, and active state tracking.
            </p>
            <Badge variant="outline">Location: components/app-sidebar.tsx</Badge>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Layout Components</h2>
          <div className="grid gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Card</h3>
              <p className="text-sm text-muted-foreground">Container component for grouping content</p>
              <Badge variant="outline" className="mt-2">
                components/ui/card.tsx
              </Badge>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Badge</h3>
              <p className="text-sm text-muted-foreground">Label component for categorization and tagging</p>
              <Badge variant="outline" className="mt-2">
                components/ui/badge.tsx
              </Badge>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Interactive Components</h2>
          <div className="grid gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Button</h3>
              <p className="text-sm text-muted-foreground">Customizable button component with multiple variants</p>
              <Badge variant="outline" className="mt-2">
                components/ui/button.tsx
              </Badge>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Input</h3>
              <p className="text-sm text-muted-foreground">Form input component with validation support</p>
              <Badge variant="outline" className="mt-2">
                components/ui/input.tsx
              </Badge>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
