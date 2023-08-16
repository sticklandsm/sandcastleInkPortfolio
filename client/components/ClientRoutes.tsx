import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'

export default function ClientRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
