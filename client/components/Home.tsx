import AboutMe from './AboutMe'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="grid place-items-center">
      <AboutMe />

      <Projects />
    </div>
  )
}
