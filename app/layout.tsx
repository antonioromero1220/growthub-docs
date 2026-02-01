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
    icon: [
      { url: "/favicon-1.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-1.png",
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
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
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
