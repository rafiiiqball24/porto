"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { siteConfig } from "@/lib/site-config"

const navigation = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Profile", href: "#profile", id: "profile" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav-backdrop fixed inset-x-0 top-0 z-50">
      <div className="site-shell flex min-h-[4.8rem] items-center justify-between gap-5">
        <Link href="#top" className="brand-link flex min-h-11 items-center gap-3" onClick={closeMenu}>
          <BrandMark className="brand-symbol" />
          <span className="hidden text-sm font-extrabold tracking-[-0.02em] sm:inline">{siteConfig.shortName}</span>
          <span className="sr-only">Back to top</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="nav-link"
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="button-primary nav-cv min-h-11 px-4 py-2" href="/porto/cv.pdf" download>
            <Download className="h-4 w-4" aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--ink)] md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-panel md:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="nav-link justify-between px-2 py-2 text-base"
              onClick={closeMenu}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <a className="button-primary mt-3" href="/porto/cv.pdf" download onClick={closeMenu}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </nav>
      )}
    </header>
  )
}
