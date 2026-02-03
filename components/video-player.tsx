"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  url: string
  title?: string
  className?: string
  caption?: string
}

export function VideoPlayer({ url, title, className, caption }: VideoPlayerProps) {
  // Extract YouTube or Loom ID and format embed URL
  const getEmbedUrl = (videoUrl: string) => {
    try {
      if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        // Handle various YouTube URL formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        const match = videoUrl.match(regExp)
        const id = (match && match[2].length === 11) ? match[2] : null
        return id ? `https://www.youtube.com/embed/${id}?rel=0` : null
      }
      
      if (videoUrl.includes("loom.com")) {
        // Handle Loom URLs
        const id = videoUrl.split("/").pop()?.split("?")[0]
        return id ? `https://www.loom.com/embed/${id}` : null
      }
    } catch (e) {
      console.error("Error parsing video URL:", e)
    }
    return null
  }

  const embedUrl = getEmbedUrl(url)

  if (!embedUrl) {
    return (
      <div className="p-4 border border-dashed border-red-200 rounded-lg text-red-500 text-sm">
        Invalid video URL: {url}
      </div>
    )
  }

  return (
    <div className={cn("my-8 group", className)}>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-black shadow-xl transition-all hover:shadow-2xl">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={embedUrl}
            title={title || "Video Player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </AspectRatio>
      </div>
      {caption && (
        <p className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </p>
      )}
    </div>
  )
}
