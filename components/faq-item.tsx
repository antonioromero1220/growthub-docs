"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
  keywords?: string[]
}

export function FAQItem({ question, answer, keywords }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-3 border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-3 text-left hover:bg-gray-50 p-2 rounded-sm transition-colors"
      >
        <h4 className="font-semibold text-black text-base flex-1">{question}</h4>
        <ChevronDown className={`flex-shrink-0 transition-transform text-black size-5 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-700 text-sm leading-relaxed ml-2">{answer}</p>}
    </div>
  )
}
