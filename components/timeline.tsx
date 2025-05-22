import type React from "react"
import { Briefcase, GraduationCap, Users } from "lucide-react"

interface TimelineItemProps {
  year: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

const TimelineItem = ({ year, title, subtitle, description, icon, isLast = false }: TimelineItemProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg">
          {icon}
        </div>
        {!isLast && <div className="w-1 h-full bg-gradient-to-b from-primary to-primary/20 mt-4"></div>}
      </div>
      <div className="pb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
          {year}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-foreground/60 mb-3">{subtitle}</p>
        <p className="text-foreground/80 bg-card p-4 rounded-xl border border-border">{description}</p>
      </div>
    </div>
  )
}

export function Timeline() {
  const timelineItems = [
    {
      year: "2023 - Now",
      title: "Informatics Engineering",
      subtitle: "State Polytechnic of Semarang",
      description: "Focus on developing web and mobile applications with various modern technologies.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: "2024 - Now",
      title: "Active Member",
      subtitle: "Polytechnic Computer Club (PCC)",
      description: "Participate in software development activities and projects with the campus community.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      year: "2020 - 2023",
      title: "Multimedia",
      subtitle: "SMKN 8 Semarang",
      description: "Learn graphic design, animation, videography and web development basics.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: "2021",
      title: "Photographer & Videographer Internship",
      subtitle: "Lite Studio",
      description: "Responsible for taking and editing photos and videos for various client needs.",
      icon: <Briefcase className="h-5 w-5" />,
      isLast: true,
    },
  ]

  return (
    <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          icon={item.icon}
          isLast={item.isLast}
        />
      ))}
    </div>
  )
}
