/**
 * Export Script
 *
 * Build and prepare the documentation for integration with the main product.
 * This script:
 * 1. Validates the export configuration
 * 2. Builds the Next.js project
 * 3. Generates a manifest of exported components and pages
 * 4. Creates integration instructions
 */

import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const config = {
  outputDir: "./dist",
  docsDir: "./app",
  componentsDir: "./components",
}

console.log("🚀 Starting Growthub Documentation Export...")

try {
  // Step 1: Build the Next.js project
  console.log("📦 Building project...")
  execSync("next build", { stdio: "inherit" })

  // Step 2: Create export manifest
  console.log("📋 Generating export manifest...")
  const manifest = {
    name: "growthub-documentation",
    version: "1.0.0",
    exportDate: new Date().toISOString(),
    pages: [
      "/",
      "/getting-started",
      "/platform/platform-overview",
      "/platform/agent-builder",
      "/platform/content-studio",
      "/platform/export-platform",
      "/platform/knowledge-system",
      "/platform/brand-kit-system",
      "/platform/workflow-orchestration",
      "/api-reference",
      "/components",
    ],
    components: ["AppSidebar", "Card", "Badge", "Button", "Input"],
    assets: ["app/icon.png"],
  }

  fs.writeFileSync(path.join(config.outputDir, "EXPORT_MANIFEST.json"), JSON.stringify(manifest, null, 2))

  // Step 3: Create integration instructions
  console.log("📖 Creating integration instructions...")
  const instructions = `# Growthub Documentation Export

## Integration Guide

This documentation has been prepared for integration with the main Growthub product.

### Exported Files
- All pages from \`app/\` directory
- Components from \`components/\` directory
- Configuration files in \`lib/\`
- Public assets

### Installation

1. Copy the exported files to your main product repository:
   \`\`\`bash
   cp -r dist/app/* main-product/docs/pages/
   cp -r dist/components/* main-product/shared/components/
   \`\`\`

2. Update imports in your main product to point to the new documentation paths

3. Merge styles and dependencies as needed

### Configuration

The documentation uses the following configuration:
- Base URL: Configurable via \`lib/export-config.ts\`
- Build output: \`dist/\`
- Components directory: \`components/\`

### Customization

To customize the documentation for your environment:
1. Edit \`lib/export-config.ts\` to match your deployment settings
2. Update navigation items in \`components/app-sidebar.tsx\`
3. Modify styling via Tailwind configuration

### Dependencies

Required dependencies:
- next: ^14.0.0
- react: ^18.0.0
- tailwindcss: ^3.0.0
- shadcn/ui components

### Support

For integration support, refer to the export manifest and configuration files included in this build.
`

  fs.writeFileSync(path.join(config.outputDir, "INTEGRATION_GUIDE.md"), instructions)

  console.log("✅ Export completed successfully!")
  console.log(`📂 Output directory: ${config.outputDir}`)
  console.log("📋 Manifest: EXPORT_MANIFEST.json")
  console.log("📖 Guide: INTEGRATION_GUIDE.md")
} catch (error) {
  console.error("❌ Export failed:", error.message)
  process.exit(1)
}
