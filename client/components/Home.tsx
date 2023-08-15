import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="mb-36 dark:bg-slate-800 dark:text-white ">
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}
