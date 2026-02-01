import type { Metadata } from "next"

// =============================================================================
// SITE CONSTANTS - Update these for your production deployment
// =============================================================================

export const SITE_CONFIG = {
  name: "Growthub Agent OS",
  shortName: "Growthub",
  description:
    "Comprehensive documentation for Growthub Agent OS—one product with six core features: Agent Builder, Content Studio, Export Platform, Knowledge System, Brand Kit System, and Workflow Orchestration.",
  url: "https://docs.growthub.ai",
  mainSiteUrl: "https://growthub.ai",
  logo: "https://docs.growthub.ai/apple-icon.png", // Use larger logo for schema
  favicon: "https://docs.growthub.ai/favicon-1.png",
  ogImage: "https://docs.growthub.ai/OpenGraph.png",
  twitterImage: "https://docs.growthub.ai/twitter-share.png",
  socialImage: "https://docs.growthub.ai/social-image-sharing.png",
  twitterHandle: "@growthubai",
  locale: "en_US",
  themeColor: "#1a6b9c",
} as const

// =============================================================================
// ORGANIZATION SCHEMA - For brand trust & entity recognition
// =============================================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.mainSiteUrl,
  logo: {
    "@type": "ImageObject",
    url: SITE_CONFIG.logo,
    width: 512,
    height: 512,
  },
  image: SITE_CONFIG.ogImage,
  description: SITE_CONFIG.description,
  sameAs: [
    "https://twitter.com/growthubai",
    "https://linkedin.com/company/growthub-ai",
    "https://github.com/growthub-ai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_CONFIG.url}/support`,
    availableLanguage: ["English"],
  },
}

// =============================================================================
// WEBSITE SCHEMA - For site-wide search visibility
// =============================================================================

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: `${SITE_CONFIG.name} Documentation`,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

// =============================================================================
// SOFTWARE APPLICATION SCHEMA - For product visibility
// =============================================================================

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_CONFIG.url}/#software`,
  name: SITE_CONFIG.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.mainSiteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Agent Builder (40+ LLM models)",
    "Content Studio (AI-powered generation)",
    "Export Platform (multi-channel deployment)",
    "Knowledge System (shared intelligence)",
    "Brand Kit System (consistency)",
    "Workflow Orchestration (L1-L5 architecture)",
  ],
}

// =============================================================================
// DEFAULT METADATA - Base metadata for all pages
// =============================================================================

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} Documentation`,
    template: `%s | ${SITE_CONFIG.shortName} Docs`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Growthub",
    "Agent OS",
    "AI agents",
    "B2B SaaS",
    "marketing automation",
    "content generation",
    "LLM",
    "no-code",
    "workflow automation",
    "brand management",
    "knowledge base",
  ],
  authors: [{ name: "Growthub", url: SITE_CONFIG.mainSiteUrl }],
  creator: "Growthub",
  publisher: "Growthub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.name} Documentation`,
    title: `${SITE_CONFIG.name} Documentation`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI-Powered B2B Growth Platform`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: `${SITE_CONFIG.name} Documentation`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
}

// =============================================================================
// PAGE METADATA GENERATOR - Creates page-specific metadata
// =============================================================================

export interface PageSEO {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}

export function generatePageMetadata(page: PageSEO): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}${page.path}`
  const ogImageUrl = page.ogImage || `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(page.title)}`

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      type: "article",
      locale: SITE_CONFIG.locale,
      url: canonicalUrl,
      siteName: `${SITE_CONFIG.name} Documentation`,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: page.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: page.title,
      description: page.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }
}

// =============================================================================
// PAGE SEO CONFIGURATIONS - Pre-defined SEO for all documentation pages
// =============================================================================

export const PAGE_SEO_CONFIG: Record<string, PageSEO> = {
  "/": {
    title: "Growthub Agent OS | AI-Powered B2B SaaS Documentation",
    description:
      "Complete documentation for Growthub Agent OS—one product with six core features: Agent Builder, Content Studio, Export Platform, Knowledge System, Brand Kit, and Workflow Orchestration.",
    path: "/",
    keywords: ["Growthub", "Agent OS", "AI agents", "B2B SaaS", "documentation", "AI platform"],
  },
  "/getting-started": {
    title: "Getting Started with Growthub Agent OS",
    description:
      "Quick start guide for Growthub Agent OS. Learn how to create your first AI agent, set up Brand Kits, configure Knowledge Bases, and deploy content in minutes.",
    path: "/getting-started",
    keywords: ["getting started", "quick start", "tutorial", "setup guide", "first agent"],
  },
  "/platform/platform-overview": {
    title: "Platform Overview | Growthub Agent OS Architecture",
    description:
      "Understand the Growthub Agent OS architecture. Six integrated products unified by Brand Kits, Knowledge Items, and Agent Skills creating a powerful growth flywheel.",
    path: "/platform/platform-overview",
    keywords: ["platform overview", "architecture", "flywheel", "integrated platform"],
  },
  "/platform/agent-builder": {
    title: "Agent Builder | Create Custom AI Agents",
    description:
      "Build custom marketing and operational AI agents with no code. Access 40+ LLM models, pre-built templates, custom skills, and seamless deployment via Growthub Agent Builder.",
    path: "/platform/agent-builder",
    keywords: ["agent builder", "AI agents", "no-code", "LLM models", "marketing automation"],
  },
  "/platform/agent-builder/inputs": {
    title: "Agent Builder Inputs | Configure Agent Data Sources",
    description:
      "Configure input nodes for your AI agents. Support for text, files, images, audio, URLs, and trigger-based inputs with validation and processing.",
    path: "/platform/agent-builder/inputs",
    keywords: ["agent inputs", "data sources", "input nodes", "configuration"],
  },
  "/platform/agent-builder/inputs/input-node": {
    title: "Input Node | Text Input Configuration",
    description:
      "Configure text input nodes for agent workflows. Set up user prompts, system instructions, and variable inputs with validation rules.",
    path: "/platform/agent-builder/inputs/input-node",
    keywords: ["input node", "text input", "user prompts", "agent configuration"],
  },
  "/platform/agent-builder/inputs/files-node": {
    title: "Files Node | Document Upload Processing",
    description:
      "Process uploaded files in agent workflows. Support for PDFs, documents, spreadsheets, and text files with automatic parsing and context injection.",
    path: "/platform/agent-builder/inputs/files-node",
    keywords: ["files node", "document upload", "PDF processing", "file input"],
  },
  "/platform/agent-builder/inputs/trigger-node": {
    title: "Trigger Node | Event-Driven Agent Activation",
    description:
      "Configure event-driven triggers for AI agents. Support for webhooks, cron schedules, API calls, and third-party integrations.",
    path: "/platform/agent-builder/inputs/trigger-node",
    keywords: ["trigger node", "webhooks", "cron", "event-driven", "automation"],
  },
  "/platform/agent-builder/inputs/url-input-node": {
    title: "URL Input Node | Web Content Processing",
    description:
      "Extract and process web content in agent workflows. Scrape URLs, parse HTML, and inject web data as context for AI processing.",
    path: "/platform/agent-builder/inputs/url-input-node",
    keywords: ["URL input", "web scraping", "content extraction", "HTML parsing"],
  },
  "/platform/agent-builder/inputs/audio-input-node": {
    title: "Audio Input Node | Voice and Audio Processing",
    description:
      "Process audio inputs in agent workflows. Support for voice recordings, audio files, and real-time speech-to-text transcription.",
    path: "/platform/agent-builder/inputs/audio-input-node",
    keywords: ["audio input", "voice processing", "speech-to-text", "transcription"],
  },
  "/platform/agent-builder/inputs/image-input-node": {
    title: "Image Input Node | Visual Content Processing",
    description:
      "Process image inputs in agent workflows. Support for image analysis, OCR, visual context extraction, and multi-modal AI processing.",
    path: "/platform/agent-builder/inputs/image-input-node",
    keywords: ["image input", "visual processing", "OCR", "image analysis"],
  },
  "/platform/content-studio": {
    title: "Content Studio | AI-Powered Content Generation",
    description:
      "Generate multi-modal content with AI. Create images, videos, and text with Brand Kit consistency, batch workflows, and RLHF training for brand alignment.",
    path: "/platform/content-studio",
    keywords: ["content studio", "AI content", "image generation", "video generation", "brand consistency"],
  },
  "/platform/content-studio/video-generation": {
    title: "Video Generation | AI Video Ads with Sora & VO 3.1",
    description:
      "Create AI-powered video ads using Sora 2 and VO 3.1 models. Multi-scene workflows, UGC content, product videos, and Brand Kit integration.",
    path: "/platform/content-studio/video-generation",
    keywords: ["video generation", "Sora 2", "VO 3.1", "AI video", "video ads", "UGC"],
  },
  "/platform/content-studio/image-generation": {
    title: "Image Generation | AI Images with Brand Assets",
    description:
      "Generate on-brand images with Nano Banana Pro. Batch generation, scheduled workflows, Brand Kit assets, and multi-format outputs for ads.",
    path: "/platform/content-studio/image-generation",
    keywords: ["image generation", "AI images", "brand assets", "batch generation"],
  },
  "/platform/content-studio/scene-continuity": {
    title: "Scene Continuity | Multi-Scene Video Consistency",
    description:
      "Maintain visual consistency across multi-scene videos. Clone winning creatives, reference frames, and AI-powered scene extensions.",
    path: "/platform/content-studio/scene-continuity",
    keywords: ["scene continuity", "video consistency", "creative cloning", "reference frames"],
  },
  "/platform/content-studio/brand-assets": {
    title: "Brand Asset Integration | Centralized Asset Management",
    description:
      "Upload and manage brand assets for AI content generation. Logos, product photos, competitor references, and automatic styling integration.",
    path: "/platform/content-studio/brand-assets",
    keywords: ["brand assets", "asset management", "logos", "product photos"],
  },
  "/platform/knowledge-system": {
    title: "Knowledge System | Shared Intelligence Platform",
    description:
      "Unified knowledge repository for teams and agents. Thread summaries, audio generation, multi-tenant sharing, and collective intelligence.",
    path: "/platform/knowledge-system",
    keywords: ["knowledge system", "knowledge base", "shared intelligence", "thread summaries"],
  },
  "/platform/knowledge-system/overview": {
    title: "Knowledge Bases Overview | Understanding KB Architecture",
    description:
      "Comprehensive overview of the Growthub Knowledge System. Learn about knowledge organization, sharing, and AI-powered insights.",
    path: "/platform/knowledge-system/overview",
    keywords: ["knowledge base overview", "KB architecture", "knowledge organization"],
  },
  "/platform/knowledge-system/how-to-use": {
    title: "How to Use Knowledge Bases | Best Practices Guide",
    description:
      "Best practices for using Knowledge Bases effectively. Learn to organize content, share across teams, and maximize AI context injection.",
    path: "/platform/knowledge-system/how-to-use",
    keywords: ["knowledge base guide", "best practices", "how to use", "KB tips"],
  },
  "/platform/knowledge-system/kb-nodes": {
    title: "Knowledge Base Nodes | Workflow Integration",
    description:
      "Integrate Knowledge Bases into agent workflows. Configure KB nodes for context injection, retrieval, and dynamic knowledge access.",
    path: "/platform/knowledge-system/kb-nodes",
    keywords: ["KB nodes", "workflow integration", "context injection", "knowledge retrieval"],
  },
  "/platform/knowledge-system/creating-kb": {
    title: "Creating a Knowledge Base | Step-by-Step Guide",
    description:
      "Create and configure Knowledge Bases in Growthub. Step-by-step guide for content upload, organization, and sharing settings.",
    path: "/platform/knowledge-system/creating-kb",
    keywords: ["create knowledge base", "KB setup", "content upload", "configuration"],
  },
  "/platform/knowledge-system/specific-features": {
    title: "Specific KB Features | Advanced Capabilities",
    description:
      "Advanced Knowledge Base features including thread summaries, audio generation, search, and integration capabilities.",
    path: "/platform/knowledge-system/specific-features",
    keywords: ["KB features", "thread summaries", "audio generation", "advanced features"],
  },
  "/platform/brand-kit-system": {
    title: "Brand Kit System | Centralized Brand Management",
    description:
      "Maintain brand consistency across all AI-generated content. Manage voice, tone, visuals, logos, and typography in a centralized system.",
    path: "/platform/brand-kit-system",
    keywords: ["brand kit", "brand management", "brand consistency", "voice and tone"],
  },
  "/platform/export-platform": {
    title: "Export Platform | Deploy AI Agents Anywhere",
    description:
      "Deploy AI agents as forms, chat assistants, landing pages, and CMS integrations. Multi-channel publishing with lead capture and CRM sync.",
    path: "/platform/export-platform",
    keywords: ["export platform", "deployment", "chat assistant", "form export", "multi-channel"],
  },
  "/platform/export-platform/form": {
    title: "Form Interfaces | Lead Capture Agent Export",
    description:
      "Export AI agents as form interfaces with lead capture. Configure fields, validation, CRM sync, and custom styling.",
    path: "/platform/export-platform/form",
    keywords: ["form interfaces", "lead capture", "form export", "CRM integration"],
  },
  "/platform/export-platform/chat-assistant": {
    title: "Chat Assistant | Conversational Agent Deployment",
    description:
      "Deploy AI agents as chat assistants with public URLs. Configure conversation flows, styling, and integration options.",
    path: "/platform/export-platform/chat-assistant",
    keywords: ["chat assistant", "conversational AI", "chatbot", "public URL"],
  },
  "/platform/export-platform/landing-page-chatbot": {
    title: "Landing Page Chatbot | Website Widget Deployment",
    description:
      "Embed AI chatbots on landing pages. Configure widget appearance, triggers, and lead qualification workflows.",
    path: "/platform/export-platform/landing-page-chatbot",
    keywords: ["landing page chatbot", "website widget", "embedded chat", "lead qualification"],
  },
  "/platform/export-platform/cms-publisher": {
    title: "CMS Publisher | Automated Content Publishing",
    description:
      "Publish AI-generated content to CMS platforms. Automatic sync with Shopify, WordPress, and custom domains.",
    path: "/platform/export-platform/cms-publisher",
    keywords: ["CMS publisher", "content publishing", "Shopify", "WordPress", "automation"],
  },
  "/platform/export-platform/cms-publisher/shopify-integration": {
    title: "Shopify Integration | E-commerce Content Automation",
    description:
      "Native Shopify integration for automated product descriptions, collection pages, and blog publishing with real-time sync.",
    path: "/platform/export-platform/cms-publisher/shopify-integration",
    keywords: ["Shopify integration", "e-commerce", "product descriptions", "automated publishing"],
  },
  "/platform/export-platform/cms-publisher/preview-urls": {
    title: "Preview URLs | Content Review Before Publishing",
    description:
      "Generate temporary preview URLs to review AI content before publishing. Shareable links for team collaboration.",
    path: "/platform/export-platform/cms-publisher/preview-urls",
    keywords: ["preview URLs", "content review", "staging", "collaboration"],
  },
  "/platform/export-platform/cms-publisher/custom-domains": {
    title: "Custom Domains for CMS | Enterprise White-Label",
    description:
      "Enterprise custom domain support for CMS publishing. DNS configuration, SSL certificates, and brand-aligned URLs.",
    path: "/platform/export-platform/cms-publisher/custom-domains",
    keywords: ["custom domains", "white-label", "DNS", "SSL", "enterprise"],
  },
  "/platform/export-platform/batch-generation": {
    title: "Batch Generation | Automated Content at Scale",
    description:
      "Generate content in batches with automated workflows. Schedule recurring generation, manage queues, and export results.",
    path: "/platform/export-platform/batch-generation",
    keywords: ["batch generation", "automation", "scheduled workflows", "bulk content"],
  },
  "/platform/export-platform/custom-domains": {
    title: "Custom Domains for Export | White-Label Deployment",
    description:
      "White-label your exported chat assistants and forms on custom domains. Automatic SSL, DNS configuration, and branding.",
    path: "/platform/export-platform/custom-domains",
    keywords: ["custom domains", "white-label", "export domains", "branding"],
  },
  "/platform/agent-orchestration": {
    title: "Agent Orchestration | Multi-Agent Coordination System",
    description:
      "Coordinate multi-agent workflows with L1-L5 modular architecture. Event-driven triggers, intelligent routing, and sk1 snapshots.",
    path: "/platform/agent-orchestration",
    keywords: ["agent orchestration", "multi-agent", "L1-L5", "workflow coordination"],
  },
  "/platform/agent-orchestration/layer-1-input": {
    title: "L1: Input & Validation | Data Entry Point",
    description:
      "Entry point for workflow data with automatic validation, type checking, and integrity verification for clean agent inputs.",
    path: "/platform/agent-orchestration/layer-1-input",
    keywords: ["L1", "input validation", "data integrity", "type checking"],
  },
  "/platform/agent-orchestration/layer-2-processing": {
    title: "L2: Data Processing | Transform & Enrich",
    description:
      "Transform and enrich validated inputs with parsing, formatting, aggregation, and context injection before orchestration.",
    path: "/platform/agent-orchestration/layer-2-processing",
    keywords: ["L2", "data processing", "transformation", "enrichment"],
  },
  "/platform/agent-orchestration/layer-3-orchestration": {
    title: "L3: Orchestration & Logic | Intelligent Routing",
    description:
      "Intelligent decision engine for routing data to agents, managing coordination, and applying conditional logic.",
    path: "/platform/agent-orchestration/layer-3-orchestration",
    keywords: ["L3", "orchestration", "intelligent routing", "conditional logic"],
  },
  "/platform/agent-orchestration/layer-4-execution": {
    title: "L4: Execution & Workflows | Task Management",
    description:
      "Execute orchestrated workflows with automated task management, parallel processing, and real-time progress tracking.",
    path: "/platform/agent-orchestration/layer-4-execution",
    keywords: ["L4", "execution", "workflow execution", "task management"],
  },
  "/platform/agent-orchestration/layer-5-presentation": {
    title: "L5: Output & Presentation | UI Generation",
    description:
      "Transform workflow results into user-facing formats with custom UI rendering and Brand Kit-aligned presentation.",
    path: "/platform/agent-orchestration/layer-5-presentation",
    keywords: ["L5", "presentation", "output formatting", "UI generation"],
  },
  "/platform/workflow-orchestration": {
    title: "Workflow Orchestration | Visual Automation Builder",
    description:
      "Visual workflow builder for complex multi-step automation, conditional logic, and tool integration across Growthub products.",
    path: "/platform/workflow-orchestration",
    keywords: ["workflow orchestration", "visual builder", "automation", "multi-step"],
  },
  "/integrations": {
    title: "Integrations | Connect Third-Party Tools",
    description:
      "Connect Growthub with your favorite tools. Integrations with Slack, Asana, HubSpot, GoHighLevel, Shopify, WordPress, and more.",
    path: "/integrations",
    keywords: ["integrations", "third-party", "connectors", "API integrations"],
  },
  "/integrations/slack": {
    title: "Slack Integration | Message-Triggered Automation",
    description:
      "Connect Slack to trigger agents from messages, mentions, and reactions. Automatic replies and webhook-driven automation.",
    path: "/integrations/slack",
    keywords: ["Slack integration", "Slack bot", "message triggers", "automation"],
  },
  "/integrations/asana": {
    title: "Asana Integration | Project Management Sync",
    description:
      "Integrate Asana for project management workflows. Sync tasks, automate updates, and trigger agents from Asana events.",
    path: "/integrations/asana",
    keywords: ["Asana integration", "project management", "task sync", "automation"],
  },
  "/integrations/hubspot": {
    title: "HubSpot Integration | CRM Automation",
    description:
      "Connect HubSpot for CRM automation. Sync contacts, trigger agents from deals, and automate marketing workflows.",
    path: "/integrations/hubspot",
    keywords: ["HubSpot integration", "CRM", "marketing automation", "contact sync"],
  },
  "/integrations/gohighlevel": {
    title: "GoHighLevel Integration | Marketing Automation",
    description:
      "Integrate GoHighLevel for marketing automation. Sync leads, trigger workflows, and automate follow-ups.",
    path: "/integrations/gohighlevel",
    keywords: ["GoHighLevel integration", "GHL", "marketing automation", "lead sync"],
  },
  "/integrations/shopify": {
    title: "Shopify Integration | E-commerce Automation",
    description:
      "Native Shopify integration for product content automation. Generate descriptions, sync inventory, and manage SEO.",
    path: "/integrations/shopify",
    keywords: ["Shopify integration", "e-commerce", "product automation", "inventory sync"],
  },
  "/integrations/wordpress": {
    title: "WordPress Integration | Content Publishing",
    description:
      "Publish AI-generated content to WordPress. Automatic post creation, category management, and SEO optimization.",
    path: "/integrations/wordpress",
    keywords: ["WordPress integration", "content publishing", "blog automation", "CMS"],
  },
  "/api-reference": {
    title: "API Reference | Growthub Developer Documentation",
    description:
      "Complete API documentation for Growthub Agent OS. REST endpoints, authentication, webhooks, and code examples.",
    path: "/api-reference",
    keywords: ["API reference", "developer docs", "REST API", "webhooks", "authentication"],
  },
  "/support": {
    title: "Support | Help Center & Resources",
    description:
      "Get help with Growthub Agent OS. Contact support, browse FAQs, and access troubleshooting resources.",
    path: "/support",
    keywords: ["support", "help center", "FAQ", "troubleshooting", "contact"],
  },
  "/components": {
    title: "Components | UI Component Library",
    description:
      "Explore the Growthub component library. Pre-built UI components for building agent interfaces and dashboards.",
    path: "/components",
    keywords: ["components", "UI library", "design system", "interface components"],
  },
}

// =============================================================================
// HELPER: Get SEO config for a path
// =============================================================================

export function getPageSEO(path: string): PageSEO {
  return (
    PAGE_SEO_CONFIG[path] || {
      title: "Documentation",
      description: SITE_CONFIG.description,
      path,
    }
  )
}
