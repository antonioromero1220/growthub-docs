"use client"

import { usePathname } from "next/navigation"
import { getPreviousPage, getNextPage } from "@/lib/navigation-config"
import type { NavigationState } from "@/types"

export const usePageNavigation = (): NavigationState => {
  const pathname = usePathname()

  const previousPageData = getPreviousPage(pathname)
  const nextPageData = getNextPage(pathname)

  return {
    previousPage: previousPageData
      ? {
          title: previousPageData.title,
          href: previousPageData.path,
        }
      : null,
    nextPage: nextPageData
      ? {
          title: nextPageData.title,
          href: nextPageData.path,
        }
      : null,
  }
}
