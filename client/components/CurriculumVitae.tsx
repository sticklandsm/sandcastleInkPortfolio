// import PdfViewer from './PdfViewer'

export default function CurriculumVitae() {
  return (
    <div className="py-10">
      <div className="max-w-xs md:max-w-5xl mx-auto text-center">
        <a
          href="/cv/SeanSticklandCV.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Download CV
        </a>
        <br />
        <br />

        <iframe
          src="/cv/SeanSticklandCV.pdf"
          className="w-full mx-auto"
          height="1000px" // Adjust height as needed
          style={{ border: 'none' }}
          title="CurriculumVitae"
        />
      </div>
    </div>
  )
}
