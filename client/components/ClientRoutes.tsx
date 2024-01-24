import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import CurriculumVitae from './CurriculumVitae'
import { Route, Routes } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

export default function ClientRoutes() {
  return (
    <>
      <TransitionGroup>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curriculumvitae" element={<CurriculumVitae />} />
        </Routes>
      </TransitionGroup>
    </>
  )
}
