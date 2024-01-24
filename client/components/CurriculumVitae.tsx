/* <iframe
        src="/cv/SeanSticklandCV.pdf"
        width="100%"
        height="1000px" // Adjust height as needed
        style={{ border: 'none' }}
        title="CurriculumVitae"
      /> */

import PdfViewer from './PdfViewer'

export default function CurriculumVitae() {
  return (
    <div className="flex flex-col items-center space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white dark:border-0">
      <a
        href="/cv/SeanSticklandCV.pdf"
        download
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Download CV
      </a>
      <iframe
        src="/cv/SeanSticklandCV.pdf"
        width="100%"
        height="1000px" // Adjust height as needed
        style={{ border: 'none' }}
        title="CurriculumVitae"
      />
      {/* <div className="scale-50  md:scale-100">
        <div className="mt-0 pdf-container">
          <PdfViewer file="/cv/SeanSticklandCV.pdf" />
        </div>
      </div> */}
    </div>
  )
}
