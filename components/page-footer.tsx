"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smile, Meh, Frown } from "lucide-react"
import { useState } from "react"

interface PageFooterProps {
  previousPage?: {
    label: string
    url: string
  }
  nextPage?: {
    label: string
    url: string
  }
}

export function PageFooter({ previousPage, nextPage }: PageFooterProps) {
  const [feedback, setFeedback] = useState<"positive" | "neutral" | "negative" | null>(null)

  return (
    <div className="mt-12 space-y-8 border-t border-gray-200 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {previousPage ? (
          <Link href={previousPage.url}>
            <Button
              variant="outline"
              className="w-full h-auto py-4 px-4 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md text-black rounded-md shadow-sm transition-all flex flex-col items-start justify-start"
            >
              <span className="text-xs text-gray-600 mb-1">Previous</span>
              <span className="font-medium text-black line-clamp-2 text-sm md:text-base break-words text-left">
                {previousPage.label}
              </span>
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextPage ? (
          <Link href={nextPage.url}>
            <Button
              variant="outline"
              className="w-full h-auto py-4 px-4 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md text-black rounded-md shadow-sm transition-all flex flex-col items-start justify-start"
            >
              <span className="text-xs text-gray-600 mb-1">Next</span>
              <span className="font-medium text-black line-clamp-2 text-sm md:text-base break-words text-left">
                {nextPage.label}
              </span>
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm text-gray-700">Was this helpful?</span>
        <div className="flex gap-2">
          <Button
            variant={feedback === "positive" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFeedback("positive")}
            className="rounded-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm"
          >
            <Smile className="size-4" />
          </Button>
          <Button
            variant={feedback === "neutral" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFeedback("neutral")}
            className="rounded-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm"
          >
            <Meh className="size-4" />
          </Button>
          <Button
            variant={feedback === "negative" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFeedback("negative")}
            className="rounded-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm"
          >
            <Frown className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
