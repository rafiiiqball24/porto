import Image from "next/image"
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Gitlab,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { MotionCanvas } from "@/components/motion-canvas"
import { ProjectGallery } from "@/components/project-gallery"
import { Reveal } from "@/components/reveal"
import { SiteNav } from "@/components/site-nav"
import { featuredProjects, moreProjects } from "@/lib/projects"
import { siteConfig } from "@/lib/site-config"

const skillGroups = [
  { title: "Frontend", skills: ["Vue.js", "React", "Next.js", "Tailwind CSS"] },
  { title: "Mobile", skills: ["Flutter", "Responsive UI", "Prototyping"] },
  { title: "Backend", skills: ["Laravel", "PHP", "MySQL", "Python"] },
  { title: "Creative", skills: ["Figma", "Photography", "Video", "UI/UX"] },
]

/*
  {
    period: "Feb 2026 - Present",
    role: "Frontend Developer",
    place: "PT Cipta Anya Nugraha · CAN Creative",
    description: "Building responsive web interfaces with Vue.js and Tailwind CSS, with attention to visual consistency, usability, and maintainable implementation.",
  },
  {
    period: "Aug — Dec 2025",
    role: "Frontend Developer Intern",
    place: "PT Cipta Anya Nugraha · CAN Creative",
    description: "Built responsive web interfaces with Vue.js and Tailwind CSS, with attention to visual consistency and usability.",
  },
  {
    period: "2023 — Present",
    role: "Informatics Engineering",
    place: "Politeknik Negeri Semarang",
    description: "Studying software development while building web, mobile, design, game, and connected-device projects.",
  },
  {
    period: "2024 — Present",
    role: "Active Member",
    place: "Polytechnic Computer Club",
    description: "Participating in software development activities and collaborative projects within the campus community.",
  },
  {
    period: "2020 — 2023",
    role: "Multimedia",
    place: "SMKN 8 Semarang",
    description: "Developed foundations in graphic design, animation, videography, photography, and web production.",
  },
]

*/

const journey = [
  {
    period: "Feb 2026 - Present",
    role: "Frontend Developer",
    place: "PT Cipta Anya Nugraha - CAN Creative",
    description: "Building responsive web interfaces with Vue.js and Tailwind CSS, with attention to visual consistency, usability, and maintainable implementation.",
  },
  {
    period: "Aug - Dec 2025",
    role: "Frontend Developer Intern",
    place: "PT Cipta Anya Nugraha - CAN Creative",
    description: "Built responsive web interfaces with Vue.js and Tailwind CSS, with attention to visual consistency and usability.",
  },
  {
    period: "2023 - 2026",
    role: "Informatics Engineering Graduate",
    place: "Politeknik Negeri Semarang",
    description: "Completed an Informatics Engineering degree while building web, mobile, design, game, and connected-device projects.",
  },
  {
    period: "2024 - 2026",
    role: "Active Member",
    place: "Polytechnic Computer Club",
    description: "Participating in software development activities and collaborative projects within the campus community.",
  },
  {
    period: "2020 - 2023",
    role: "Multimedia",
    place: "SMKN 8 Semarang",
    description: "Developed foundations in graphic design, animation, videography, photography, and web production.",
  },
]

const certificates = [
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    date: "Feb 2026",
    href: "/photos/doc (2)_page-0001.jpg",
  },
  {
    title: "TOEIC Listening & Reading (Score 680)",
    issuer: "ETS / TOEIC",
    date: "Nov 2025",
    href: "/photos/TOEIC_page-0001.jpg",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "Oct 2024",
    href: "/certificate/certif1.pdf",
  },
  {
    title: "Database Design with SQL",
    issuer: "Oracle Academy",
    date: "Oct 2024",
    href: "/certificate/certif2.pdf",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Nov 2024",
    href: "/certificate/certif3.pdf",
  },
  {
    title: "CCNA: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    date: "Jan 2025",
    href: "https://www.credly.com/badges/a8758c5b-eb39-4dbd-adb1-257a26deb0db/public_url",
  },
  {
    title: "IC3 Digital Literacy GS6 Level 1",
    issuer: "Certiport",
    date: "Dec 2022",
    href: "https://www.credly.com/badges/d0653c32-84bd-4a67-9785-46ad33512c7b/public_url",
  },
]

const tickerItems = [
  "Frontend web developer",
  "Vue.js & Nuxt.js",
  "Responsive websites",
  "Tailwind CSS",
  "Accessible interfaces",
  "Web performance",
  "Design systems",
  "Based in Semarang",
]

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} Portfolio`,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile-page`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        image: `${siteConfig.url}/photos/profile3.png`,
        email: `mailto:${siteConfig.email}`,
        jobTitle: "Frontend Developer",
        description: siteConfig.description,
        knowsAbout: ["Vue.js", "Nuxt.js", "React", "Next.js", "Tailwind CSS", "Flutter", "Laravel", "Web accessibility", "Responsive web design"],
        sameAs: [siteConfig.github, siteConfig.gitlab, siteConfig.linkedin, siteConfig.instagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Semarang",
          addressRegion: "Central Java",
          addressCountry: "ID",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Politeknik Negeri Semarang",
        },
        worksFor: {
          "@type": "Organization",
          name: "PT Cipta Anya Nugraha",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Selected frontend and software development projects",
        numberOfItems: featuredProjects.length + moreProjects.length,
        itemListElement: [...featuredProjects, ...moreProjects].map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            image: `${siteConfig.url}${encodeURI(project.image)}`,
            creator: { "@id": `${siteConfig.url}/#person` },
            keywords: project.tags.join(", "),
            url: `${siteConfig.url}/projects/${project.slug}`,
            sameAs: project.links.find((link) => link.href.startsWith("http"))?.href,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteNav />
      <MotionCanvas />

      <main id="main-content">
        <section id="top" className="hero">
          <div className="site-shell hero-grid">
            <Reveal initiallyVisible>
              <p className="eyebrow text-[var(--forest)]">Rafi Iqbal Rendy Syachputra · Frontend developer</p>
              <h1 className="hero-title">
                Frontend development, <em>carefully</em> built.
              </h1>
              <p className="hero-copy">
                I&apos;m Rafi Iqbal Rendy Syachputra, a frontend web developer focused on responsive, high-performance websites and interface systems. I turn visual direction into accessible, maintainable experiences with Vue, Nuxt, and Tailwind CSS.
              </p>
              <div className="button-row">
                <a className="button-primary" href="#work">
                  Explore selected work
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className="button-secondary" href="/porto/cv.pdf" download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--ink-soft)]">
                <MapPin className="h-4 w-4 text-[var(--clay)]" aria-hidden="true" />
                Semarang, Central Java
              </p>
            </Reveal>

            <Reveal className="portrait-wrap" initiallyVisible>
              <div className="portrait-frame">
                <Image
                  src="/photos/profile3.png"
                  alt="Portrait of Rafi Iqbal Rendy Syachputra"
                  fill
                  priority
                  sizes="(max-width: 960px) 90vw, 36vw"
                  className="portrait-image"
                />
              </div>
              <div className="availability" aria-label="Open for collaboration">
                <span>Open for good work.</span>
                <span>Let&apos;s collaborate</span>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group}>
                {tickerItems.map((item) => (
                  <span className="ticker-item" key={`${group}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="work" className="work-section section-space">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow text-[var(--sun)]">Selected work</p>
              <h2 className="section-heading">A few things I&apos;ve helped shape.</h2>
              <p className="section-intro">
                Recent web work across hospitality, property, commerce, and product interfaces—followed by earlier experiments that show the range behind the work.
              </p>
            </Reveal>

            <ProjectGallery featuredProjects={featuredProjects} moreProjects={moreProjects} />
          </div>
        </section>

        <section id="profile" className="section-space">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow text-[var(--clay)]">Profile</p>
              <h2 className="section-heading">Design sense. Engineering discipline.</h2>
              <p className="section-intro">
                Rafi Iqbal Rendy Syachputra brings together software development and visual production. That combination helps me think about both how an interface works and how it feels to use.
              </p>
            </Reveal>

            <div className="profile-grid">
              <Reveal className="profile-card profile-card-large">
                <h3>How I work</h3>
                <p className="profile-quote">Start with clarity. Add character. Remove everything that gets in the way.</p>
              </Reveal>
              <Reveal className="profile-card" delay={80}>
                <h3>Current focus</h3>
                <p>Responsive frontend systems, thoughtful micro-interactions, and accessible interfaces that stay maintainable as a product grows.</p>
              </Reveal>
              <Reveal className="profile-card" delay={140}>
                <div className="profile-stat">
                  <div>
                    <h3>Projects represented</h3>
                    <p>Web, mobile, IoT, game, and product design.</p>
                  </div>
                  <strong>10</strong>
                </div>
              </Reveal>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <Reveal className="skill-group" key={group.title} delay={index * 60}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-space pt-0">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow text-[var(--forest)]">Credentials</p>
              <h2 className="section-heading">Verified learning, kept concise.</h2>
            </Reveal>

            <div className="certificate-list">
              {certificates.map((certificate, index) => (
                <Reveal key={certificate.title} delay={index * 40}>
                  <a
                    className="certificate-row"
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="certificate-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="certificate-title">{certificate.title}</span>
                    <span className="certificate-issuer">{certificate.issuer}</span>
                    <span className="certificate-date">{certificate.date}</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="journey-section section-space">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow text-[var(--forest)]">Journey</p>
              <h2 className="section-heading">Learning by making real things.</h2>
            </Reveal>

            <div className="journey-list">
              {journey.map((item, index) => (
                <Reveal className="journey-item" key={`${item.period}-${item.role}`} delay={index * 45}>
                  <span className="journey-period">{item.period}</span>
                  <div>
                    <div className="journey-role">{item.role}</div>
                    <p className="mt-2 text-sm font-semibold text-[var(--clay)]">{item.place}</p>
                  </div>
                  <p className="journey-copy">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-space">
          <div className="site-shell contact-grid">
            <Reveal>
              <p className="eyebrow text-[var(--sun)]">Contact</p>
              <h2 className="contact-title">Let&apos;s make something clear and useful.</h2>
              <p className="contact-copy">
                Have a project, internship opportunity, or collaboration in mind? Send the context and I&apos;ll respond as soon as I can.
              </p>
              <div className="social-list">
                <a className="social-link" href="mailto:rafiiqbal2407@gmail.com">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </a>
                <a
                  className="social-link"
                  href="https://github.com/rafiiiqball24"
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
                <a
                  className="social-link"
                  href={siteConfig.gitlab}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <Gitlab className="h-4 w-4" aria-hidden="true" /> GitLab
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/rafi-iqbal-72a038335"
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
                <a
                  className="social-link"
                  href="https://instagram.com/rafi_iqbal_"
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Designed and built with intention.</p>
          <a className="inline-flex min-h-11 items-center gap-2 hover:text-[var(--sun)]" href="#top">
            Back to top
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/6281327381766"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rafi on WhatsApp"
      >
        <span>Chat me</span>
        <Image src="/whatsaap.png" alt="" width={64} height={64} aria-hidden="true" />
      </a>
    </>
  )
}
