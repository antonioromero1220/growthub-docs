import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { PageFooter } from "@/components/page-footer"
import { TLDRFAQSection } from "@/components/tldr-faq-section"

export const metadata = {
  title: "Audio Input Node - Agent Builder | Growthub Agent OS",
  description: "Process voice recordings and audio files with automatic transcription and analysis.",
}

export default function AudioInputNodePage() {
  return (
    <main className="px-4 py-6 md:px-6">
      <PageHeader
        breadcrumbs={[
          { label: "AGENT BUILDER", href: "/platform/agent-builder" },
          { label: "INPUTS", href: "/platform/agent-builder/inputs" },
        ]}
        title="Audio Input Node"
      />

      <PageContent description="The Audio Input Node processes voice recordings and audio files, providing automatic transcription, speaker identification, and sentiment analysis.">
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Transcription:</strong> Convert speech to text with high accuracy
            </li>
            <li>
              <strong>Speaker Diarization:</strong> Identify different speakers
            </li>
            <li>
              <strong>Language Detection:</strong> Auto-detect 50+ languages
            </li>
            <li>
              <strong>Sentiment Analysis:</strong> Understand tone and emotion
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Supported Formats</h2>
          <p className="text-gray-700">MP3, WAV, M4A, FLAC, OGG, WebM</p>
        </section>
      </PageContent>

      <TLDRFAQSection />
      <PageFooter currentPath="/platform/agent-builder/inputs/audio-input-node" />
    </main>
  )
}
