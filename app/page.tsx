import Image from "next/image"
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
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

const featuredProjects = [
  {
    number: "Featured / 01",
    title: "Deep Sky Villa",
    description:
      "A hospitality website for a villa stay in Karimunjawa, built to make the atmosphere, accommodation, and booking journey feel clear from the first screen.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221446.png",
    imageAlt: "Deep Sky Villa homepage showing the villa grounds and pool",
    links: [{ label: "Visit website", href: "https://deepsky-villa.com/" }],
  },
  {
    number: "Featured / 02",
    title: "Grand Mega Diving Resort",
    description:
      "A resort website that presents rooms, facilities, and the route to reserve a stay through an immersive, image-led experience.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221015.png",
    imageAlt: "Grand Mega Diving Resort homepage showing a resort room",
    links: [{ label: "Visit website", href: "https://grandmegadivingresort.id/" }],
  },
  {
    number: "Featured / 03",
    title: "Srikandi Group",
    description:
      "A company website for Srikandi Group that helps visitors explore its housing and company information with a direct, approachable interface.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221034.png",
    imageAlt: "Srikandi Group homepage showing a housing development",
    links: [{ label: "Visit website", href: "https://srikandigroup.com/" }],
  },
  {
    number: "Featured / 04",
    title: "CreativLabz Affiliate Center",
    description:
      "A focused affiliate dashboard for monitoring performance, sharing referral links, and managing account activity within the CreativLabz commerce ecosystem.",
    tags: ["Vue.js", "Tailwind CSS", "Responsive UI"],
    image: "/porto/porto7.png",
    imageAlt: "CreativLabz affiliate dashboard showing referral tools and performance cards",
    links: [{ label: "Visit website", href: "https://creativlabz.co.id/" }],
  },
]

const moreProjects = [
  {
    number: "Archive / 05",
    title: "PHRI Shop",
    description:
      "An e-commerce experience for Perhimpunan Hotel dan Restoran Indonesia, built around clear discovery, approachable navigation, and responsive storefront presentation.",
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    image: "/porto/porto8.png",
    imageAlt: "PHRI Shop landing page with an orange retail campaign hero",
    links: [{ label: "Visit website", href: "https://shop-phri.can.co.id/" }],
  },
  {
    number: "Archive / 06",
    title: "Flexy Mobile App",
    description:
      "A mobile ticketing concept developed with a multidisciplinary student team, connecting a Flutter interface with a Laravel backend and a tested Figma prototype.",
    tags: ["Flutter", "Laravel", "Figma"],
    image: "/porto/porto2.jpg",
    imageAlt: "Flexy mobile app project team after a classroom presentation",
    links: [{ label: "Open prototype", href: "https://www.figma.com/proto/lwnoA9GxUdOjM9XEPhOlPV/flexyApp?node-id=242-61&p=f&t=E98sbroYmi5Op61V-1&scaling=scale-down&content-scaling=fixed&page-id=27%3A25&starting-point-node-id=100%3A97&show-proto-sidebar=1" }],
  },
  {
    number: "Archive / 07",
    title: "Online Examination App",
    description: "A browser-based TOEFL testing interface with participant, question, schedule, and result management.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/porto/porto1.png",
    imageAlt: "Online examination admin dashboard",
    links: [{ label: "View on GitHub", href: "https://github.com/rafiiiqball24/aplikasi-ujian-online.git" }],
  },
  {
    number: "Archive / 08",
    title: "IoT Parking System",
    description: "An Arduino prototype that simulates parking availability and entry management using connected sensors.",
    tags: ["Arduino", "IoT", "C++"],
    image: "/porto/porto 5.jpg",
    imageAlt: "IoT parking system project team presenting the Arduino prototype",
    links: [
      { label: "Report", href: "/porto/KELOMPOK_4_Car Parking System.pdf" },
      { label: "Video", href: "/porto/porto.mp4" },
    ],
  },
  {
    number: "Archive / 09",
    title: "Unity Game Collection",
    description: "Three small games assembled in a single Unity project as an exploration of gameplay systems and interaction.",
    tags: ["Unity", "C#", "Game Design"],
    image: "/porto/porto3.jpg",
    imageAlt: "Unity game project team presentation",
    links: [
      { label: "View on GitHub", href: "https://github.com/rafiiiqball24/games.git" },
      { label: "Project files", href: "/porto/GAME.zip" },
    ],
  },
  {
    number: "Archive / 10",
    title: "Cinemate UI/UX",
    description: "A mobile streaming concept focused on movie discovery, browsing patterns, and a familiar entertainment interface.",
    tags: ["Figma", "Mobile UI", "UX Design"],
    image: "/porto/porto6.png",
    imageAlt: "Cinemate mobile streaming app interface",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate?node-id=87-249&t=Y5kIXNK8Rres11VP-1",
      },
    ],
  },
]

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
  return (
    <>
      <SiteNav />
      <MotionCanvas />

      <main id="main-content">
        <section id="top" className="hero">
          <div className="site-shell hero-grid">
            <Reveal>
              <p className="eyebrow text-[var(--forest)]">Frontend developer · Indonesia</p>
              <h1 className="hero-title">
                Clear ideas, <em>carefully</em> built.
              </h1>
              <p className="hero-copy">
                I&apos;m Rafi Iqbal, a frontend web developer focused on responsive, high-performance websites and interface systems. I turn visual direction into accessible, maintainable experiences with Vue, Nuxt, and Tailwind CSS.
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

            <Reveal className="portrait-wrap" delay={120}>
              <div className="portrait-frame">
                <Image
                  src="/photos/profile3.png"
                  alt="Portrait of Rafi Iqbal"
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
                My background moves between software and visual production. That combination helps me think about both how an interface works and how it feels to use.
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
                  <strong>7</strong>
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
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/rafi-iqbal-72a038335"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
                <a
                  className="social-link"
                  href="https://instagram.com/rafi_iqbal_"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p>© {new Date().getFullYear()} Rafi Iqbal. Designed and built with intention.</p>
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
