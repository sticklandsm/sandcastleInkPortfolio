import Header from './Header'
import Footer from './Footer'
import ClientRoutes from './ClientRoutes'

import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

// Setting workerSrc to use the worker from 'pdfjs-dist'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 dark:text-white flex flex-col">
      <Header />
      <ClientRoutes />
      <Footer />
    </div>
  )
}

export default App
