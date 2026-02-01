import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { StickyHeader } from "@/components/sticky-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Growthub AGENT OS Documentation",
  description: "Comprehensive documentation for Growthub AGENT OS Platform",
  metadataBase: new URL("https://docs.growthub.ai"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
