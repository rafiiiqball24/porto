import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, FileCode } from "lucide-react"

interface ProjectCardProps {
  index: number
}

export function ProjectCard({ index }: ProjectCardProps) {
  // Sample project data
  const projects = [
    {
      title: "Ujian Online App",
      description: "Online Testing Web for TOEFL exam",
      technologies: ["React", "MySQL"],
      image: "/porto/porto1.png",
      demoType: "website", // website, video, prototype, github
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/rafiiiqball24/aplikasi-ujian-online33.git",
    },
    {
      title: "Flexy Mobile App",
      description: "Ticketing mobile application",
      technologies: ["Flutter", "Laravel"],
      image: "/porto/porto2.jpg",
      demoType: "prototype",
      demoUrl:
        "https://www.figma.com/proto/lwnoA9GxUdOjM9XEPhOlPV/flexyApp?node-id=242-61&p=f&t=E98sbroYmi5Op61V-1&scaling=scale-down&content-scaling=fixed&page-id=27%3A25&starting-point-node-id=100%3A97&show-proto-sidebar=1",
      githubUrl: "https://github.com/rafiiiqball24/appflexy.git",
    },
    {
      title: "Task Manager",
      description: "Aplikasi manajemen tugas dengan fitur reminder",
      technologies: ["React Native", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      demoType: "video",
      demoUrl: "https://youtube.com/watch?v=demo-id",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Blog Platform",
      description: "Platform blog dengan sistem manajemen konten",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      image: "/placeholder.svg?height=200&width=300",
      demoType: "website",
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Weather App",
      description: "Aplikasi cuaca dengan data real-time dan prediksi",
      technologies: ["Flutter", "REST API"],
      image: "/placeholder.svg?height=200&width=300",
      demoType: "prototype",
      demoUrl:
        "https://www.figma.com/proto/yreuCIRRNUukVBs3N2lfM9/PBL-exam?node-id=62-791&p=f&t=JDs8nfzrRu8rmCgm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=45%3A99&show-proto-sidebar=1",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard untuk monitoring aktivitas sosial media",
      technologies: ["React", "Chart.js", "Material UI"],
      image: "/placeholder.svg?height=200&width=300",
      demoType: "github",
      demoUrl: "",
      githubUrl: "https://github.com/username/project",
    },
  ]

  const project = projects[index % projects.length]

  // Function to render the appropriate demo button based on demo type
  const renderDemoButton = () => {
    switch (project.demoType) {
      case "website":
        return (
          <Button
            variant="outline"
            size="sm"
            className="text-foreground hover:text-primary hover:border-primary transition-colors"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )
      case "video":
        return (
          <Button
            variant="outline"
            size="sm"
            className="text-foreground hover:text-primary hover:border-primary transition-colors"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Play className="h-4 w-4 mr-2" />
              Video Demo
            </a>
          </Button>
        )
      case "prototype":
        return (
          <Button
            variant="outline"
            size="sm"
            className="text-foreground hover:text-primary hover:border-primary transition-colors"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <FileCode className="h-4 w-4 mr-2" />
              Prototype
            </a>
          </Button>
        )
      case "github":
      default:
        return null // GitHub button is already shown
    }
  }

  return (
    <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 h-full flex flex-col card-3d">
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
      <CardFooter className="flex justify-between pt-2 border-t border-border">
        <Button
          variant="outline"
          size="sm"
          className="text-foreground hover:text-primary hover:border-primary transition-colors"
          asChild
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </Button>
        {renderDemoButton()}
      </CardFooter>
    </Card>
  )
}
