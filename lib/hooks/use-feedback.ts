"use client"

import { useState } from "react"
import type { FeedbackResponse } from "@/types"

export const useFeedback = () => {
  const [feedback, setFeedback] = useState<FeedbackResponse>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = (response: FeedbackResponse) => {
    setFeedback(response)
    setSubmitted(true)
    // TODO: Send to analytics/backend
    console.log("[Feedback]", { page: window.location.pathname, response })

    // Reset after 2 seconds
    setTimeout(() => setSubmitted(false), 2000)
  }

  return {
    feedback,
    submitted,
    handleFeedback,
  }
}
