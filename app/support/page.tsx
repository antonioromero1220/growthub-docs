import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, BookOpen, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Support | Growthub Documentation",
  description: "Get help with Growthub - support resources, FAQ, and contact options",
}

export default function Support() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Support & Help</h1>
          <p className="text-lg text-gray-600">
            We're here to help. Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive guides for every feature in Growthub. Start here for step-by-step tutorials.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Browse Docs
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Chat</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with other Growthub users, share tips, and get help from the community.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Join Chat
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our support team directly at support@growthub.com. We respond within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Status Page</h3>
                <p className="text-sm text-gray-600 mb-4">Check platform status and historical uptime information.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Check Status
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <Card className="p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How do I create my first agent?</h3>
              <p className="text-sm text-gray-600">
                Navigate to the Agent Builder from the sidebar, select a template, and follow the step-by-step guide.
                You can have your first agent running in minutes.
              </p>
            </Card>
            <Card className="p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What LLM models are supported?</h3>
              <p className="text-sm text-gray-600">
                Growthub supports 40+ LLM models including GPT-4, Claude, Llama, Mistral, and many others. You can
                switch between models in your agent configuration.
              </p>
            </Card>
            <Card className="p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How do I deploy an agent?</h3>
              <p className="text-sm text-gray-600">
                Use the Export Platform to deploy agents as form interfaces or chat assistants. Generate a public URL
                with a single click.
              </p>
            </Card>
            <Card className="p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Can I customize the look and feel?</h3>
              <p className="text-sm text-gray-600">
                Yes! Use Brand Kits to define unlimited brand profiles. All generated content and exported agents
                automatically align with your brand guidelines.
              </p>
            </Card>
            <Card className="p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What is RLHF brand training?</h3>
              <p className="text-sm text-gray-600">
                Reinforcement Learning from Human Feedback allows the Content Studio to learn your brand style and
                automatically align generated content with your voice and visual identity.
              </p>
            </Card>
          </div>
        </section>

        <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-2 text-lg">Still need help?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is available Monday through Friday, 9 AM to 6 PM EST. For urgent issues, please contact
            support@growthub.com with your account details.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90">
            Contact Support
          </Button>
        </Card>
      </div>
    </main>
  )
}
