# Growthub Documentation - Migration Guide

## Overview
This documentation package is a self-contained, export-ready module designed for seamless integration into the main Growthub repository.

## Project Structure

```
growthub-docs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (sidebar + main)
│   ├── page.tsx                 # Homepage with feature cards
│   ├── getting-started/         # Getting started guide
│   ├── platform/                # Platform documentation pages
│   │   ├── agent-builder/
│   │   ├── content-studio/
│   │   ├── knowledge-system/
│   │   ├── brand-kit-system/
│   │   ├── export-platform/
│   │   ├── workflow-orchestration/
│   │   └── platform-overview/
│   ├── api-reference/           # API documentation
│   └── support/                 # Support & help center
├── components/
│   ├── ui/                      # Shadcn UI components (unchanged)
│   ├── app-sidebar.tsx          # Main navigation sidebar
│   ├── page-header.tsx          # Page title + breadcrumbs
│   ├── page-content.tsx         # Content wrapper
│   └── page-footer.tsx          # Navigation + feedback
├── lib/
│   ├── navigation-config.ts     # Navigation structure (DECOUPLED)
│   ├── constants.ts             # Design tokens (DECOUPLED)
│   └── hooks/
│       ├── use-page-navigation.ts
│       └── use-feedback.ts
├── types/
│   └── index.ts                 # All TypeScript interfaces (DECOUPLED)
├── app/globals.css              # Tailwind styles
├── package.json                 # Dependencies
└── README.md                    # Documentation

```

## Key Design Principles

### 1. **Decoupled Logic**
- Navigation configuration lives in `lib/navigation-config.ts` (not coupled to UI)
- Types are centralized in `types/index.ts`
- Design tokens in `lib/constants.ts`
- Custom hooks manage state independently in `lib/hooks/`

### 2. **Clean Component Separation**
- UI components in `components/ui/` (shadcn - unchanged)
- Layout components in `components/` root (page-header, page-footer, etc.)
- Page components in `app/` (content only)

### 3. **Zero Breaking Changes**
- All shadcn UI components remain untouched
- No external package changes required
- Uses only standard Next.js 15 + React 19

## Migration Steps

### Step 1: Copy to Main Repository
```bash
# Copy entire docs folder to main Growthub repo
cp -r growthub-docs ./packages/documentation
```

### Step 2: Merge Dependencies
```bash
# Your package.json already includes all needed dependencies
# Verify these are in main repo's package.json:
# - Next.js 15.5.9+
# - React 19.2.0+
# - Tailwind CSS 3.4.17+
# - All @radix-ui packages listed
```

### Step 3: Update Navigation Integration
Edit `lib/navigation-config.ts` to match main app routes:
```typescript
// Change href paths to match your main app structure
export const navigationConfig: NavItem[] = [
  {
    id: "platform",
    title: "Agent OS Platform",
    items: [
      {
        id: "agent-builder",
        title: "Agent Builder",
        href: "/docs/platform/agent-builder", // or your desired path
      },
      // ...
    ],
  },
]
```

### Step 4: Merge Layout
If main app has existing layout:
```typescript
// In main app/layout.tsx, import and use AppSidebar
import { AppSidebar } from "@/packages/documentation/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

// Wrap documentation pages with SidebarProvider
```

### Step 5: Update Styles
- Copy `app/globals.css` contents to main app's globals
- Ensure Tailwind config includes documentation colors:
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    colors: {
      cyan: "#39D9FD",
      azure: "#0174C7",
      // ... rest of colors
    },
  },
}
```

### Step 6: Point to Documentation
In main app's navigation/header:
```typescript
<Link href="/docs">Documentation</Link>
```

## File Export Guide

### For Integration into Main App
Import these core files:
```typescript
// Navigation configuration (no UI dependency)
import { navigationConfig, getPreviousPage, getNextPage } from "@/lib/navigation-config"

// Types (use everywhere)
import type { NavItem, DocumentationPage } from "@/types"

// Design tokens
import { DESIGN_TOKENS } from "@/lib/constants"

// Custom hooks
import { usePageNavigation } from "@/lib/hooks/use-page-navigation"
import { useFeedback } from "@/lib/hooks/use-feedback"
```

### Components to Copy
- ✅ All `components/ui/` (unchanged shadcn)
- ✅ `components/app-sidebar.tsx` (fully self-contained)
- ✅ `components/page-header.tsx` (reusable)
- ✅ `components/page-content.tsx` (wrapper)
- ✅ `components/page-footer.tsx` (responsive)

### Pages to Mount
All pages in `/platform`, `/getting-started`, `/api-reference`, `/support` are standalone and can be mounted at any route prefix.

## Customization Points

### 1. Change Brand Colors
Edit `lib/constants.ts`:
```typescript
colors: {
  cyan: "#39D9FD",      // Change to your brand cyan
  azure: "#0174C7",     // Change to your brand blue
  // ...
}
```

### 2. Update Page Sequence
For different documentation order, edit `lib/navigation-config.ts`:
```typescript
export const pageSequence = [
  "/",
  "/getting-started",
  // Add/remove pages
]
```

### 3. Customize Sidebar
Edit `components/app-sidebar.tsx` to change:
- Logo/branding
- Sidebar width
- Icon styles
- Collapsible sections

## Dependencies

All dependencies are in `package.json` and designed for Next.js projects:
- ✅ Next.js 15.5.9
- ✅ React 19.2.0
- ✅ Tailwind CSS 3.4.17
- ✅ Radix UI components
- ✅ Lucide icons

**No additional packages required.**

## Troubleshooting

### Issue: Styles not applying
**Solution:** Ensure Tailwind config includes the documentation app path:
```typescript
content: [
  "./packages/documentation/**/*.{js,ts,jsx,tsx}",
]
```

### Issue: Navigation not working
**Solution:** Update `lib/navigation-config.ts` paths to match your app structure.

### Issue: Sidebar not displaying
**Solution:** Ensure `SidebarProvider` wraps the documentation layout in your main app.

### Issue: Types not found
**Solution:** Update TypeScript path aliases if needed:
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/types": ["./types/index.ts"],
      "@/lib/*": ["./lib/*"],
    }
  }
}
```

## Support & Maintenance

For questions on integration:
1. Check the documentation pages at `/docs`
2. Review `types/index.ts` for available interfaces
3. Check `lib/constants.ts` for all design tokens
4. Review hook implementations in `lib/hooks/`

## License & Attribution

This documentation package is part of Growthub AGENT OS.
All components are built with shadcn/ui and Tailwind CSS.
