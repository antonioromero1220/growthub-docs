import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { StickyHeader } from "@/components/sticky-header"
import { RootSchemas } from "@/components/seo/json-ld"
import { defaultMetadata, SITE_CONFIG } from "@/lib/seo-config"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// =============================================================================
// ROOT METADATA - Full SEO configuration
// =============================================================================

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [{ url: "/gh-favicon.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/gh-favicon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_CONFIG.name,
  },
}

// =============================================================================
// VIEWPORT CONFIGURATION - Mobile optimization
// =============================================================================

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE_CONFIG.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#0d3d5c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// =============================================================================
// ROOT LAYOUT
// =============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/gh-favicon.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/gh-favicon.png" />
        {/* Logo for social platforms - Force refresh with cache busting */}
        <link rel="image_src" href={`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`} />
        <meta property="og:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`} />
        <meta property="og:image:secure_url" content={`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Growthub Agent OS Documentation" />
        <meta name="twitter:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.twitterImage}`} />
        <meta name="twitter:image:src" content={`${SITE_CONFIG.url}${SITE_CONFIG.twitterImage}`} />
        
        {/* Structured Data */}
        <RootSchemas />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <StickyHeader />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
