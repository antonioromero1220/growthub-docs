"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureDetail {
  label: string
  value: string
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  details?: FeatureDetail[]
  highlights?: string[]
  colorVariant?: "cyan" | "azure" | "gradient"
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  details = [],
  highlights = [],
  colorVariant = "gradient",
}: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const hasExpandableContent = details.length > 0 || highlights.length > 0

  // Color variants using brand palette
  const colorStyles = {
    cyan: {
      iconBg: "bg-[#39D9FD]",
      iconColor: "text-black",
      accentBorder: "border-[#39D9FD]/30",
      expandedBg: "bg-[#39D9FD]/5",
      highlightDot: "bg-[#39D9FD]",
    },
    azure: {
      iconBg: "bg-[#0174C7]",
      iconColor: "text-white",
      accentBorder: "border-[#0174C7]/30",
      expandedBg: "bg-[#0174C7]/5",
      highlightDot: "bg-[#0174C7]",
    },
    gradient: {
      iconBg: "gh-gradient",
      iconColor: "text-white",
      accentBorder: "border-[#39D9FD]/40",
      expandedBg: "bg-gradient-to-r from-[#39D9FD]/5 to-[#0174C7]/5",
      highlightDot: "bg-gradient-to-r from-[#39D9FD] to-[#0174C7]",
    },
  }

  const styles = colorStyles[colorVariant]

  return (
    <Card
      className={cn(
        "p-5 border transition-all duration-300 cursor-pointer",
        "border-gray-200 hover:border-[#39D9FD]/50",
        isExpanded && styles.accentBorder,
        isExpanded && "shadow-md",
      )}
      onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
    >
      {/* Header Row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Icon */}
          <div className={cn("mb-3 inline-flex rounded-lg p-2", styles.iconBg)}>
            <Icon className={cn("h-4 w-4", styles.iconColor)} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-black mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Expand Indicator */}
        {hasExpandableContent && (
          <div className="flex-shrink-0 mt-1">
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-400 transition-transform duration-300",
                isExpanded && "rotate-180 text-[#0174C7]",
              )}
            />
          </div>
        )}
      </div>

      {/* Expandable Content */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("rounded-lg p-4", styles.expandedBg)}>
            {/* Details Grid */}
            {details.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2 mb-4">
                {details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{detail.label}</span>
                    <span className="text-sm text-black font-medium mt-1">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights List */}
            {highlights.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Key Capabilities</span>
                <ul className="space-y-2 mt-2">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0", styles.highlightDot)} />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
