import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const alt = "Rafi Iqbal Rendy Syachputra — Frontend Developer in Semarang"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f2efe6",
          color: "#17251d",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 22, color: "#9a4f35" }}>Semarang, Indonesia</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 82, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.05em", maxWidth: 950 }}>
            Frontend developer building clear digital experiences.
          </div>
          <div style={{ fontSize: 28, color: "#4b5a50" }}>Vue.js · Nuxt.js · React · Next.js · Tailwind CSS</div>
        </div>
        <div style={{ height: 10, width: 260, borderRadius: 999, background: "#d89b35" }} />
      </div>
    ),
    size,
  )
}
