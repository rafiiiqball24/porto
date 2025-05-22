import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CertificatePageProps {
  params: {
    id: string
  }
}

export default function CertificatePage({ params }: CertificatePageProps) {
  // Simulasi data sertifikat
  const certificates = [
    {
      id: "web-dev-cert",
      title: "Web Development Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "Mei 2023",
      type: "pdf",
      url: "/certificates/web-dev-cert.pdf",
    },
    {
      id: "flutter-cert",
      title: "Flutter Mobile Development",
      issuer: "Google Developer",
      date: "Juli 2023",
      type: "pdf",
      url: "/certificates/flutter-cert.pdf",
    },
    {
      id: "react-cert",
      title: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "September 2023",
      type: "pdf",
      url: "/certificates/react-cert.pdf",
    },
    {
      id: "nextjs-cert",
      title: "Next.js Advanced Concepts",
      issuer: "Vercel",
      date: "November 2023",
      type: "web",
      url: "https://vercel.com/certificates/example",
    },
    {
      id: "uiux-cert",
      title: "UI/UX Design Principles",
      issuer: "Udemy",
      date: "Januari 2024",
      type: "web",
      url: "https://udemy.com/certificate/example",
    },
  ]

  const certificate = certificates.find((cert) => cert.id === params.id)

  if (!certificate) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/#certifications">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Kembali
          </Link>
        </Button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{certificate.title}</h1>
            <p className="text-gray-600">
              {certificate.issuer} • {certificate.date}
            </p>
          </div>
          {certificate.type === "pdf" ? (
            <Button asChild>
              <a href={certificate.url} download>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          ) : (
            <Button asChild>
              <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Lihat Online
              </a>
            </Button>
          )}
        </div>

        {certificate.type === "pdf" ? (
          <div className="w-full h-[70vh] border border-gray-200 rounded-md overflow-hidden">
            <iframe src={certificate.url} className="w-full h-full" title={certificate.title} allowFullScreen />
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">
              Sertifikat ini tersedia secara online. Klik tombol di bawah untuk melihatnya.
            </p>
            <Button size="lg" asChild>
              <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Buka Sertifikat Online
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
