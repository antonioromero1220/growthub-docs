"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  url: string
  icon?: React.ReactNode
}

interface ExpandableSidebarSectionProps {
  label: string
  icon?: React.ReactNode
  items: NavItem[]
  defaultOpen?: boolean
}

export function ExpandableSidebarSection({ label, icon, items, defaultOpen = false }: ExpandableSidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const pathname = usePathname()

  const hasActiveItem = items.some((item) => pathname === item.url)

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          hasActiveItem ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent",
        )}
      >
        {icon && <span className="size-4">{icon}</span>}
        <span className="flex-1 text-left">{label}</span>
        <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1 border-l border-border">
          {items.map((item) => {
            const isActive = pathname === item.url
            return (
              <Link
                key={item.url}
                href={item.url}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
