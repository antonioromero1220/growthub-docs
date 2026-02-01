"use client"

import type React from "react"

interface PageContentProps {
  description?: string
  children?: React.ReactNode
}

export function PageContent({ description, children }: PageContentProps) {
  return (
    <div className="space-y-6">
      {description && <p className="text-base leading-relaxed text-black">{description}</p>}
      {children}
    </div>
  )
}
