"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

type ProjectLink = {
  label: string
  href: string
}

type Project = {
  number: string
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  links: ProjectLink[]
}

type ProjectGalleryProps = {
  featuredProjects: Project[]
  moreProjects: Project[]
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="project-links">
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
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <article className="project-feature" key={project.title}>
            <div className="project-visual">
              <div className="project-image">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 960px) 100vw, 58vw" className="object-cover object-center" />
              </div>
            </div>
            <div className="min-w-0">
              <p className="project-count">{project.number}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list" aria-label={`Technologies used for ${project.title}`}>
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <ProjectLinks links={project.links} />
            </div>
          </article>
        ))}
      </div>

      <div className="more-projects-control">
        <div>
          <p className="project-count">Project archive</p>
          <p>More product, mobile, IoT, and interface explorations—each with its own visual preview.</p>
        </div>
        <button
          className="button-secondary"
          type="button"
          aria-expanded={showMore}
          aria-controls="more-projects"
          onClick={() => setShowMore((current) => !current)}
        >
          {showMore ? "Hide other projects" : "View more projects"}
          {showMore ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      {showMore && (
        <div id="more-projects" className="more-projects-grid">
          {moreProjects.map((project) => (
            <article className="more-project-card" key={project.title}>
              <div className="more-project-image">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" className="object-cover object-center" />
              </div>
              <div className="more-project-content">
                <p className="project-count">{project.number}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list" aria-label={`Technologies used for ${project.title}`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectLinks links={project.links} />
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
