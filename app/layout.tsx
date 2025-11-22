import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Rafi Iqbal | Frontend Developer",
  description: "Portfolio website Rafi Iqbal, seorang Frontend Developer dengan fokus di Flutter, React, dan Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
