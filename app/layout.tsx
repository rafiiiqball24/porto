import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [
    "Rafi Iqbal Rendy Syachputra",
    "Rafi Iqbal Rendy",
    "Rafi Iqbal Syachputra",
    "Rafi Iqbal",
    "frontend developer Semarang",
    "web developer Semarang",
    "Vue.js developer",
    "Nuxt.js developer",
    "React developer",
    "Next.js developer",
    "Tailwind CSS developer",
    "frontend developer Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Frontend Developer in Semarang`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  verification: {
    google: "ZmMGctcq9nIwDjjQRKbFWQ6GXYXXqh8UsHdEjMM3pj0",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe6",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
