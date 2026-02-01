"use client"

import { Menu, Search } from "lucide-react"
import Image from "next/image"
import { useSidebar } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const isMobile = useIsMobile()
  const { toggleSidebar, setOpen } = useSidebar()

  if (!isMobile) return null

  const handleSearchClick = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("focusSearch", "true")
    }
    setOpen(true)
  }

  const handleMenuClick = () => {
    // Ensure focusSearch is cleared when using hamburger menu
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("focusSearch")
    }
    toggleSidebar()
  }

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-3 py-2.5 h-14">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={handleMenuClick}
            className="h-10 w-10 rounded-[5px] border-gray-300 bg-white hover:bg-gray-50 shadow-sm border"
          >
            <Menu className="h-5 w-5 text-black" strokeWidth={2.5} />
          </Button>

          <Image src="/images/img-0014.png" alt="Growthub" width={36} height={36} className="rounded-[5px]" />
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleSearchClick}
          className="h-10 w-10 rounded-[5px] border-gray-300 bg-white hover:bg-gray-50 shadow-sm border"
        >
          <Search className="h-5 w-5 text-black" strokeWidth={2} />
        </Button>
      </div>
    </div>
  )
}
