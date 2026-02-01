import type { NavItem } from "@/types"

export const navigationConfig: NavItem[] = [
  {
    id: "platform",
    title: "Agent OS Platform",
    items: [
      {
        id: "overview",
        title: "Platform Overview",
        href: "/platform/platform-overview",
        description: "High-level overview of Growthub AGENT OS",
      },
      {
        id: "agent-builder",
        title: "Agent Builder",
        href: "/platform/agent-builder",
        description: "Create and configure custom agents",
        subItems: [
          {
            id: "inputs",
            title: "Inputs",
            href: "/platform/agent-builder/inputs",
          },
          {
            id: "input-node",
            title: "Input Node",
            href: "/platform/agent-builder/inputs/input-node",
          },
          {
            id: "files-node",
            title: "Files Node",
            href: "/platform/agent-builder/inputs/files-node",
          },
          {
            id: "trigger-node",
            title: "Trigger Node",
            href: "/platform/agent-builder/inputs/trigger-node",
          },
          {
            id: "url-input-node",
            title: "URL Input Node",
            href: "/platform/agent-builder/inputs/url-input-node",
          },
          {
            id: "audio-input-node",
            title: "Audio Input Node",
            href: "/platform/agent-builder/inputs/audio-input-node",
          },
          {
            id: "image-input-node",
            title: "Image Input Node",
            href: "/platform/agent-builder/inputs/image-input-node",
          },
        ],
      },
      {
        id: "content-studio",
        title: "Content Studio",
        href: "/platform/content-studio",
        description: "Multi-modal content creation with AI-powered generation",
        subItems: [
          {
            id: "video-generation",
            title: "Video Generation",
            href: "/platform/content-studio/video-generation",
          },
          {
            id: "image-generation",
            title: "Image Generation",
            href: "/platform/content-studio/image-generation",
          },
          {
            id: "scene-continuity",
            title: "Scene Continuity",
            href: "/platform/content-studio/scene-continuity",
          },
          {
            id: "brand-assets",
            title: "Brand Asset Integration",
            href: "/platform/content-studio/brand-assets",
          },
        ],
      },
      {
        id: "knowledge-system",
        title: "Knowledge System",
        href: "/platform/knowledge-system",
        description: "Manage and organize knowledge bases",
        subItems: [
          {
            id: "kb-overview",
            title: "Knowledge Bases Overview",
            href: "/platform/knowledge-system/overview",
          },
          {
            id: "kb-how-to",
            title: "How to Use Knowledge Bases",
            href: "/platform/knowledge-system/how-to-use",
          },
          {
            id: "kb-nodes",
            title: "Knowledge Base Nodes",
            href: "/platform/knowledge-system/kb-nodes",
          },
          {
            id: "kb-create",
            title: "Creating a Knowledge Base",
            href: "/platform/knowledge-system/creating-kb",
          },
          {
            id: "kb-features",
            title: "Specific KB Features",
            href: "/platform/knowledge-system/specific-features",
          },
        ],
      },
      {
        id: "brand-kit",
        title: "Brand Kit System",
        href: "/platform/brand-kit-system",
        description: "Maintain brand consistency",
      },
      {
        id: "export-platform",
        title: "Export Platform",
        href: "/platform/export-platform",
        description: "Deploy agents to external platforms",
        subItems: [
          {
            id: "export-form",
            title: "Form Interfaces",
            href: "/platform/export-platform/form",
          },
          {
            id: "export-chat",
            title: "Chat Assistant",
            href: "/platform/export-platform/chat-assistant",
          },
          {
            id: "export-landing",
            title: "Landing Page Chatbot",
            href: "/platform/export-platform/landing-page-chatbot",
          },
          {
            id: "export-cms-publisher",
            title: "CMS Publisher",
            href: "/platform/export-platform/cms-publisher",
            subItems: [
              {
                id: "cms-shopify",
                title: "Shopify Integration",
                href: "/platform/export-platform/cms-publisher/shopify-integration",
              },
              {
                id: "cms-preview",
                title: "Preview URLs",
                href: "/platform/export-platform/cms-publisher/preview-urls",
              },
              {
                id: "cms-domains",
                title: "Custom Domains",
                href: "/platform/export-platform/cms-publisher/custom-domains",
              },
            ],
          },
          {
            id: "export-batch",
            title: "Batch Generation",
            href: "/platform/export-platform/batch-generation",
          },
          {
            id: "export-custom-domains",
            title: "Custom Domains",
            href: "/platform/export-platform/custom-domains",
          },
        ],
      },
      {
        id: "agent-orchestration",
        title: "Agent Orchestration",
        href: "/platform/agent-orchestration",
        description: "Coordinate multi-agent loops with L1-L5 architecture",
        subItems: [
          {
            id: "layer-1",
            title: "L1: Input & Validation",
            href: "/platform/agent-orchestration/layer-1-input",
          },
          {
            id: "layer-2",
            title: "L2: Data Processing",
            href: "/platform/agent-orchestration/layer-2-processing",
          },
          {
            id: "layer-3",
            title: "L3: Orchestration & Heuristics",
            href: "/platform/agent-orchestration/layer-3-orchestration",
          },
          {
            id: "layer-4",
            title: "L4: Execution & Workflows",
            href: "/platform/agent-orchestration/layer-4-execution",
          },
          {
            id: "layer-5",
            title: "L5: Presentation & UI",
            href: "/platform/agent-orchestration/layer-5-presentation",
          },
        ],
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    items: [
      {
        id: "integrations-main",
        title: "Integrations",
        href: "/integrations",
        description: "Connect third-party tools and services",
        subItems: [
          {
            id: "slack",
            title: "Slack",
            href: "/integrations/slack",
          },
          {
            id: "asana",
            title: "Asana",
            href: "/integrations/asana",
          },
          {
            id: "hubspot",
            title: "HubSpot",
            href: "/integrations/hubspot",
          },
          {
            id: "gohighlevel",
            title: "GoHighLevel",
            href: "/integrations/gohighlevel",
          },
          {
            id: "shopify",
            title: "Shopify",
            href: "/integrations/shopify",
          },
          {
            id: "wordpress",
            title: "WordPress",
            href: "/integrations/wordpress",
          },
        ],
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    href: "/getting-started",
    description: "Quick start guide and setup",
  },
  {
    id: "api-reference",
    title: "API Reference",
    href: "/api-reference",
    description: "Complete API documentation",
  },
  {
    id: "support",
    title: "Support",
    href: "/support",
    description: "Help center and resources",
  },
]

export const pageSequence = [
  "/",
  "/getting-started",
  "/platform/platform-overview",
  "/platform/agent-builder",
  "/platform/agent-builder/inputs",
  "/platform/agent-builder/inputs/input-node",
  "/platform/agent-builder/inputs/files-node",
  "/platform/agent-builder/inputs/trigger-node",
  "/platform/agent-builder/inputs/url-input-node",
  "/platform/agent-builder/inputs/audio-input-node",
  "/platform/agent-builder/inputs/image-input-node",
  "/platform/content-studio",
  "/platform/content-studio/video-generation",
  "/platform/content-studio/image-generation",
  "/platform/content-studio/scene-continuity",
  "/platform/content-studio/brand-assets",
  "/platform/knowledge-system",
  "/platform/knowledge-system/overview",
  "/platform/knowledge-system/how-to-use",
  "/platform/knowledge-system/kb-nodes",
  "/platform/knowledge-system/creating-kb",
  "/platform/knowledge-system/specific-features",
  "/platform/brand-kit-system",
  "/platform/export-platform",
  "/platform/export-platform/form",
  "/platform/export-platform/chat-assistant",
  "/platform/export-platform/landing-page-chatbot",
  "/platform/export-platform/cms-publisher",
  "/platform/export-platform/cms-publisher/shopify-integration",
  "/platform/export-platform/cms-publisher/preview-urls",
  "/platform/export-platform/cms-publisher/custom-domains",
  "/platform/export-platform/batch-generation",
  "/platform/export-platform/custom-domains",
  "/platform/agent-orchestration",
  "/platform/agent-orchestration/layer-1-input",
  "/platform/agent-orchestration/layer-2-processing",
  "/platform/agent-orchestration/layer-3-orchestration",
  "/platform/agent-orchestration/layer-4-execution",
  "/platform/agent-orchestration/layer-5-presentation",
  "/integrations",
  "/integrations/slack",
  "/integrations/asana",
  "/integrations/hubspot",
  "/integrations/gohighlevel",
  "/integrations/shopify",
  "/integrations/wordpress",
  "/api-reference",
  "/support",
]

export const getPageIndex = (pathname: string): number => {
  return pageSequence.indexOf(pathname)
}

export const getPreviousPage = (pathname: string) => {
  const currentIndex = getPageIndex(pathname)
  if (currentIndex <= 0) return null
  const prevPath = pageSequence[currentIndex - 1]
  return {
    path: prevPath,
    title: getTitleFromPath(prevPath),
  }
}

export const getNextPage = (pathname: string) => {
  const currentIndex = getPageIndex(pathname)
  if (currentIndex >= pageSequence.length - 1) return null
  const nextPath = pageSequence[currentIndex + 1]
  return {
    path: nextPath,
    title: getTitleFromPath(nextPath),
  }
}

const getTitleFromPath = (path: string): string => {
  const segments = path.split("/").filter(Boolean)
  if (!segments.length) return "Home"

  const lastSegment = segments[segments.length - 1]
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
