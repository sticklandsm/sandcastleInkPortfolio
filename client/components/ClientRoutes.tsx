import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import CurriculumVitae from './CurriculumVitae'

export default function ClientRoutes() {
  const location = useLocation()

  return (
    <div className="route-container">
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={700} classNames="slide">
          <Routes location={location}>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculumvitae" element={<CurriculumVitae />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
