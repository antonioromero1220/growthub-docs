export interface TLDRFAQPage {
  title: string
  tldr: string
  faqs: { question: string; answer: string; keywords?: string[] }[]
}

export const tldrFaqContent: Record<string, TLDRFAQPage> = {
  "knowledge-system": {
    title: "Knowledge System",
    tldr: "Unified knowledge repository shared across teams and agents for collective intelligence, summaries, and audio generation.",
    faqs: [
      {
        question: "What is the Knowledge System?",
        answer:
          "The Knowledge System is a unified repository that stores and shares context across all agents and team members. It enables collective intelligence by making insights and learnings available system-wide.",
        keywords: ["knowledge base", "shared context", "collective intelligence"],
      },
      {
        question: "How does thread summarization work?",
        answer:
          "Thread Summaries automatically extract key insights, action items, and important details from long conversations or complex data. These summaries are shareable and exportable to multiple formats.",
        keywords: ["summarization", "thread analysis", "insights"],
      },
      {
        question: "Can I convert knowledge to audio?",
        answer:
          "Yes, using ElevenLabs integration, you can convert any knowledge item or summary to audio in 29+ languages with 50+ premium voices.",
        keywords: ["audio generation", "voice synthesis", "ElevenLabs"],
      },
    ],
  },
  "export-platform": {
    title: "Export Platform",
    tldr: "Deploy AI agents as forms, chatbots, landing pages with lead capture, CRM integrations, and multi-channel publishing.",
    faqs: [
      {
        question: "What export formats are available?",
        answer:
          "Deploy your agents as Forms with lead capture, Chat Assistants, Landing Page Chatbots, CMS Publisher nodes for Shopify/WordPress, or batch generation workflows.",
        keywords: ["export options", "deployment", "multi-channel"],
      },
      {
        question: "How does CRM integration work?",
        answer:
          "Form exports can automatically sync captured leads to HubSpot, GoHighLevel, and other CRM platforms with customizable field mapping.",
        keywords: ["CRM", "lead capture", "integrations"],
      },
    ],
  },
  "agent-builder": {
    title: "Agent Builder",
    tldr: "No-code agent creation platform supporting 40+ LLM models, custom skills, and pre-built templates for marketing and operational agents.",
    faqs: [
      {
        question: "What is the Agent Builder?",
        answer:
          "The Agent Builder is a no-code platform for creating autonomous agents that handle marketing and operational tasks. It supports 40+ LLM models and includes pre-built templates for rapid deployment.",
        keywords: ["agent creation", "no-code", "LLM models"],
      },
      {
        question: "Can I use multiple LLM models in one agent?",
        answer:
          "Yes, Agent Builder supports dynamic model selection. You can configure agents to use different models for different tasks or let users choose models at runtime.",
        keywords: ["multi-model", "LLM switching", "flexibility"],
      },
      {
        question: "What are Agent Skills?",
        answer:
          "Agent Skills are custom tools and functions that extend agent capabilities. Build reusable skills once and apply them across multiple agents.",
        keywords: ["agent skills", "custom tools", "reusability"],
      },
    ],
  },
  "content-studio": {
    title: "Content Studio",
    tldr: "AI-powered content generation engine supporting batch workflows, multi-format output, and Brand Kit consistency across text, image, and video.",
    faqs: [
      {
        question: "What content formats does Content Studio support?",
        answer:
          "Content Studio generates text, images, and videos with Brand Kit consistency. Use batch generation to create multiple assets on schedule.",
        keywords: ["content generation", "multi-format", "batch processing"],
      },
      {
        question: "How does Brand Kit apply to generated content?",
        answer:
          "Your Brand Kit voice, tone, and visual guidelines automatically apply to all generated content, ensuring consistent messaging across all channels.",
        keywords: ["brand consistency", "voice and tone", "visual guidelines"],
      },
    ],
  },
  "workflow-orchestration": {
    title: "Workflow Orchestration",
    tldr: "Visual workflow builder for complex multi-step automation, conditional logic, and tool integration across all Growthub products.",
    faqs: [
      {
        question: "What is Workflow Orchestration?",
        answer:
          "Workflow Orchestration lets you build visual workflows that automate complex multi-step processes. Connect agents, tools, and services with conditional logic.",
        keywords: ["workflow automation", "visual builder", "orchestration"],
      },
      {
        question: "Can workflows call other agents?",
        answer:
          "Yes, workflows can trigger agents as steps, pass data between them, and use the results in subsequent steps for complex automation chains.",
        keywords: ["agent integration", "workflow chaining", "automation"],
      },
    ],
  },
  "agent-orchestration": {
    title: "Agent Orchestration",
    tldr: "L1-L5 modular architecture for coordinating multi-agent workflows with event-driven triggers, intelligent routing, and continuous learning through sk1 snapshots.",
    faqs: [
      {
        question: "What is Agent Orchestration?",
        answer:
          "Agent Orchestration is the intelligent coordination system that manages multi-agent workflows through a 5-layer modular architecture (L1-L5). Each layer handles specific responsibilities from input validation to final presentation.",
        keywords: ["agent orchestration", "multi-agent", "L1-L5 architecture"],
      },
      {
        question: "What are the L1-L5 layers?",
        answer:
          "L1 handles Input & Validation, L2 manages Data Processing, L3 controls Orchestration & Heuristics, L4 executes Workflows, and L5 manages Presentation & UI output.",
        keywords: ["L1-L5", "modular architecture", "layers"],
      },
      {
        question: "What is sk1 freeze?",
        answer:
          "Every workflow execution creates an immutable snapshot (sk1 freeze) that captures the complete state and decision tree. This enables continuous improvement through reinforcement learning from human feedback built into every turn.",
        keywords: ["sk1 freeze", "snapshots", "RLHF", "continuous learning"],
      },
      {
        question: "How do event-driven triggers work?",
        answer:
          "Orchestrate workflows reactively using cron jobs for scheduled execution, API triggers for external system integration, or webhooks for real-time event response.",
        keywords: ["event-driven", "triggers", "webhooks", "cron"],
      },
    ],
  },
  "brand-kit-system": {
    title: "Brand Kit System",
    tldr: "Centralized brand management system ensuring visual and tonal consistency across all generated content and exported agents.",
    faqs: [
      {
        question: "What can I customize in Brand Kit?",
        answer:
          "Customize your brand voice, tone guidelines, visual assets, color palettes, logos, and typography. These settings apply automatically to all generated content.",
        keywords: ["brand customization", "consistency", "branding"],
      },
      {
        question: "How does Brand Kit ensure consistency?",
        answer:
          "When you create content or export agents, Brand Kit guidelines are automatically applied. All LLM models use your voice settings, and visual content matches your brand assets.",
        keywords: ["consistency", "automation", "brand guidelines"],
      },
    ],
  },
  "cms-publisher-shopify-integration": {
    title: "Shopify Integration",
    tldr: "Native Shopify integration for automated product descriptions, collection pages, and blog content publishing with real-time synchronization.",
    faqs: [
      {
        question: "How does Shopify integration work?",
        answer:
          "Connect your Shopify store via API credentials. The CMS Publisher can automatically create and update product descriptions, blog posts, collection pages, and metafields with AI-generated content.",
        keywords: ["Shopify", "e-commerce", "product descriptions", "API integration"],
      },
      {
        question: "Can I bulk publish products to Shopify?",
        answer:
          "Yes, use batch generation workflows to create and publish multiple product descriptions simultaneously. Set scheduling rules for automatic publishing.",
        keywords: ["bulk publishing", "batch generation", "automation"],
      },
      {
        question: "Does it support Shopify metafields?",
        answer:
          "Yes, automatically populate SEO titles, meta descriptions, alt tags, and custom metafields for better search visibility and organization.",
        keywords: ["metafields", "SEO", "metadata", "Shopify"],
      },
    ],
  },
  "cms-publisher-preview-urls": {
    title: "Preview URLs",
    tldr: "Generate temporary preview URLs to review AI-generated content before publishing to production, with shareable links for team collaboration.",
    faqs: [
      {
        question: "What are Preview URLs?",
        answer:
          "Preview URLs are temporary, shareable links that let you review AI-generated content in a live environment before publishing to your production site. Perfect for team reviews and client approvals.",
        keywords: ["preview", "staging", "review", "collaboration"],
      },
      {
        question: "How long do preview URLs last?",
        answer:
          "Preview URLs remain active for 7 days by default, or until you publish the content to production. You can extend the expiration or delete previews manually.",
        keywords: ["expiration", "temporary links", "preview duration"],
      },
      {
        question: "Can I share preview URLs with clients?",
        answer:
          "Yes, preview URLs are shareable with anyone. Set password protection for sensitive content or limit access to specific email addresses.",
        keywords: ["sharing", "access control", "collaboration"],
      },
    ],
  },
  "cms-publisher-custom-domains": {
    title: "Custom Domains",
    tldr: "Enterprise custom domain support with DNS configuration, SSL certificates, and environment-specific deployment for brand-aligned content publishing.",
    faqs: [
      {
        question: "How do I add a custom domain?",
        answer:
          "Navigate to Settings > Domains, click Add Domain, and enter your domain name (e.g., growthub.co). Configure CNAME DNS records with your domain provider pointing to the provided value. DNS validation typically takes up to 24 hours.",
        keywords: ["custom domain", "DNS", "CNAME", "domain setup"],
      },
      {
        question: "What DNS records do I need to configure?",
        answer:
          "Add a CNAME record with name 'www' pointing to the provided Growthub domain (e.g., growthub.ai). DNS changes propagate within 24 hours. The system validates your configuration automatically.",
        keywords: ["DNS records", "CNAME", "domain configuration"],
      },
      {
        question: "Can I use custom domains for different environments?",
        answer:
          "Yes, connect domains to specific environments (Production, Staging, Development). Each environment can have its own custom domain for testing and deployment workflows.",
        keywords: ["environments", "staging", "production", "deployment"],
      },
      {
        question: "Is SSL/HTTPS supported?",
        answer:
          "Yes, SSL certificates are automatically provisioned and renewed for all custom domains. Your content is always served over HTTPS for security.",
        keywords: ["SSL", "HTTPS", "security", "certificates"],
      },
      {
        question: "What if DNS validation fails?",
        answer:
          "Check that your CNAME record points to the exact value provided. Wait up to 24 hours for propagation. Use the DNS Validation tool to verify your configuration and see detailed error messages.",
        keywords: ["troubleshooting", "DNS validation", "errors"],
      },
    ],
  },
  "layer-1-input": {
    title: "L1: Input & Validation",
    tldr: "Entry point for all workflow data with automatic validation, type checking, and integrity verification to ensure clean inputs for agent processing.",
    faqs: [
      {
        question: "What happens at the Input Layer?",
        answer:
          "The Input Layer validates all data entering your workflows. It checks data types, required fields, format compliance, and applies business rules before passing data to processing stages.",
        keywords: ["input validation", "data integrity", "type checking"],
      },
      {
        question: "Can I define custom validation rules?",
        answer:
          "Yes, use the Schema Builder to define custom validation rules, required fields, data formats, and business logic constraints for your workflow inputs.",
        keywords: ["custom validation", "schema", "business rules"],
      },
      {
        question: "What types of inputs are supported?",
        answer:
          "Support for text, JSON, files, images, audio, URLs, API payloads, webhook data, and form submissions. All inputs are validated against your defined schema.",
        keywords: ["input types", "data formats", "multi-modal inputs"],
      },
    ],
  },
  "layer-2-processing": {
    title: "L2: Data Processing",
    tldr: "Transform and enrich validated inputs with data parsing, formatting, aggregation, and context injection before agent orchestration.",
    faqs: [
      {
        question: "What is the Data Processing Layer?",
        answer:
          "The Processing Layer transforms raw validated inputs into structured data optimized for agent consumption. It handles parsing, formatting, enrichment, and aggregation.",
        keywords: ["data transformation", "parsing", "enrichment"],
      },
      {
        question: "Can I inject Knowledge Base context?",
        answer:
          "Yes, the Processing Layer can automatically inject relevant Knowledge Items, Brand Kit guidelines, and historical context to enrich agent inputs.",
        keywords: ["context injection", "knowledge retrieval", "enrichment"],
      },
      {
        question: "How does batch processing work?",
        answer:
          "Group multiple inputs for batch processing. The layer aggregates data, applies transformations in parallel, and prepares optimized payloads for downstream agents.",
        keywords: ["batch processing", "aggregation", "parallel processing"],
      },
    ],
  },
  "layer-3-orchestration": {
    title: "L3: Orchestration & Logic",
    tldr: "Intelligent decision engine that routes data to appropriate agents, manages multi-agent coordination, and applies conditional logic based on heuristics.",
    faqs: [
      {
        question: "What does the Orchestration Layer do?",
        answer:
          "The Orchestration Layer acts as the intelligent brain of your workflows. It decides which agents to activate, how to route data between them, and applies conditional logic based on real-time signals.",
        keywords: ["orchestration", "routing", "conditional logic"],
      },
      {
        question: "How does multi-agent coordination work?",
        answer:
          "Coordinate multiple agents in parallel or sequence. The Orchestration Layer manages dependencies, passes data between agents, and handles error recovery automatically.",
        keywords: ["multi-agent", "coordination", "dependencies"],
      },
      {
        question: "Can workflows make intelligent decisions?",
        answer:
          "Yes, use conditional branching, dynamic routing, and heuristic rules to create adaptive workflows that respond to data patterns and business logic.",
        keywords: ["intelligent routing", "conditional branching", "adaptive workflows"],
      },
    ],
  },
  "layer-4-execution": {
    title: "L4: Execution & Workflows",
    tldr: "Execute orchestrated workflows with automated task management, parallel processing, error handling, and real-time progress tracking.",
    faqs: [
      {
        question: "What happens in the Execution Layer?",
        answer:
          "The Execution Layer runs your workflows, manages agent tasks, handles parallel processing, monitors progress, and implements retry logic and error recovery strategies.",
        keywords: ["workflow execution", "task management", "error handling"],
      },
      {
        question: "Can workflows run in parallel?",
        answer:
          "Yes, execute multiple workflow branches simultaneously for faster processing. The Execution Layer manages concurrency, resource allocation, and synchronization.",
        keywords: ["parallel execution", "concurrency", "performance"],
      },
      {
        question: "How does error recovery work?",
        answer:
          "Automatic retry logic, fallback strategies, and graceful degradation. Failed steps can retry with exponential backoff or route to alternative agents.",
        keywords: ["error recovery", "retry logic", "resilience"],
      },
      {
        question: "Can I monitor workflow progress?",
        answer:
          "Yes, real-time progress tracking shows each workflow step, execution time, success rates, and detailed logs for debugging and optimization.",
        keywords: ["monitoring", "progress tracking", "analytics"],
      },
    ],
  },
  "layer-5-presentation": {
    title: "L5: Output & Presentation",
    tldr: "Transform workflow results into user-facing formats with custom UI rendering, multi-channel export, and Brand Kit-aligned presentation.",
    faqs: [
      {
        question: "What is the Presentation Layer?",
        answer:
          "The Presentation Layer transforms raw workflow outputs into polished, user-facing content. It applies Brand Kit styling, formats data for different channels, and generates custom UI components.",
        keywords: ["presentation", "output formatting", "UI generation"],
      },
      {
        question: "What output formats are supported?",
        answer:
          "Export to JSON, HTML, Markdown, PDF, CSV, or custom formats. Deploy as web pages, API responses, email templates, or integrate with CMS platforms.",
        keywords: ["output formats", "export options", "multi-channel"],
      },
      {
        question: "How does Brand Kit apply to outputs?",
        answer:
          "All outputs automatically inherit your Brand Kit styling—colors, fonts, logos, voice, and tone—ensuring consistent brand experience across all channels.",
        keywords: ["brand consistency", "styling", "brand kit"],
      },
      {
        question: "Can I create custom UI components?",
        answer:
          "Yes, build custom UI templates that render workflow data dynamically. Perfect for dashboards, reports, client-facing portals, and branded experiences.",
        keywords: ["custom UI", "templates", "dynamic rendering"],
      },
    ],
  },
  "video-generation": {
    title: "Video Generation",
    tldr: "AI-powered video ad creation with Sora 2 and VO 3.1, supporting scene continuity, multi-clip workflows, and Brand Kit consistency for UGC and product videos.",
    faqs: [
      {
        question: "Which AI models are supported for video generation?",
        answer:
          "Growthub supports Sora 2, Sora 2 Pro, and VO 3.1 (including VO 3.1 Fast) for video generation. Each model offers different capabilities: Sora excels at product videos and scenery, while VO 3.1 handles actor-based UGC content with reference images.",
        keywords: ["Sora 2", "VO 3.1", "AI video models", "video generation"],
      },
      {
        question: "How do I create multi-scene video ads?",
        answer:
          "Use the workflow canvas to chain multiple video generation nodes together. Enable 'Extend Existing Video' and bind the output from the first node to the second. This creates scene continuity where the AI models merge clips seamlessly into 15-second+ videos.",
        keywords: ["multi-scene", "scene continuity", "workflow canvas", "video stitching"],
      },
      {
        question: "Can I use my own product images as references?",
        answer:
          "Yes, upload product photos and competitor ads to your Brand Kit under Brand Assets. Select these reference images in the video generation node to ensure the AI generates videos featuring your specific products with accurate branding.",
        keywords: ["reference images", "brand assets", "product photos", "custom content"],
      },
      {
        question: "What are the limitations for Sora vs VO 3.1?",
        answer:
          "Sora 2/Pro cannot use reference images with human faces due to content moderation policies, but excels at product-focused videos and is more cost-effective. VO 3.1 supports actor reference images and is ideal for UGC testimonials and human-centric content.",
        keywords: ["model limitations", "Sora restrictions", "VO 3.1 capabilities", "content moderation"],
      },
      {
        question: "How long can generated videos be?",
        answer:
          "Default video length is 8 seconds for VO 3.1, while Sora supports longer durations. Chain multiple nodes together to create extended videos up to 15+ seconds. Configure loop sequences to generate multiple variations in batch.",
        keywords: ["video length", "duration", "batch generation", "video ads"],
      },
    ],
  },
  "image-generation": {
    title: "Image Generation",
    tldr: "Generate on-brand images with Nano Banana Pro using Brand Kit assets, supporting batch generation, scheduled workflows, and multi-format outputs for ads and creative briefs.",
    faqs: [
      {
        question: "How do I generate images with my brand assets?",
        answer:
          "Select your Brand Kit in the image generation node or sandbox. All uploaded logos, product photos, and visual assets are available as reference images. The AI automatically applies your brand colors, typography, and style guidelines to generated images.",
        keywords: ["brand assets", "image generation", "brand consistency", "Nano Banana Pro"],
      },
      {
        question: "What are the three ways to generate images?",
        answer:
          "1) Sandbox: Fastest method with drag-and-drop reference images for one-off generations. 2) Agent Templates: Use Quick Image Generation agent for batch workflows with scheduling. 3) Workflow Canvas: Full automation with triggers, conditional logic, and multi-step processes.",
        keywords: ["sandbox", "agent templates", "workflow canvas", "image generation methods"],
      },
      {
        question: "Can I generate images in batches?",
        answer:
          "Yes, configure loop settings in the workflow canvas or agent tools to generate 1-10 images per execution. Set up recurring triggers (daily, weekly, monthly) to automatically generate fresh creative variations on schedule.",
        keywords: ["batch generation", "scheduled workflows", "automation", "recurring triggers"],
      },
      {
        question: "How do I use images for creative briefs?",
        answer:
          "Generate storyboard frames, product mockups, and scene references by providing prompts with visual direction. Upload competitor ads or viral content as references, and the AI creates net-new variations aligned with your Brand Kit for video editor guidance.",
        keywords: ["creative briefs", "storyboards", "scene references", "visual direction"],
      },
      {
        question: "What image models are available?",
        answer:
          "Nano Banana Pro is the primary model, optimized for fast, high-quality image generation with brand asset integration. Select models in the node configuration based on your quality, speed, and cost requirements.",
        keywords: ["Nano Banana Pro", "image models", "AI image generation"],
      },
    ],
  },
  "scene-continuity": {
    title: "Scene Continuity",
    tldr: "Clone winning ad creatives and maintain visual consistency across multi-scene videos using reference frames, workflow binding, and AI-powered scene extensions.",
    faqs: [
      {
        question: "What is scene continuity in video generation?",
        answer:
          "Scene continuity allows you to extend existing video clips or replicate winning creative styles by using reference frames. The AI analyzes the visual style, actors, settings, and composition to generate new scenes that maintain consistent look and feel.",
        keywords: ["scene continuity", "visual consistency", "reference frames", "video extension"],
      },
      {
        question: "How do I clone a winning ad creative?",
        answer:
          "Screenshot the key frame from your winning ad and upload it to Brand Kit as a product photo. Use an AI copywriting agent to analyze the frame and generate a detailed prompt matching the scene. Reference this frame in your video generation node to recreate similar hooks and styles.",
        keywords: ["clone creatives", "winning ads", "reference frames", "creative replication"],
      },
      {
        question: "Can I use performance data to guide content creation?",
        answer:
          "Yes, identify winning creatives from Meta Ads or other platforms through performance reports. Extract hooks, formats, and visual styles that drive results, then use reference frames and AI prompts to generate net-new variations based on proven concepts.",
        keywords: ["performance data", "winning creatives", "data-driven content", "ad optimization"],
      },
      {
        question: "How does workflow binding enable scene continuity?",
        answer:
          "In the workflow canvas, connect video generation nodes and enable 'Extend Existing Video'. Bind the output URL from the first node to the second node's input. The AI model uses the ending frame of the first clip as context to generate a seamless continuation.",
        keywords: ["workflow binding", "video extension", "multi-scene", "node chaining"],
      },
      {
        question: "What use cases benefit from scene continuity?",
        answer:
          "Interview-style testimonials, product demonstrations with multiple angles, storyline narratives, before/after sequences, and UGC actor cloning. Any scenario requiring consistent visual branding across multiple video segments.",
        keywords: ["use cases", "testimonials", "product demos", "UGC content"],
      },
    ],
  },
  "brand-assets": {
    title: "Brand Asset Integration",
    tldr: "Upload and manage logos, product photos, and competitor ads in Brand Kit for automatic integration into AI-generated images and videos with consistent styling.",
    faqs: [
      {
        question: "What types of brand assets can I upload?",
        answer:
          "Upload logos (PNG/SVG), product photos, competitor ad references, style guides, color palettes, typography samples, and winning creative examples. All assets are available system-wide for image and video generation.",
        keywords: ["brand assets", "logos", "product photos", "asset types"],
      },
      {
        question: "How do brand assets apply to generated content?",
        answer:
          "When you select a Brand Kit in image/video generation nodes, all uploaded assets become available as reference images. The AI automatically incorporates your logos, matches product visuals, and applies color schemes and typography from your style guide.",
        keywords: ["asset integration", "reference images", "brand consistency", "automatic styling"],
      },
      {
        question: "Can I use competitor ads as inspiration?",
        answer:
          "Yes, upload competitor ads or viral content to Brand Kit as reference images. The AI analyzes composition, hooks, visual style, and messaging to generate similar concepts while applying your unique Brand Kit styling and avoiding direct copying.",
        keywords: ["competitor analysis", "viral content", "creative inspiration", "reference ads"],
      },
      {
        question: "How does Brand Kit ensure consistency?",
        answer:
          "Brand Kit centralizes all visual and tonal guidelines. Whether generating in the sandbox, agent workflows, or batch automation, selecting a Brand Kit ensures colors, fonts, logos, voice, and product visuals remain consistent across all outputs.",
        keywords: ["brand consistency", "centralized management", "style guidelines", "multi-channel"],
      },
      {
        question: "Do I need to set up Brand Kit for every generation?",
        answer:
          "No, once configured, you simply select your Brand Kit from the dropdown in any generation node. All assets and guidelines are pre-loaded. For quick tests in the sandbox, drag-and-drop individual reference images without selecting a full Brand Kit.",
        keywords: ["ease of use", "quick generation", "Brand Kit selection", "workflow efficiency"],
      },
    ],
  },
  "export-custom-domains": {
    title: "Custom Domains for Export",
    tldr: "White-label your exported chat assistants and form interfaces on your own custom domain with automatic SSL, DNS configuration, and brand-aligned URLs.",
    faqs: [
      {
        question: "What can I do with custom domains for exports?",
        answer:
          "Add your own domain (e.g., chat.yourbrand.com) to serve exported chat assistants and form interfaces. Visitors see your domain in the browser, not the Growthub platform host, creating a fully white-labeled experience.",
        keywords: ["custom domain", "white-label", "chat export", "form export"],
      },
      {
        question: "How do I set up a custom domain?",
        answer:
          "Navigate to Settings > Domains, add your domain, and configure DNS records (A record and CNAME) with your domain provider. Once DNS validates, bind the domain to your exported agent. Both chat and form URLs will work on your custom domain.",
        keywords: ["domain setup", "DNS configuration", "A record", "CNAME"],
      },
      {
        question: "Do chat and form exports both work on the same domain?",
        answer:
          "Yes, when you bind a domain to an agent, both the chat share link and the form share link automatically work on your custom domain. For example: yourdomain.com/share/abc123 for chat and yourdomain.com/share/form/def456 for forms.",
        keywords: ["chat URLs", "form URLs", "share links", "dual support"],
      },
      {
        question: "Is SSL/HTTPS automatic?",
        answer:
          "Yes, SSL certificates are automatically provisioned and renewed for all custom domains. Your visitors always see HTTPS, ensuring trust and security.",
        keywords: ["SSL", "HTTPS", "security", "automatic certificates"],
      },
      {
        question: "Can I remove platform branding?",
        answer:
          "Yes, custom domains enable full white-labeling. Your brand, your domain, your trust. Optionally hide 'Powered by Growthub' footers for a completely native experience.",
        keywords: ["white-label", "branding", "remove powered by", "native experience"],
      },
    ],
  },
  "integrations-slack": {
    title: "Slack Integration",
    tldr: "Connect Slack to trigger agents from messages, app mentions, and reactions with automatic replies, thread management, and webhook-driven automation.",
    faqs: [
      {
        question: "How does Slack integration work?",
        answer:
          "Install the Growthub Slack app to your workspace. Configure webhook triggers in Agent Builder to respond to Slack messages, app mentions, or reactions. Agents can reply in threads, post to channels, or trigger workflows based on Slack events.",
        keywords: ["Slack", "webhook triggers", "app mentions", "messages"],
      },
      {
        question: "What Slack events can trigger agents?",
        answer:
          "Trigger agents from direct messages, app mentions (@growthub), channel messages, reactions, or slash commands. Filter by specific channels, users, or keywords to control when agents activate.",
        keywords: ["Slack events", "app mentions", "DM", "reactions", "slash commands"],
      },
      {
        question: "Can agents reply in Slack threads?",
        answer:
          "Yes, agents automatically reply in threads to keep conversations organized. Configure response templates, LLM models, and conditional logic to create intelligent Slack bots.",
        keywords: ["thread replies", "Slack bot", "conversation management"],
      },
      {
        question: "How do I set up Slack triggers?",
        answer:
          "In Agent Builder, add a Slack Trigger node. Connect your Slack workspace via OAuth, select event types (message, mention, reaction), and configure validation. Use the 'Run Test' button to validate your setup with the last received Slack event.",
        keywords: ["Slack triggers", "setup", "OAuth", "webhook validation"],
      },
      {
        question: "Can I use multiple Slack workspaces?",
        answer:
          "Yes, connect multiple Slack workspaces and configure separate triggers for each. Agents can operate across different teams and channels with unique response logic per workspace.",
        keywords: ["multiple workspaces", "multi-tenant", "Slack teams"],
      },
    ],
  },
}
