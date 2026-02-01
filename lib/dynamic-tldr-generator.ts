import { tldrFaqContent } from "./tldr-faq-config"

const pageContextMap: Record<string, { category: string; keywords: string[] }> = {
  "agent-builder": { category: "Agent Creation", keywords: ["agent", "builder", "LLM", "model", "skills"] },
  "content-studio": { category: "Content Generation", keywords: ["content", "generation", "batch", "brand kit"] },
  "knowledge-system": { category: "Knowledge Management", keywords: ["knowledge", "base", "summary", "audio"] },
  "export-platform": { category: "Deployment", keywords: ["export", "form", "chatbot", "lead capture", "CRM"] },
  "workflow-orchestration": {
    category: "Automation",
    keywords: ["workflow", "automation", "orchestration", "multi-step"],
  },
  "brand-kit-system": { category: "Branding", keywords: ["brand", "consistency", "guidelines", "voice"] },
}

export async function generateDynamicContent(
  slug: string,
  pathname: string,
): Promise<{ tldr: string; faqs: Array<{ question: string; answer: string; keywords?: string[] }> }> {
  // Try to get from config first
  const mainSlug = slug.split("-").slice(0, 2).join("-")
  if (tldrFaqContent[mainSlug]) {
    return tldrFaqContent[mainSlug]
  }

  // Generate dynamically based on page context
  const context = pageContextMap[mainSlug] || { category: "Growthub", keywords: ["growthub", "platform"] }

  const tldr = generateTLDR(mainSlug, context)
  const faqs = generateFAQs(mainSlug, context)

  return { tldr, faqs }
}

function generateTLDR(slug: string, context: { category: string; keywords: string[] }): string {
  const tldrTemplates: Record<string, string> = {
    "agent-builder":
      "No-code agent creation platform supporting 40+ LLM models, custom skills, and pre-built templates for marketing and operational agents.",
    "content-studio":
      "AI-powered content generation engine supporting batch workflows, multi-format output, and Brand Kit consistency across text, image, and video.",
    "knowledge-system":
      "Unified knowledge repository shared across teams and agents for collective intelligence, summaries, and audio generation.",
    "export-platform":
      "Deploy AI agents as forms, chatbots, landing pages with lead capture, CRM integrations, and multi-channel publishing.",
    "workflow-orchestration":
      "Visual workflow builder for complex multi-step automation, conditional logic, and tool integration across all Growthub features.",
    "brand-kit-system":
      "Centralized brand management system ensuring visual and tonal consistency across all generated content and exported agents.",
  }

  return (
    tldrTemplates[slug] ||
    `${context.category} is a core component of Growthub that enables ${context.keywords.join(", ")}.`
  )
}

function generateFAQs(
  slug: string,
  context: { category: string; keywords: string[] },
): Array<{ question: string; answer: string; keywords?: string[] }> {
  const faqTemplates: Record<string, Array<{ question: string; answer: string; keywords?: string[] }>> = {
    "agent-builder": [
      {
        question: `What is the Agent Builder?`,
        answer: `The Agent Builder is a no-code platform for creating autonomous agents. It supports 40+ LLM models and includes pre-built templates for rapid deployment.`,
        keywords: ["agent", "creation", "no-code"],
      },
      {
        question: `Can I customize my agent?`,
        answer: `Yes, fully customize instructions, AI models, skills, knowledge bases, and variables. The platform provides a foundation that adapts to your needs.`,
        keywords: ["customization", "configuration", "flexibility"],
      },
    ],
    "content-studio": [
      {
        question: `What content formats are supported?`,
        answer: `Content Studio generates text, images, and videos with Brand Kit consistency applied automatically. Use batch generation to create multiple assets on schedule.`,
        keywords: ["formats", "generation", "batch"],
      },
      {
        question: `How does Brand Kit apply?`,
        answer: `Your Brand Kit voice, tone, and visual guidelines automatically apply to all generated content, ensuring consistent messaging across channels.`,
        keywords: ["brand", "consistency", "guidelines"],
      },
    ],
    "knowledge-system": [
      {
        question: `What is the Knowledge System?`,
        answer: `A unified repository storing context across all agents and team members, enabling collective intelligence by making insights available system-wide.`,
        keywords: ["knowledge", "repository", "collective intelligence"],
      },
      {
        question: `Can I convert knowledge to audio?`,
        answer: `Yes, using ElevenLabs integration, convert any knowledge item to audio in 29+ languages with 50+ premium voices.`,
        keywords: ["audio", "generation", "synthesis"],
      },
    ],
  }

  return (
    faqTemplates[slug] || [
      {
        question: `What is ${context.category}?`,
        answer: `${context.category} is a powerful feature of Growthub that helps you work with ${context.keywords.slice(0, 3).join(", ")}.`,
        keywords: context.keywords,
      },
      {
        question: `How do I get started?`,
        answer: `Navigate to the ${context.category} section in your Growthub dashboard and follow the setup wizard to begin.`,
        keywords: context.keywords,
      },
    ]
  )
}
