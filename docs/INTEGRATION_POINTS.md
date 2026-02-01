# Growthub Documentation System - Integration Points Reference

## Overview
This document outlines all key integration points for creating a sidebar navigation item, sub-navigation item, and help document page within the Growthub Next.js documentation application.

---

## 1. TYPE DEFINITIONS

### Location: `types/index.ts`

| Type | Role |
|------|------|
| `NavItem` | Defines sidebar navigation structure (id, title, href, icon, collapsible, items, description) |
| `DocumentationPage` | Defines page content structure (id, title, description, breadcrumbs, content, sections) |
| `ContentSection` | Defines content section hierarchy (id, title, level, content) |
| `NavigationState` | Defines previous/next page navigation state |
| `FeedbackResponse` | Defines user feedback options (helpful, neutral, unhelpful, null) |

---

## 2. CONFIGURATION FILES

### Navigation Config
**Location:** `lib/navigation-config.ts`

| Export | Role |
|--------|------|
| `navigationConfig` | Array of NavItem objects defining entire sidebar hierarchy |
| `pageSequence` | Ordered array of all page paths for previous/next navigation |
| `getPageIndex()` | Returns index of current page in sequence |
| `getPreviousPage()` | Returns previous page path and title |
| `getNextPage()` | Returns next page path and title |

### TLDR/FAQ Config
**Location:** `lib/tldr-faq-config.ts`

| Export | Role |
|--------|------|
| `tldrFaqConfig` | Object mapping page keys to TLDR snippets and FAQ arrays |

### Dynamic TLDR Generator
**Location:** `lib/dynamic-tldr-generator.ts`

| Export | Role |
|--------|------|
| `generateDynamicTLDR()` | Auto-generates TLDR content based on URL slug |
| `generateDynamicFAQ()` | Auto-generates FAQ questions based on page context |

### Constants
**Location:** `lib/constants.ts`

| Export | Role |
|--------|------|
| `BRAND_COLORS` | Cyan (#39D9FD) and Azure (#0174C7) gradient colors |
| `DESIGN_TOKENS` | Border radius, shadows, spacing values |

---

## 3. LAYOUT COMPONENTS

### Root Layout
**Location:** `app/layout.tsx`

| Import | From | Role |
|--------|------|------|
| `SidebarProvider` | `@/components/ui/sidebar` | Provides sidebar state context |
| `SidebarInset` | `@/components/ui/sidebar` | Main content wrapper |
| `AppSidebar` | `@/components/app-sidebar` | Sidebar navigation component |
| `StickyHeader` | `@/components/sticky-header` | Mobile sticky header |
| `ThemeProvider` | `@/components/theme-provider` | Theme context provider |

---

## 4. SIDEBAR COMPONENTS

### App Sidebar
**Location:** `components/app-sidebar.tsx`

| Import | From | Role |
|--------|------|------|
| `Sidebar` | `@/components/ui/sidebar` | Base sidebar container |
| `SidebarHeader` | `@/components/ui/sidebar` | Header section with logo |
| `SidebarContent` | `@/components/ui/sidebar` | Scrollable content area |
| `SidebarGroup` | `@/components/ui/sidebar` | Groups navigation sections |
| `SidebarGroupLabel` | `@/components/ui/sidebar` | Section label text |
| `SidebarMenu` | `@/components/ui/sidebar` | Menu container |
| `SidebarMenuItem` | `@/components/ui/sidebar` | Individual menu item |
| `SidebarMenuButton` | `@/components/ui/sidebar` | Clickable menu button |
| `SidebarMenuSub` | `@/components/ui/sidebar` | Sub-menu container |
| `SidebarMenuSubItem` | `@/components/ui/sidebar` | Sub-menu item |
| `Collapsible` | `@/components/ui/collapsible` | Expandable section wrapper |
| `CollapsibleTrigger` | `@/components/ui/collapsible` | Expand/collapse trigger |
| `CollapsibleContent` | `@/components/ui/collapsible` | Expandable content |
| `Input` | `@/components/ui/input` | Search input field |
| `useSidebar` | `@/components/ui/sidebar` | Sidebar state hook |
| `useIsMobile` | `@/hooks/use-mobile` | Mobile detection hook |
| `navigationConfig` | `@/lib/navigation-config` | Navigation data |
| `ChevronDown`, `Search` | `lucide-react` | Icons |
| `Link` | `next/link` | Client-side navigation |
| `usePathname` | `next/navigation` | Current path detection |
| `Image` | `next/image` | Optimized images |

---

## 5. PAGE COMPONENTS

### Page Header
**Location:** `components/page-header.tsx`

| Import | From | Role |
|--------|------|------|
| `Breadcrumb` | `@/components/ui/breadcrumb` | Breadcrumb container |
| `BreadcrumbItem` | `@/components/ui/breadcrumb` | Individual breadcrumb |
| `BreadcrumbLink` | `@/components/ui/breadcrumb` | Clickable breadcrumb |
| `BreadcrumbList` | `@/components/ui/breadcrumb` | Breadcrumb list |
| `BreadcrumbPage` | `@/components/ui/breadcrumb` | Current page (non-link) |
| `BreadcrumbSeparator` | `@/components/ui/breadcrumb` | Separator character |
| `Button` | `@/components/ui/button` | Copy button |
| `Copy`, `Check` | `lucide-react` | Icons |

**Props:**
- `category`: string - Parent category name
- `categoryHref`: string - Link to parent category
- `title`: string - Page title
- `icon`: LucideIcon (optional) - Category icon

### Page Content
**Location:** `components/page-content.tsx`

| Import | From | Role |
|--------|------|------|
| None required | - | Simple wrapper component |

**Props:**
- `description`: string - Page description text
- `children`: React.ReactNode - Page content

### Page Footer
**Location:** `components/page-footer.tsx`

| Import | From | Role |
|--------|------|------|
| `Link` | `next/link` | Navigation links |
| `usePathname` | `next/navigation` | Current path |
| `getPreviousPage` | `@/lib/navigation-config` | Previous page data |
| `getNextPage` | `@/lib/navigation-config` | Next page data |
| `ChevronLeft`, `ChevronRight` | `lucide-react` | Arrow icons |
| `Smile`, `Meh`, `Frown` | `lucide-react` | Feedback icons |

---

## 6. TLDR/FAQ COMPONENTS

### TLDR FAQ Section
**Location:** `components/tldr-faq-section.tsx`

| Import | From | Role |
|--------|------|------|
| `FAQItem` | `@/components/faq-item` | Individual FAQ accordion |
| `tldrFaqConfig` | `@/lib/tldr-faq-config` | Static content config |
| `generateDynamicTLDR` | `@/lib/dynamic-tldr-generator` | Dynamic TLDR generation |
| `generateDynamicFAQ` | `@/lib/dynamic-tldr-generator` | Dynamic FAQ generation |
| `usePathname` | `next/navigation` | URL slug extraction |

**Props:**
- `pageKey`: string (optional) - Config key override

### FAQ Item
**Location:** `components/faq-item.tsx`

| Import | From | Role |
|--------|------|------|
| `ChevronDown` | `lucide-react` | Expand icon |
| `useState` | `react` | Expand state |

**Props:**
- `question`: string - FAQ question text
- `answer`: string - FAQ answer text

---

## 7. UI PRIMITIVES (shadcn/ui)

### Core UI Components Used
**Location:** `components/ui/*`

| Component | File | Role |
|-----------|------|------|
| `Button` | `button.tsx` | Styled button with variants |
| `Card` | `card.tsx` | Content card container |
| `Input` | `input.tsx` | Text input field |
| `Badge` | `badge.tsx` | Status/tag badges |
| `Separator` | `separator.tsx` | Horizontal/vertical dividers |
| `ScrollArea` | `scroll-area.tsx` | Custom scrollbar container |
| `Sheet` | `sheet.tsx` | Mobile sidebar drawer |
| `Tooltip` | `tooltip.tsx` | Hover tooltips |

---

## 8. HOOKS

### Custom Hooks
| Hook | Location | Role |
|------|----------|------|
| `useIsMobile` | `hooks/use-mobile.ts` | Detects mobile viewport |
| `useSidebar` | `components/ui/sidebar.tsx` | Sidebar open/close state |
| `usePageNavigation` | `lib/hooks/use-page-navigation.ts` | Previous/next page logic |
| `useFeedback` | `lib/hooks/use-feedback.ts` | Feedback submission state |

---

## 9. ADDING A NEW DOCUMENTATION PAGE

### Step 1: Update Navigation Config
**File:** `lib/navigation-config.ts`

- Add entry to `navigationConfig` array with id, title, href, description
- If sub-item, add to parent's `subItems` array
- Add path to `pageSequence` array in correct order

### Step 2: Create Page File
**Location:** `app/[category]/[page]/page.tsx`

Required imports:
- `PageHeader` from `@/components/page-header`
- `PageContent` from `@/components/page-content`
- `PageFooter` from `@/components/page-footer`
- `TLDRFAQSection` from `@/components/tldr-faq-section`
- Category icon from `lucide-react`

### Step 3: Page Structure Template

```
export default function PageName() {
  return (
    <>
      <PageHeader ... />
      <PageContent description="...">
        {/* Main content sections */}
      </PageContent>
      <TLDRFAQSection />
      <PageFooter />
    </>
  )
}
```

### Step 4: Add Metadata (Optional)
- Export `metadata` object with title, description for SEO

### Step 5: Add Custom TLDR/FAQ (Optional)
**File:** `lib/tldr-faq-config.ts`

- Add entry with page key matching the URL slug
- Include `tldr` string and `faqs` array

---

## 10. STYLING SPECIFICATIONS

### Button Styling
- Background: white
- Border: 1px solid #e5e5e5
- Border radius: 5px (rounded-[5px])
- Shadow: 0 1px 2px rgba(0,0,0,0.05)
- Text: black (#000000)
- Icons: black (Lucide icons)

### Card Styling
- Background: white
- Border: 1px solid #e5e5e5
- Border radius: 8px
- Shadow: shadow-sm

### Typography
- Headings: text-black font-semibold
- Body: text-gray-700
- Descriptions: text-gray-600

### Gradient (Brand)
- Direction: 90deg (left to right)
- Start: #39D9FD (cyan)
- End: #0174C7 (azure)

---

## 11. FILE STRUCTURE SUMMARY

```
app/
├── layout.tsx                    # Root layout with providers
├── page.tsx                      # Homepage
├── [category]/
│   └── [page]/
│       └── page.tsx              # Documentation page
│
components/
├── app-sidebar.tsx               # Main sidebar navigation
├── sticky-header.tsx             # Mobile header
├── page-header.tsx               # Page breadcrumbs + title
├── page-content.tsx              # Content wrapper
├── page-footer.tsx               # Navigation + feedback
├── tldr-faq-section.tsx          # TLDR + FAQ component
├── faq-item.tsx                  # Expandable FAQ
├── feature-card.tsx              # Expandable feature card
│
lib/
├── navigation-config.ts          # Nav structure + page sequence
├── tldr-faq-config.ts            # Static TLDR/FAQ content
├── dynamic-tldr-generator.ts     # Auto-generated content
├── constants.ts                  # Design tokens
│
types/
└── index.ts                      # TypeScript definitions
```

---

## 12. CHECKLIST FOR NEW PAGE

- [ ] Add to `navigationConfig` in `lib/navigation-config.ts`
- [ ] Add to `pageSequence` array
- [ ] Create page file at correct path
- [ ] Import and use `PageHeader`
- [ ] Import and use `PageContent`
- [ ] Import and use `TLDRFAQSection`
- [ ] Import and use `PageFooter`
- [ ] Add custom TLDR/FAQ to config (optional)
- [ ] Test sidebar navigation
- [ ] Test previous/next navigation
- [ ] Test mobile responsiveness
- [ ] Verify breadcrumbs display correctly
