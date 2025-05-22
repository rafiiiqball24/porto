"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Github, Instagram, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CommentForm } from "@/components/comment-form"
import { ProjectCard } from "@/components/project-card"
import { SkillGrid } from "@/components/skill-grid"
import { Timeline } from "@/components/timeline"
import { CertificationGrid } from "@/components/certification"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Create particles for background effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const createParticles = () => {
        const body = document.querySelector("body")
        if (!body) return

        // Clear existing particles
        const existingParticles = document.querySelectorAll(".particle")
        existingParticles.forEach((particle) => particle.remove())

        // Create new particles
        const particleCount = Math.floor(window.innerWidth / 20)
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div")
          particle.classList.add("particle")

          // Random size between 2-6px
          const size = Math.random() * 4 + 2
          particle.style.width = `${size}px`
          particle.style.height = `${size}px`

          // Random position
          particle.style.left = `${Math.random() * 100}vw`
          particle.style.top = `${Math.random() * 100}vh`

          // Random opacity
          particle.style.opacity = `${Math.random() * 0.5 + 0.1}`

          // Add to body
          body.appendChild(particle)
        }
      }

      createParticles()
      window.addEventListener("resize", createParticles)

      return () => {
        window.removeEventListener("resize", createParticles)
      }
    }
  }, [mounted, theme])

  // Initialize scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        }
      }

      // Update active section
      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Rafi Iqbal
          </Link>

          <div className="hidden md:flex space-x-6">
            {Object.entries(sectionRefs).map(
              ([key, _]) =>
                key !== "hero" && (
                  <Link
                    key={key}
                    href={`#${key}`}
                    className={`transition-colors duration-300 ${
                      activeSection === key ? "text-primary font-medium" : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ),
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Button className="btn-futuristic" asChild>
              <a href="/documents/rafi-iqbal-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> CV
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10 cyberpunk-grid"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full neon-border glow">
            <Image src="/photos/profile.jpg" alt="Rafi Iqbal" fill className="object-contain object-center" priority />
          </div>

          <h1 className="text-4xl md:text-4xl font-bold gradient-text">Rafi Iqbal Rendy Syachputra</h1>

          <p className="text-xl md:text-2xl text-foreground/80">
            <span className="font-semibold text-primary">Frontend Developer</span> 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="btn-futuristic text-lg py-6 px-8">
              <Link href="#projects" className="flex items-center">
                Explore Projects <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="scroll-indicator"></div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="py-32 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border card-3d reveal fade-bottom">
            <p className="text-lg text-card-foreground/90 leading-relaxed">
              I am an Associate Degree student in Informatics Engineering at Politeknik Negeri Semarang, having started
              my academic journey in 2023. I have a strong interest in application development, particularly in User
              Interface design. Additionally, I am currently learning the fundamentals of Cyber Security to deepen my
              understanding of system and application security.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="py-32 px-4 md:px-6 relative bg-secondary/30">
        <div className="absolute inset-0 cyberpunk-grid -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">Expertise</h2>

          <div className="reveal fade-bottom">
            <SkillGrid />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="py-32 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="reveal fade-bottom" style={{ transitionDelay: `${index * 0.1}s` }}>
                <ProjectCard index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section
        id="certifications"
        ref={sectionRefs.certifications}
        className="py-32 px-4 md:px-6 relative bg-secondary/30"
      >
        <div className="absolute inset-0 cyberpunk-grid -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">Certifications</h2>

          <div className="reveal fade-bottom">
            <CertificationGrid />
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="experience" ref={sectionRefs.experience} className="py-32 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">Education & Experience</h2>

          <div className="reveal fade-bottom">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-32 px-4 md:px-6 relative bg-secondary/30">
        <div className="absolute inset-0 cyberpunk-grid -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal fade-bottom">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:rafiiqbal2407@gmail.com"
                  className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="text-foreground">rafiiqbal2407@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/rafiiiqball24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <p className="text-foreground">github.com/rafiiiqball24</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <p className="text-foreground">LinkedIn</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/rafi_iqbal_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Instagram</p>
                    <p className="text-foreground">@rafi_iqbal_</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-8 text-foreground">Comments</h3>
                <CommentForm />
              </div>
            </div>

            <div className="reveal fade-bottom" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Send Message To My Email</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-card text-card-foreground border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 flex justify-center space-x-4">
            <a
              href="mailto:rafiiqbal2407@gmail.com"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rafiiiqball24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/rafi_iqbal_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-foreground/70">© {new Date().getFullYear()} Rafi Iqbal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
