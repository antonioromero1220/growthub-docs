# Agent Documentation Contribution Workflow

Internal workflow for AI agents contributing to Growthub Agent OS documentation.

---

## Phase 1: Context Analysis

### Step 1.1 - Scan Existing Structure
| Action | Target |
|--------|--------|
| Read `lib/navigation-config.ts` | Understand current nav hierarchy |
| Read `lib/tldr-faq-config.ts` | Review existing TLDR/FAQ content |
| Glob `app/**/page.tsx` | List all documentation pages |
| Read `lib/dynamic-tldr-generator.ts` | Understand auto-generation patterns |

### Step 1.2 - Identify Content Type
| Input Signal | Content Type | Action |
|--------------|--------------|--------|
| New product feature | New category + pages | Create section in nav + pages |
| Feature enhancement | Sub-item page | Add to existing category |
| Integration/connector | Integration page | Add under Integrations section |
| FAQ/support content | TLDR/FAQ update | Update config file only |

---

## Phase 2: Gap Analysis

### Step 2.1 - Compare User Input Against Existing
| Check | Method |
|-------|--------|
| Category exists? | Search `navSections` for matching title |
| Page exists? | Check `pageSequence` for matching href |
| TLDR content exists? | Check `tldrFaqContent` object keys |
| Sub-items complete? | Compare `subItems` array against requirements |

### Step 2.2 - Determine Action Type
| Gap Type | Required Files |
|----------|----------------|
| New category | nav-config + sidebar + category page + sub-pages |
| New sub-page only | nav-config + single page file |
| Content enrichment | tldr-faq-config only |
| Navigation fix | nav-config + pageSequence only |

---

## Phase 3: Content Generation

### Step 3.1 - Page Content Template
```
1. Metadata (title, description)
2. Breadcrumb path
3. H1 title
4. Description paragraph (2-3 sentences)
5. Main content sections (H2 headings)
6. Bulleted feature/capability lists
7. TLDRFAQSection component
8. PageFooter component
```

### Step 3.2 - TLDR/FAQ Content Requirements
| Field | Requirements |
|-------|--------------|
| `tldr` | 1-2 sentences, include primary keyword |
| `seoKeywords` | 5-8 relevant terms |
| `faqs` | 3-5 Q&A pairs, natural language questions |
| Question format | "What is...", "How do I...", "Why should I..." |
| Answer format | 2-4 sentences, actionable, include keywords |

### Step 3.3 - Dynamic Generator Fallback
If page not in `tldrFaqContent`, generator uses slug to create:
- Title from slug (kebab-case to Title Case)
- Generic TLDR from page context patterns
- Standard FAQ questions based on page type

---

## Phase 4: Integration Execution

### Step 4.1 - File Creation Order
```
1. lib/navigation-config.ts    (add to navSections + pageSequence)
2. lib/tldr-faq-config.ts      (add TLDR/FAQ content)
3. app/platform/[path]/page.tsx (create page file)
4. components/app-sidebar.tsx   (verify renders correctly)
```

### Step 4.2 - Navigation Config Updates
| Array | Action |
|-------|--------|
| `navSections` | Add item with title, href, icon |
| `subItems` | Add nested pages under parent |
| `pageSequence` | Insert in correct order for prev/next |

### Step 4.3 - Page File Structure
```tsx
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { TLDRFAQSection } from "@/components/tldr-faq-section"
import { PageFooter } from "@/components/page-footer"

export const metadata = { title, description }

export default function PageName() {
  return (
    <main>
      <PageHeader breadcrumbs={[...]} title="..." />
      <PageContent description="...">
        {/* Content sections */}
      </PageContent>
      <TLDRFAQSection />
      <PageFooter previousPage={{...}} nextPage={{...}} />
    </main>
  )
}
```

---

## Phase 5: Validation

### Step 5.1 - Pre-Commit Checks
| Check | Pass Criteria |
|-------|---------------|
| Nav renders | Sidebar shows new item |
| Page loads | No 404, content displays |
| TLDR shows | Section renders with content |
| Footer nav works | Previous/Next links correct |
| Mobile responsive | Layout adapts properly |

### Step 5.2 - Content Quality
| Criteria | Standard |
|----------|----------|
| Title | Clear, keyword-rich, under 60 chars |
| Description | Actionable, 120-160 chars |
| TLDR | Concise, primary benefit stated |
| FAQs | Answer actual user questions |
| Headings | H2 for sections, H3 for sub-sections |

---

## Quick Reference: Required Imports

### Page Components
```
@/components/page-header
@/components/page-content
@/components/page-footer
@/components/tldr-faq-section
@/components/feature-card (optional)
```

### Navigation Config
```
lucide-react (icons)
@/types (TypeScript interfaces)
```

### Utilities
```
@/lib/navigation-config (pageSequence)
@/lib/dynamic-tldr-generator (auto-content)
@/lib/tldr-faq-config (static content)
```

---

## Execution Command Sequence

```
1. READ lib/navigation-config.ts
2. READ lib/tldr-faq-config.ts
3. IDENTIFY gap type from user input
4. WRITE lib/navigation-config.ts (add nav item + sequence)
5. WRITE lib/tldr-faq-config.ts (add TLDR/FAQ content)
6. WRITE app/platform/[category]/[page]/page.tsx
7. VERIFY sidebar renders new item
8. VERIFY page loads with TLDR/FAQ
9. VERIFY footer navigation works
```

---

## Content Enrichment Only (No New Pages)

If only enriching existing content:

```
1. READ lib/tldr-faq-config.ts
2. IDENTIFY page key from slug
3. ADD or UPDATE tldrFaqContent[pageKey]
4. WRITE lib/tldr-faq-config.ts
```

No other files needed for content-only updates.
