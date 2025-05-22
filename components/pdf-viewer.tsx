"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-gray-700">
          <FileText className="h-4 w-4 mr-2" />
          Lihat PDF
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full mt-4">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title={title}
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
