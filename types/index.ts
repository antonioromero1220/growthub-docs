import type React from "react"
export type NavSubItem = {
  id: string
  title: string
  href: string
  subItems?: NavSubItem[]
}

export type NavItem = {
  id: string
  title: string
  href?: string
  icon?: string
  collapsible?: "icon"
  items?: NavItem[]
  subItems?: NavSubItem[]
  description?: string
}

export type DocumentationPage = {
  id: string
  title: string
  description: string
  breadcrumbs: string[]
  content: React.ReactNode
  sections: ContentSection[]
}

export type ContentSection = {
  id: string
  title: string
  level: "h2" | "h3" | "h4"
  content: string
}

export type NavigationState = {
  previousPage: {
    title: string
    href: string
  } | null
  nextPage: {
    title: string
    href: string
  } | null
}

export type FeedbackResponse = "helpful" | "neutral" | "unhelpful" | null
