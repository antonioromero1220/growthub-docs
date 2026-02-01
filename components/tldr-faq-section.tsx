"use client"

import { FAQItem } from "./faq-item"
import { generateDynamicContent } from "@/lib/dynamic-tldr-generator"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Share2, Copy, Check, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TLDRFAQSectionProps {
  pageKey?: string
}

export function TLDRFAQSection({ pageKey }: TLDRFAQSectionProps) {
  const pathname = usePathname()
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [copiedTldr, setCopiedTldr] = useState(false)

  useEffect(() => {
    const loadContent = async () => {
      const slug = pageKey || pathname.split("/").filter(Boolean).slice(1).join("-")
      const generatedContent = await generateDynamicContent(slug, pathname)
      setContent(generatedContent)
      setLoading(false)
    }
    loadContent()
  }, [pathname, pageKey])

  // Copy page URL to clipboard
  const handleShare = async () => {
    const url = `https://docs.growthub.ai${pathname}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Copy TL;DR to clipboard for AI/LLM use
  const handleCopyTldr = async () => {
    if (!content?.tldr) return
    try {
      await navigator.clipboard.writeText(content.tldr)
      setCopiedTldr(true)
      setTimeout(() => setCopiedTldr(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = content.tldr
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedTldr(true)
      setTimeout(() => setCopiedTldr(false), 2000)
    }
  }

  // Social share URLs
  const shareUrl = `https://docs.growthub.ai${pathname}`
  const shareTitle = content?.title || "Growthub Documentation"
  const shareTldr = content?.tldr || ""

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTldr)}&url=${encodeURIComponent(shareUrl)}`
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  if (loading || !content) return null

  return (
    <div className="space-y-4 mt-8">
      {/* TL;DR Section - AEO Optimized */}
      <div className="border border-gray-300 bg-gradient-to-br from-white to-gray-50 p-4 rounded-[5px] shadow-sm hover:shadow-md transition-shadow relative group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <h3 className="font-bold text-black text-base">TL;DR</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyTldr}
            className="opacity-0 group-hover:opacity-100 transition-opacity h-7 px-2 text-xs"
            title="Copy for AI/LLM context"
          >
            {copiedTldr ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
        {/* AEO: Structured summary for AI extraction */}
        <p className="text-gray-700 text-sm leading-relaxed" itemProp="abstract">
          {content.tldr}
        </p>
        {/* Hidden machine-readable content for AI/LLMs */}
        <meta itemProp="description" content={content.tldr} />
      </div>

      {/* FAQ Section - Schema.org FAQPage */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-blue-500" />
          <h3 className="font-bold text-black text-base">Frequently Asked Questions</h3>
        </div>
        <div
          className="border border-gray-300 bg-white rounded-[5px] shadow-sm hover:shadow-md transition-shadow p-4"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="divide-y divide-gray-200">
            {content.faqs.map((faq: any, idx: number) => (
              <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <FAQItem question={faq.question} answer={faq.answer} keywords={faq.keywords} />
                {/* Hidden structured data for SEO */}
                <meta itemProp="name" content={faq.question} />
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{ display: "none" }}>
                  <meta itemProp="text" content={faq.answer} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Share Section - For viral distribution */}
      <div className="flex items-center gap-2 pt-2">
        <span className="text-xs text-gray-500">Share this page:</span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="h-7 px-2 text-xs"
          title="Copy link"
        >
          {copied ? <Check className="h-3 w-3" /> : <Share2 className="h-3 w-3" />}
        </Button>
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-7 px-2 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
          title="Share on X (Twitter)"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-7 px-2 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
          title="Share on LinkedIn"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* JSON-LD Structured Data for Search Engines & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `https://docs.growthub.ai${pathname}#faq`,
            mainEntity: content.faqs.map((faq: any) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Additional AEO: Speakable schema for voice assistants */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://docs.growthub.ai${pathname}`,
            name: content.title,
            description: content.tldr,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".tldr-content", ".faq-answer"],
            },
          }),
        }}
      />
    </div>
  )
}
