import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, FileCode, Download, FileText } from "lucide-react"

interface ProjectCardProps {
  index: number
}

export const projects = [
  {
    title: "CreativLabz web affiliate system",
    description: "affiliate system for CreativLabz company.",
    technologies: ["Vue.js", "Tailwind CSS"],
    image: "/porto/porto7.png",
    category: "web",
    demoType: "website",
    websiteUrl: "https://creativlabz.co.id/",
  },
  {
    title: "PHRI SHOP",
    description: "make a shop for Perhimpunan Hotel Dan Restoran Indonesia.",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    image: "/porto/porto8.png",
    category: "web",
    demoType: "website",
    websiteUrl: "https://shop-phri.can.co.id/",
  },
  {
    title: "Ujian Online App",
    description: "Online Testing Web for TOEFL exam",
    technologies: ["React", "MySQL"],
    image: "/porto/porto1.png",
    category: "web",
    demoType: "none", // Changed from "video" to "none"
    githubUrl: "https://github.com/rafiiiqball24/aplikasi-ujian-online.git",
  },
  {
    title: "Flexy Mobile App",
    description: "Ticketing mobile application",
    technologies: ["Flutter", "Laravel"],
    image: "/porto/porto2.jpg",
    category: "mobile",
    demoType: "prototype",
    prototypeUrl:
      "https://www.figma.com/proto/lwnoA9GxUdOjM9XEPhOlPV/flexyApp?node-id=242-61&p=f&t=E98sbroYmi5Op61V-1&scaling=scale-down&content-scaling=fixed&page-id=27%3A25&starting-point-node-id=100%3A97&show-proto-sidebar=1",
    githubUrl: "https://github.com/rafiiiqball24/appflexy.git",
  },
  {
    title: "IOT Car Parking System",
    description: "iot project simulating car parking system",
    technologies: ["Arduino"],
    image: "/porto/porto 5.jpg",
    category: "iot",
    demoType: "iot",
    pdfReportUrl: "/porto/KELOMPOK_4_Car Parking System.pdf",
    videoUrl: "/porto/porto.mp4",
    githubUrl: "https://github.com/username/project",
  },
  {
    title: "Game Development",
    description: "creating 3 games in 1 unity-based application",
    technologies: ["Unity"],
    image: "/porto/porto3.jpg",
    category: "game",
    demoType: "game",
    apkUrl: "/porto/GAME.zip",
    githubUrl: "https://github.com/rafiiiqball24/games.git",
  },
  {
    title: "UI UX Design Mobile App",
    description: "creating a ui ux design of a film streaming mobile application",
    technologies: ["Figma"],
    image: "/porto/porto6.png",
    category: "uiux",
    demoType: "prototype",
    prototypeUrl:
      "https://www.figma.com/design/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate?node-id=87-249&t=Y5kIXNK8Rres11VP-1",
  },
]

export function ProjectCard({ index }: ProjectCardProps) {

  const project = projects[index % projects.length]

  // Function to render the appropriate demo button based on demo type
  const renderDemoButton = () => {
    switch (project.category) {
        case "web": {
        const websiteUrl = project.websiteUrl || project.projectUrl
        if (project.demoType === "video" && project.videoUrl) {
          return (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors"
              asChild
            >
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Video Demo
              </a>
            </Button>
          )
        } else if ((project.demoType === "website" || (!project.demoType && websiteUrl)) && websiteUrl) {
          return (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors"
              asChild
            >
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )
        }
        return null
       } // For demoType "none"
      case "iot":
        return (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors" asChild>
              <a href={project.pdfReportUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                PDF Report
              </a>
            </Button>
            <Button variant="outline" size="sm" className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors" asChild>
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Video
              </a>
            </Button>
          </div>
        )
      case "game":
        return (
          <Button variant="outline" size="sm" className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors" asChild>
            <a href={project.apkUrl} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Download APK
            </a>
          </Button>
        )
      case "mobile":
        return (
          <Button variant="outline" size="sm" className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors" asChild>
            <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
              <FileCode className="h-4 w-4 mr-2" />
              Prototype
            </a>
          </Button>
        )
      case "uiux":
        return (
          <Button variant="outline" size="sm" className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors" asChild>
            <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
              <FileCode className="h-4 w-4 mr-2" />
              Figma Prototype
            </a>
          </Button>
        )
      default:
        return null
    }
  }

  return (
    <Card className="lux-card overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full flex flex-col card-3d">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-primary/20">
           {project.category !== "uiux" && project.category !== "iot" && project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="border-primary/40 bg-white/5 text-primary hover:bg-primary/15 transition-colors"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
        {project.category === "iot" ? (
          <div className="flex gap-2 flex-wrap">{renderDemoButton()}</div>
        ) : (
          renderDemoButton()
        )}
      </CardFooter>
    </Card>
  )
}
