"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Search,
  Package,
  Layout,
  Share2,
  Rocket,
  Layers,
  Zap,
  Book,
  Palette,
  Workflow,
  ChevronDown,
  FileInput,
  Plug,
} from "lucide-react"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { navigationConfig } from "@/lib/navigation-config"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  Layout,
  Share2,
  Rocket,
  Layers,
  Zap,
  Book,
  Palette,
  Workflow,
  FileInput,
  Plug,
}

export function AppSidebar() {
  const pathname = usePathname()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { open } = useSidebar()
  const prevOpenRef = useRef(open)
  const hasMountedRef = useRef(false)

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "agent-builder": false,
    "knowledge-system": false,
    "export-platform": false,
  })

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  useEffect(() => {
    // Skip the first render to prevent auto-focus on page load
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      // Clear any stale focusSearch flag on mount
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem("focusSearch")
      }
      prevOpenRef.current = open
      return
    }

    const justOpened = open && !prevOpenRef.current
    prevOpenRef.current = open

    // Only focus if sidebar just opened AND focusSearch flag was explicitly set
    if (justOpened && typeof window !== "undefined") {
      const shouldFocusSearch = window.sessionStorage.getItem("focusSearch") === "true"
      if (shouldFocusSearch) {
        window.sessionStorage.removeItem("focusSearch")
        const timer = setTimeout(() => {
          searchInputRef.current?.focus()
        }, 200)
        return () => clearTimeout(timer)
      }
    }
  }, [open])

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image src="/images/img-0014.png" alt="Growthub" fill className="object-contain" sizes="48px" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base gh-gradient-text">Growthub</span>
            <span className="text-xs text-muted-foreground">Agent OS™</span>
          </div>
        </Link>

        <div className="relative">
          <Label htmlFor="sidebar-search" className="sr-only">
            Search
          </Label>
          <Input
            id="sidebar-search"
            ref={searchInputRef}
            placeholder="Search docs..."
            tabIndex={-1}
            autoComplete="off"
            className="pl-8 h-9 bg-white border-gray-200 focus-visible:ring-primary/50"
          />
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Package className="size-4" />
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/getting-started"}>
                  <Link href="/getting-started">
                    <Rocket className="size-4" />
                    <span>Quick Start</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">Agent OS Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationConfig[0]?.items?.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0
                const isExpanded = expandedSections[item.id]

                return (
                  <div key={item.id}>
                    <SidebarMenuItem>
                      {hasSubItems ? (
                        <button
                          onClick={() => toggleSection(item.id)}
                          className="flex w-full items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
                        >
                          {item.id === "agent-builder" && <Zap className="size-4" />}
                          {item.id === "knowledge-system" && <Book className="size-4" />}
                          {item.id === "export-platform" && <Share2 className="size-4" />}
                          {!["agent-builder", "knowledge-system", "export-platform"].includes(item.id) && (
                            <Layers className="size-4" />
                          )}
                          <span className="flex-1 text-left">{item.title}</span>
                          <ChevronDown className={`size-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <SidebarMenuButton asChild isActive={pathname === item.href}>
                          <Link href={item.href || "#"}>
                            {item.id === "overview" && <Layers className="size-4" />}
                            {item.id === "content-studio" && <Layout className="size-4" />}
                            {item.id === "brand-kit" && <Palette className="size-4" />}
                            {item.id === "workflow" && <Workflow className="size-4" />}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>

                    {hasSubItems && isExpanded && (
                      <div className="ml-4 border-l border-sidebar-border space-y-1 py-1">
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuItem key={subItem.id} className="ml-0">
                            <SidebarMenuButton asChild isActive={pathname === subItem.href} className="text-xs pl-2">
                              <Link href={subItem.href}>
                                <span className="truncate">{subItem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">Integrations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/integrations"}>
                  <Link href="/integrations">
                    <Plug className="size-4" />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {navigationConfig[1]?.items?.slice(1).map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href || "#"}>
                      <span className="ml-4">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">Best Practices</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/api-reference"}>
                  <Link href="/api-reference">
                    <Share2 className="size-4" />
                    <span>API Reference</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/components"}>
                  <Link href="/components">
                    <Layout className="size-4" />
                    <span>Components</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/support"}>
                  <Link href="/support">
                    <Package className="size-4" />
                    <span>Support</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
