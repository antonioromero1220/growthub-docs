"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

interface BreadcrumbItem {
  label: string
  url?: string
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[]
  title: string
  showCopy?: boolean
}

export function PageHeader({ breadcrumbs, title, showCopy = true }: PageHeaderProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          {breadcrumbs.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.url ? (
                <Link href={item.url} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
            </div>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">{title}</h1>
      </div>

      {showCopy && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md text-black rounded-md shadow-sm flex-shrink-0 mt-6 transition-all"
        >
          <Copy className="size-4" />
          Copy
        </Button>
      )}
    </div>
  )
}
