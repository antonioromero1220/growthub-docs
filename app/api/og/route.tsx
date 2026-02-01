import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

// =============================================================================
// OG IMAGE GENERATION - Dynamic social share images
// =============================================================================

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get("title") || "Growthub Agent OS Documentation"
  const description = searchParams.get("description") || "AI-Powered B2B SaaS Growth Platform"
  const type = searchParams.get("type") || "default"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundImage: "linear-gradient(135deg, #1a6b9c 0%, #0d3d5c 50%, #061f2e 100%)",
          padding: "60px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #3b9dd6 0%, #1a6b9c 50%, #0d5a8c 100%)",
          }}
        />

        {/* Logo and brand section */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Logo circle */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b9dd6 0%, #1a6b9c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: "24px", fontWeight: "700" }}>Growthub</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "500" }}>
              Agent OS Documentation
            </span>
          </div>
        </div>

        {/* Badge */}
        {type !== "default" && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "80px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "rgba(255,255,255,0.9)",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {type}
          </div>
        )}

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {title.length > 60 ? `${title.slice(0, 60)}...` : title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "700px",
            }}
          >
            {description.length > 120 ? `${description.slice(0, 120)}...` : description}
          </p>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          docs.growthub.ai
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,157,214,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "200px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,157,214,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
