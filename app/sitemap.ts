import type { MetadataRoute } from "next"
import { SITE_CONFIG, PAGE_SEO_CONFIG } from "@/lib/seo-config"
import { pageSequence } from "@/lib/navigation-config"

// =============================================================================
// SITEMAP.XML - All indexed pages for search engines
// =============================================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Generate sitemap entries from page sequence
  const pages: MetadataRoute.Sitemap = pageSequence.map((path) => {
    const seoConfig = PAGE_SEO_CONFIG[path]

    // Determine priority based on page depth
    const depth = path.split("/").filter(Boolean).length
    let priority: number
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

    if (path === "/") {
      priority = 1.0
      changeFrequency = "daily"
    } else if (depth === 1) {
      priority = 0.9
      changeFrequency = "weekly"
    } else if (depth === 2) {
      priority = 0.8
      changeFrequency = "weekly"
    } else if (depth === 3) {
      priority = 0.7
      changeFrequency = "monthly"
    } else {
      priority = 0.6
      changeFrequency = "monthly"
    }

    return {
      url: `${SITE_CONFIG.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }
  })

  return pages
}
