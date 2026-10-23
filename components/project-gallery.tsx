import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import type { Project, ProjectLink } from "@/lib/projects"

type ProjectGalleryProps = {
  featuredProjects: Project[]
  moreProjects: Project[]
}

function ProjectLinks({ links, project }: { links: ProjectLink[]; project: Project }) {
  return (
    <div className="project-links">
      <Link className="text-link" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
        Case study
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {links.map((link) => {
        const isDownload = link.href.endsWith(".zip")

        return (
          <a
            className="text-link"
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
  )
}

export function ProjectGallery({ featuredProjects, moreProjects }: ProjectGalleryProps) {
  return (
    <>
      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <article className="project-feature" key={project.title}>
            <div className="project-visual">
              <div className="project-image">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 960px) calc(100vw - 2rem), 58vw" className="object-cover object-center" />
              </div>
            </div>
            <div className="min-w-0">
              <p className="project-count">{project.number}</p>
              <h3 className="project-title">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list" aria-label={`Technologies used for ${project.title}`}>
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <ProjectLinks links={project.links} project={project} />
            </div>
          </article>
        ))}
      </div>

      <details className="more-projects-disclosure">
        <summary className="more-projects-control">
          <div>
            <p className="project-count">Project archive</p>
            <p>More product, mobile, IoT, and interface explorations—each with its own visual preview.</p>
          </div>
          <span className="button-secondary">
            View more projects
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>

        <div id="more-projects" className="more-projects-grid">
          {moreProjects.map((project) => (
            <article className="more-project-card" key={project.title}>
              <div className="more-project-image">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 720px) calc(100vw - 1.25rem), 50vw" className="object-cover object-center" />
              </div>
              <div className="more-project-content">
                <p className="project-count">{project.number}</p>
                <h3>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.description}</p>
                <div className="tag-list" aria-label={`Technologies used for ${project.title}`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectLinks links={project.links} project={project} />
              </div>
            </article>
          ))}
        </div>
      </details>
    </>
  )
}
