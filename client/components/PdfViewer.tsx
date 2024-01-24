import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

const PdfViewer: React.FC<{ file: string }> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <div key={`page_${index + 1}`}>
          {' '}
          <Page
            renderTextLayer={false}
            renderAnnotationLayer={false}
            pageNumber={index + 1}
          />
        </div>
      ))}
    </Document>
  )
}

export default PdfViewer
