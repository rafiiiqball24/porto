import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Frontend Developer`,
    short_name: siteConfig.shortName,
    description: `Frontend developer portfolio of ${siteConfig.name}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#f2efe6",
    theme_color: "#f2efe6",
    icons: [
      {
        src: "/icon.svg?v=2",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg?v=2",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  }
}
