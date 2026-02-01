"use client"

import { FAQItem } from "./faq-item"
import { generateDynamicContent } from "@/lib/dynamic-tldr-generator"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface TLDRFAQSectionProps {
  pageKey?: string
}

export function TLDRFAQSection({ pageKey }: TLDRFAQSectionProps) {
  const pathname = usePathname()
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      const slug = pageKey || pathname.split("/").filter(Boolean).slice(1).join("-")
      const generatedContent = await generateDynamicContent(slug, pathname)
      setContent(generatedContent)
      setLoading(false)
    }
    loadContent()
  }, [pathname, pageKey])

  if (loading || !content) return null

  return (
    <div className="space-y-4 mt-8">
      {/* TLDR Section */}
      <div className="border border-gray-300 bg-white p-4 rounded-[5px] shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-black text-base mb-2">TL;DR</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{content.tldr}</p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-2">
        <h3 className="font-bold text-black text-base">FAQ</h3>
        <div className="border border-gray-300 bg-white rounded-[5px] shadow-sm hover:shadow-md transition-shadow p-4">
          <div className="divide-y divide-gray-200">
            {content.faqs.map((faq: any, idx: number) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} keywords={faq.keywords} />
            ))}
          </div>
        </div>
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((faq: any) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </div>
  )
}
