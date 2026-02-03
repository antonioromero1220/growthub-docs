# Growthub Documentation Architecture

## Project Structure

```
growthub-documentation/
├── app/                           # Next.js app directory (pages)
│   ├── page.tsx                   # Home page
│   ├── getting-started/           # Getting started section
│   │   └── page.tsx
│   ├── platform/                  # Platform documentation
│   │   ├── page.tsx              # Platform overview
│   │   ├── agent-builder/
│   │   ├── content-studio/
│   │   ├── export-platform/
│   │   ├── knowledge-system/
│   │   ├── brand-kit-system/
│   │   └── workflow-orchestration/
│   ├── api-reference/            # API documentation
│   │   └── page.tsx
│   ├── components/               # Components showcase
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/
│   ├── app-sidebar.tsx           # Main navigation sidebar
│   ├── navigation.tsx            # Legacy navigation (can be removed)
│   ├── theme-provider.tsx        # Theme context
│   └── ui/                       # shadcn/ui components
│       ├── card.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       └── ... (other UI components)
│
├── lib/
│   ├── export-config.ts          # Export configuration
│   ├── integration-utils.ts      # Integration helpers
│   ├── utils.ts                  # Common utilities
│   └── index.ts                  # Exports index
│
├── public/                       # Static assets
│   ├── gh-favicon.png
│   ├── gh-1.png
│   ├── gh-2.jpg
│   └── ... (other assets)
│
├── scripts/
│   ├── export.js                 # Export build script
│   ├── generate-manifest.js      # Manifest generation
│   └── validate-config.js        # Config validation
│
├── styles/
│   └── globals.css               # Additional global styles
│
├── docs-export.json              # Export package configuration
├── ARCHITECTURE.md               # This file
├── INTEGRATION_GUIDE.md           # Integration instructions
└── package.json                  # Project dependencies
```

## Design Principles

### 1. Modularity
- Each product documentation is self-contained in its own directory
- Components are reusable and composable
- Clear separation between UI components and content pages

### 2. Scalability
- Configuration-driven approach via `export-config.ts`
- Easy to add new documentation sections without modifying core infrastructure
- Prepared for multi-environment deployment

### 3. Export-Ready
- All code is organized for clean extraction
- Build scripts automate the export process
- Integration utilities handle environment-specific configuration

### 4. Maintainability
- Consistent file naming and structure
- Clear metadata and documentation
- Configuration centralized in `lib/export-config.ts`

## Component Organization

### Navigation Components
- `AppSidebar`: Main navigation with grouped sections and search

### Page Components
- `app/page.tsx`: Hero and feature overview
- `app/getting-started/page.tsx`: Quick start guide
- `app/platform/*.tsx`: Individual product documentation
- `app/api-reference/page.tsx`: API documentation
- `app/components/page.tsx`: Component showcase

### UI Components
- Standard shadcn/ui components imported from `components/ui/`
- All components support theming and customization
- Consistent styling via Tailwind CSS

## Configuration System

### `lib/export-config.ts`
Central configuration file that controls:
- Project metadata
- Build directories
- Export targets (production, staging, development)
- SEO configuration
- Feature flags for documentation sections
- Bundled dependencies

### Environment Variables
- `NODE_ENV`: Build environment (development, production, staging)
- `NEXT_PUBLIC_*`: Client-side configuration
- `DATABASE_URL`: (if needed for future features)

## Integration Strategy

### For Main Product Integration:

1. **File Organization**: Copy exported files maintaining directory structure
2. **Component Registration**: Register components in your component library
3. **Style Integration**: Merge Tailwind configuration with main product
4. **Routing**: Map documentation routes to your main routing system
5. **Assets**: Copy public assets to your static directory

### Key Integration Points:

```
Main Product
    ├── /docs          → Growthub Documentation pages
    ├── /shared        → Shared components (AppSidebar, etc.)
    └── /styles        → Merged Tailwind configuration
```

## Build and Export

### Local Development
```bash
npm run dev          # Start dev server on :3000
npm run build        # Build for production
npm run start        # Start production server
```

### Export Process
```bash
npm run export                    # Export to dist/
npm run export:prod             # Production export
npm run generate-manifest       # Create export manifest
npm run validate-config         # Validate configuration
```

### Output
The export process generates:
- Optimized Next.js build
- Export manifest with page and component list
- Integration guide
- Configuration files for main product

## Dependency Management

### Core Dependencies
- **next**: React framework
- **react**, **react-dom**: UI library
- **tailwindcss**: Styling utility
- **shadcn/ui**: UI component library

### Development Dependencies
- TypeScript
- ESLint
- PostCSS

### Bundled Dependencies
Defined in `export-config.ts` to ensure compatibility with main product.

## Performance Considerations

1. **Code Splitting**: Next.js automatically splits code per route
2. **Image Optimization**: Next.js Image component optimizes assets
3. **Static Generation**: Pages are statically generated where possible
4. **Caching**: Configuration includes cache directives for deployment

## Security

1. **No Sensitive Data**: Configuration uses environment variables
2. **Markdown Content**: All content is static/safe
3. **API Integration**: Uses secure authentication patterns
4. **Export Validation**: Scripts validate configuration before export

## Versioning

- **Documentation Version**: Defined in `export-config.ts`
- **Export Manifest**: Includes export date and version
- **Semantic Versioning**: Follow semver for releases

## Future Extensibility

Ready to add:
- Dynamic content from CMS
- Real-time updates
- Analytics integration
- Search functionality
- Version management
- Feedback/rating system
