/**
 * Export Configuration
 *
 * This file contains all configuration for exporting the documentation
 * to the main product environment. Modify these values to integrate
 * with your specific environment and deployment pipeline.
 */

export const exportConfig = {
  // Project metadata
  project: {
    name: "Growthub Documentation",
    version: "1.0.0",
    description: "Growthub Agent OS documentation—one product, six core features",
    author: "Growthub Team",
  },

  // Build configuration
  build: {
    outputDir: "./dist",
    assetsDir: "./public",
    componentsDir: "./components",
    docsDir: "./app",
  },

  // Export targets - define where docs will be deployed
  targets: {
    production: {
      baseUrl: "https://docs.growthub.io",
      environment: "production",
    },
    staging: {
      baseUrl: "https://staging-docs.growthub.io",
      environment: "staging",
    },
    development: {
      baseUrl: "http://localhost:3000",
      environment: "development",
    },
  },

  // SEO configuration
  seo: {
    siteName: "Growthub Documentation",
    description: "Comprehensive documentation for Growthub Agent OS",
    keywords: ["Growthub", "Agent Builder", "Content Studio", "Documentation"],
    socialImage: "/og-image.jpg",
  },

  // Feature flags for documentation sections
  features: {
    showPlatformOverview: true,
    showAgentBuilder: true,
    showContentStudio: true,
    showExportPlatform: true,
    showKnowledgeSystem: true,
    showBrandKitSystem: true,
    showWorkflowOrchestration: true,
  },

  // Dependencies for bundling
  bundledDependencies: [
    "react",
    "react-dom",
    "next",
    "@radix-ui/react-primitive",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],

  // Files to exclude from export
  excludePatterns: ["node_modules/**", ".next/**", ".git/**", "*.env*", "pnpm-lock.yaml"],
}

export type ExportConfig = typeof exportConfig
