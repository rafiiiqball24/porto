import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
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
  title: {
    default: "Rafi Iqbal — Frontend Developer",
    template: "%s — Rafi Iqbal",
  },
  description:
    "Portfolio Rafi Iqbal, frontend developer based in Semarang building responsive web and mobile experiences.",
  keywords: ["Rafi Iqbal", "Frontend Developer", "Vue.js", "React", "Flutter", "Semarang"],
  authors: [{ name: "Rafi Iqbal" }],
  creator: "Rafi Iqbal",
  openGraph: {
    title: "Rafi Iqbal — Frontend Developer",
    description: "Clear, responsive, and carefully crafted digital experiences.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
