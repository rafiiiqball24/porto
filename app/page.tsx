"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CommentForm } from "@/components/comment-form"
import { ProjectCard, projects } from "@/components/project-card"
import { SkillGrid } from "@/components/skill-grid"
import { Timeline } from "@/components/timeline"
import { CertificationGrid } from "@/components/certification"

export default function Home() {
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
  const heroStats = [
    { label: "Projects", value: `${projects.length}+`, hint: "Web, mobile, UI/UX, IoT" },
    { label: "Stack", value: "10+", hint: "React, Flutter, Laravel, Vue, Figma" },
   
  ]

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
  }, [])

  // Initialize scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top
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

  return (
    <main className="min-h-screen luxury-bg text-foreground transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050404]/85 backdrop-blur-xl border-b border-primary/20 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 text-lg md:text-xl font-semibold tracking-wide">
            <span className="h-9 w-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
              RI
            </span>
            <span className="gradient-text font-display text-2xl">Rafi Iqbal</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {Object.entries(sectionRefs).map(
              ([key, _]) =>
                key !== "hero" && (
                  <Link
                    key={key}
                    href={`#${key}`}
                    className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      activeSection === key ? "text-primary" : "text-foreground/60 hover:text-primary/80"
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ),
            )}
          </div>

          <div className="flex items-center gap-3">
           
            <Button className="btn-futuristic px-4 py-2 rounded-full" asChild>
              <a href="/porto/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> CV
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center px-4 md:px-6 pt-28 overflow-hidden"
      >
        <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
        <div className="absolute -left-24 top-16 w-96 h-96 gold-blur"></div>
        <div className="absolute right-[-120px] bottom-[-100px] w-[520px] h-[520px] gold-blur"></div>
        <div className="absolute inset-0 pointer-events-none golden-noise"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-xs tracking-[0.3em] uppercase text-primary/90">
              <Sparkles className="h-4 w-4" />
              <span>Port0folio</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-display">
             Building fast, modern, and meaningful 
              <span className="block gradient-text">digital experiences.</span>
            </h1>

            <p className="text-lg text-foreground/80 max-w-2xl">
             As a frontend developer, I craft modern interfaces with seamless interactions, pixel-perfect execution, and strong technical foundations. My focus is creating elegant digital experiences that remain fast, functional, and visually refined.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-futuristic text-base px-6 py-6 rounded-xl" asChild>
                <Link href="#projects" className="flex items-center">
                  Exolore Project <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-primary/40 bg-white/5 text-primary hover:bg-primary/15 px-6 py-6"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {heroStats.map((stat, index) => (
                <div key={index} className="lux-card p-4 rounded-xl">
                  <div className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="text-xs text-foreground/70 mt-1">{stat.hint}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end w-[220px] sm:w-[260px] md:w-[340px] lg:w-[380px]">
            <div className="absolute inset-0 -top-10 -left-6 -right-6 h-[400px] sm:h-[460px] md:h-[520px] bg-gradient-to-br from-primary/15 via-transparent to-primary/5 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[28px] border border-primary/30 bg-gradient-to-br from-white/5 via-[#0b0a08] to-primary/5 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/25 to-transparent"></div>
              <div className="relative h-[400px] sm:h-[460px] md:h-[520px] w-full">
                <Image src="/photos/profile3.jpg" alt="Rafi Iqbal" fill className="object-cover object-center" priority />
              </div>
              <div className="p-6 flex items-center justify-between border-t border-primary/15 bg-black/50 backdrop-blur">
                <div>
                  <p className="text-sm text-foreground/60">Frontend developer</p>
                  <p className="text-xl font-semibold font-display">Rafi Iqbal Rendy S.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={sectionRefs.about} className="py-28 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto section-veil">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">About Me</h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl">
                I'm an Informatics Engineering student and frontend developer passionate about clean system architecture, visual detail, and refined user interactions. I blend modern aesthetics, smooth user flows, and secure fundamentals to build digital products that feel polished, reliable, and production-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="lux-card p-4 rounded-xl">
                <p className="text-sm text-foreground/60 uppercase tracking-[0.2em] mb-2">Strengths</p>
                <p className="text-foreground">Pixel-perfect UI with lightweight performance and consistent execution.</p>
              </div>
              <div className="lux-card p-4 rounded-xl">
                <p className="text-sm text-foreground/60 uppercase tracking-[0.2em] mb-2">Collaboration</p>
                <p className="text-foreground">Clear communicator—comfortable working with designers, engineers, and business stakeholders..</p>
              </div>
              <div className="lux-card p-4 rounded-xl">
                <p className="text-sm text-foreground/60 uppercase tracking-[0.2em] mb-2">Exploration</p>
                <p className="text-foreground">Continuously learning cybersecurity and automation to ensure scalable and maintainable product quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" ref={sectionRefs.skills} className="py-28 px-4 md:px-6 relative">
        <div className="absolute inset-0 cyberpunk-grid opacity-10 -z-10"></div>
        <div className="max-w-6xl mx-auto section-veil">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-2">Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">Expertise</h2>
              <p className="text-foreground/75 mt-3 max-w-2xl">
                Here’s the technology stack I use to build polished digital experiences—crafted with clean, maintainable, and production-ready code.
              </p>
            </div>
            <div className="lux-card rounded-xl px-5 py-4 text-sm text-primary">
              open for freelance & Collaboration.
            </div>
          </div>

          <div className="reveal fade-bottom">
            <SkillGrid />
          </div>
        </div>
      </section>

      <section id="projects" ref={sectionRefs.projects} className="py-28 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto section-veil">
          <div className="space-y-4 mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">Projects</h2>
            <p className="text-foreground/75 max-w-3xl">
           Real projects — designed with detail, engineered for performance, and built with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((_, index) => (
              <div key={index} className="reveal fade-bottom" style={{ transitionDelay: `${index * 0.1}s` }}>
                <ProjectCard index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" ref={sectionRefs.certifications} className="py-28 px-4 md:px-6 relative">
        <div className="absolute inset-0 cyberpunk-grid opacity-10 -z-10"></div>
        <div className="max-w-7xl mx-auto section-veil">
          <div className="space-y-4 mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Validation</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">Certifications</h2>
            <p className="text-foreground/75 max-w-3xl">
              Verified achievements that reinforce my expertise and commitment to continuous learning.
            </p>
          </div>

          <div className="reveal fade-bottom">
            <CertificationGrid />
          </div>
        </div>
      </section>

      <section id="experience" ref={sectionRefs.experience} className="py-28 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto section-veil">
          <div className="space-y-4 mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Journey</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">Education & Experience</h2>
            <p className="text-foreground/75">
              Every step of my learning and career path reflects my passion for technology, design, and crafting digital experiences that feel intentional and impactful.
            </p>
          </div>

          <div className="reveal fade-bottom">
            <Timeline />
          </div>
        </div>
      </section>

      <section id="contact" ref={sectionRefs.contact} className="py-28 px-4 md:px-6 relative">
        <div className="absolute inset-0 cyberpunk-grid opacity-10 -z-10"></div>
        <div className="max-w-7xl mx-auto section-veil">
          <div className="space-y-4 mb-12 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold gradient-text">Contact</h2>
            <p className="text-foreground/75 max-w-3xl">
              Ready to discuss ideas or collaborate? Send a message or reach out through the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal fade-bottom space-y-6">
              <div className="space-y-4">
                <a
                  href="mailto:rafiiqbal2407@gmail.com"
                  className="flex items-center p-4 lux-card rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
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
                  className="flex items-center p-4 lux-card rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <p className="text-foreground">github.com/rafiiiqball24</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rafi-iqbal-72a038335 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 lux-card rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/in/rafi-iqbal</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/rafi_iqbal_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 lux-card rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Instagram</p>
                    <p className="text-foreground">@rafi_iqbal_</p>
                  </div>
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Comments</h3>
                <CommentForm />
              </div>
            </div>

            <div className="reveal fade-bottom" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send Message To My Email</h3>
              <div className="lux-card rounded-2xl p-6 border border-primary/20">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-6 bg-[#050404]/90 text-foreground border-t border-primary/15">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:rafiiqbal2407@gmail.com"
              className="p-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:border-primary/60 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rafiiiqball24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:border-primary/60 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafi-iqbal-rendy-syachputra-757248368"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:border-primary/60 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/rafi_iqbal_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:border-primary/60 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-foreground/70">Ac {new Date().getFullYear()} Rafi Iqbal. Crafted in black & gold.</p>
        </div>
      </footer>
    </main>
  )
}
