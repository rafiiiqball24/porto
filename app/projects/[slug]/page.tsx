import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { BrandMark } from "@/components/brand-mark"
import { MotionCanvas } from "@/components/motion-canvas"
import { getProject, projects } from "@/lib/projects"
import { siteConfig } from "@/lib/site-config"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return {}

  const path = `/projects/${project.slug}`

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    keywords: [project.title, project.category, ...project.tags, `${siteConfig.name} portfolio`],
    alternates: { canonical: path },
    openGraph: {
      title: `${project.title} — Project by ${siteConfig.name}`,
      description: project.description,
      url: path,
      type: "article",
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Project by ${siteConfig.name}`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const projectUrl = `${siteConfig.url}/projects/${project.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}/#project`,
        url: projectUrl,
        name: project.title,
        headline: project.title,
        description: project.description,
        image: `${siteConfig.url}${encodeURI(project.image)}`,
        genre: project.category,
        keywords: project.tags.join(", "),
        inLanguage: "en",
        creator: { "@id": `${siteConfig.url}/#person`, name: siteConfig.name },
        mainEntityOfPage: projectUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Portfolio",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <MotionCanvas />

      <header className="nav-backdrop fixed inset-x-0 top-0 z-50">
        <div className="site-shell flex min-h-[4.8rem] items-center justify-between gap-5">
          <Link href="/" className="brand-link flex min-h-11 items-center gap-3">
            <BrandMark className="brand-symbol" />
            <span className="text-sm font-extrabold tracking-[-0.02em]">{siteConfig.shortName}</span>
          </Link>
          <Link className="case-back-link" href="/#work">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
        </div>
      </header>

      <main id="main-content" className="case-study-main">
        <article>
          <header className="case-hero site-shell">
            <nav className="case-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Portfolio</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.title}</span>
            </nav>
            <p className="eyebrow text-[var(--clay)]">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-lead">{project.description}</p>
            <div className="tag-list case-tags" aria-label={`Technologies used for ${project.title}`}>
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </header>

          <div className="case-visual site-shell">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) calc(100vw - 2rem), 1240px"
              className="object-cover object-center"
            />
          </div>

          <section className="case-content site-shell" aria-labelledby="project-overview">
            <div>
              <p className="eyebrow text-[var(--forest)]">Project overview</p>
              <h2 id="project-overview">A concise look at the work.</h2>
            </div>
            <div className="case-details">
              <p>{project.description}</p>
              <dl>
                <div>
                  <dt>Project type</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Technology</dt>
                  <dd>{project.tags.join(", ")}</dd>
                </div>
              </dl>
              <div className="case-actions" aria-label={`${project.title} project resources`}>
                {project.links.map((link) => {
                  const isDownload = link.href.endsWith(".zip")
                  return (
                    <a
                      className="button-primary"
                      href={link.href}
                      key={link.label}
                      target={isDownload ? undefined : "_blank"}
                      rel={isDownload ? undefined : "noopener noreferrer"}
                      download={isDownload || undefined}
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          </section>

          <aside className="case-next site-shell" aria-label="Next project">
            <p>Next project</p>
            <Link href={`/projects/${nextProject.slug}`}>
              {nextProject.title}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </aside>
        </article>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Designed and built with intention.</p>
          <Link href="/#contact">Start a conversation</Link>
        </div>
      </footer>
    </>
  )
}
