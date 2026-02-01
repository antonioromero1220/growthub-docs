/**
 * Integration Utilities
 *
 * Helper functions for integrating the documentation with the main product.
 * These utilities handle component resolution, asset loading, and metadata
 * mapping to ensure seamless integration.
 */

import type { ExportConfig } from "./export-config"

/**
 * Get the appropriate base URL based on environment
 */
export function getBaseUrl(config: ExportConfig, environment?: string): string {
  const env = environment || process.env.NODE_ENV || "development"
  const target = config.targets[env as keyof typeof config.targets]
  return target?.baseUrl || config.targets.development.baseUrl
}

/**
 * Generate sitemap entries for all documentation pages
 */
export function generateSitemapEntries(
  config: ExportConfig,
): Array<{ url: string; lastmod: string; priority: number }> {
  const baseUrl = getBaseUrl(config)

  return [
    { url: baseUrl, lastmod: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/getting-started`, lastmod: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/platform/platform-overview`, lastmod: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/platform/agent-builder`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/platform/content-studio`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/platform/export-platform`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/platform/knowledge-system`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/platform/brand-kit-system`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/platform/workflow-orchestration`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/api-reference`, lastmod: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/components`, lastmod: new Date().toISOString(), priority: 0.7 },
  ]
}

/**
 * Validate export configuration
 */
export function validateExportConfig(config: ExportConfig): string[] {
  const errors: string[] = []

  if (!config.project.name) errors.push("Project name is required")
  if (!config.project.version) errors.push("Project version is required")
  if (!config.build.outputDir) errors.push("Output directory is required")

  return errors
}

/**
 * Get component metadata for integration
 */
export interface ComponentMetadata {
  name: string
  path: string
  category: string
  description: string
  exported: boolean
}

export function getComponentMetadata(config: ExportConfig): ComponentMetadata[] {
  return [
    {
      name: "AppSidebar",
      path: "components/app-sidebar.tsx",
      category: "Navigation",
      description: "Main sidebar navigation component",
      exported: true,
    },
    {
      name: "Card",
      path: "components/ui/card.tsx",
      category: "UI",
      description: "Card container component",
      exported: true,
    },
    {
      name: "Badge",
      path: "components/ui/badge.tsx",
      category: "UI",
      description: "Badge component for labels",
      exported: true,
    },
    {
      name: "Button",
      path: "components/ui/button.tsx",
      category: "UI",
      description: "Button component",
      exported: true,
    },
  ]
}
