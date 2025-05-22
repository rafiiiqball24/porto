import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Download } from "lucide-react"

interface CertificationProps {
  title: string
  issuer: string
  date: string
  image: string
  type: "pdf" | "web" // Tipe sertifikat: pdf atau web
  pdfUrl?: string
  webUrl?: string
  tags?: string[]
}

const Certification = ({ title, issuer, date, image, type, pdfUrl, webUrl, tags }: CertificationProps) => {
  return (
    <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 card-3d">
      <div className="relative h-48 w-full overflow-hidden border-b border-border group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <p className="text-sm text-foreground/60">
          {issuer} • {date}
        </p>
      </CardHeader>
      <CardContent>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {type === "pdf" && pdfUrl && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="text-foreground hover:text-primary hover:border-primary transition-colors"
              asChild
            >
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                View PDF
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-foreground hover:text-primary hover:border-primary transition-colors"
              asChild
            >
              <a href={pdfUrl} download>
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </Button>
          </>
        )}
        {type === "web" && webUrl && (
          <Button
            variant="outline"
            size="sm"
            className="text-foreground hover:text-primary hover:border-primary transition-colors"
            asChild
          >
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export function CertificationGrid() {
  const certifications: CertificationProps[] = [
    {
      title: "Database Progaming With SQL",
      issuer: "Oracle Academy",
      date: "Oktober 2024",
      image: "/photos/sertif1.png",
      type: "pdf",
      pdfUrl: "/certificate/certif1.pdf", // Path ke file PDF
      tags: ["MySQL", "Database"],
    },
    {
      title: "Database Design With SQL",
      issuer: "Oracle Academy",
      date: "Oktober 2024",
      image: "/photos/sertif2.png",
      type: "pdf",
      pdfUrl: "/certificate/certif2.pdf", // Path ke file PDF
      tags: ["MySQL", "Database"],
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and Linkedln  ",
      date: "November 2024",
      image: "/photos/sertif3.png",
      type: "pdf",
      pdfUrl: "/certificate/certif3.pdf", // Path ke file PDF
      tags: ["AI", "Machine Learning"],
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "Januari 2025",
      image: "/photos/sertif4.png",
      type: "web",
      webUrl: "https://www.credly.com/badges/a8758c5b-eb39-4dbd-adb1-257a26deb0db/public_url", // URL ke sertifikat online
      tags: ["Network", "Cisco"],
    },
    {
      title: "IC3 Digital Literacy Certification GS6 Level 1",
      issuer: "Certiport",
      date: "Desember 2022",
      image: "/photos/sertif5.png",
      type: "web",
      webUrl: "https://www.credly.com/badges/d0653c32-84bd-4a67-9785-46ad33512c7b/public_url", // URL ke sertifikat online
      tags: ["Digital Content", "Digital Literacy"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <Certification
          key={index}
          title={cert.title}
          issuer={cert.issuer}
          date={cert.date}
          image={cert.image}
          type={cert.type}
          pdfUrl={cert.pdfUrl}
          webUrl={cert.webUrl}
          tags={cert.tags}
        />
      ))}
    </div>
  )
}
