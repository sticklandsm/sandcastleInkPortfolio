import { useEffect, useState } from 'react'
import ProjectsNavBar from './ProjectsNavBar'
import Project from './Project'
import { projectsData } from '../project-data/projectElements'
import { useTransition, animated } from '@react-spring/web'

export default function Projects() {
  const [currentlyShown, setCurrentlyShown] = useState(projectsData[0].name)
  const projectNames = projectsData.map((p) => p.name)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = projectNames.indexOf(currentlyShown)
      if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % projectNames.length
        setCurrentlyShown(projectNames[nextIndex])
      } else if (event.key === 'ArrowLeft') {
        const prevIndex =
          (currentIndex - 1 + projectNames.length) % projectNames.length
        setCurrentlyShown(projectNames[prevIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentlyShown, projectNames]) // Dependencies array

  const transitions = useTransition(
    projectsData.filter((project) => project.name === currentlyShown),
    {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
      keys: (project) => project.name,
    }
  )

  // Correctly typed static styles
  const staticStyles: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
  }

  return (
    <div className="py-10">
      <div className="max-w-xs md:max-w-5xl mx-auto">
        <h2 className="font-black text-gray-800 dark:text-gray-300 md:text-3xl text-xl pb-3 text-center">
          Projects
        </h2>
        <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base text-center">
          {`Check out the cool projects I've worked on at Dev Academy, and in my free time.`}
        </p>
        <ProjectsNavBar
          currentlyShown={currentlyShown}
          setCurrentlyShown={setCurrentlyShown}
        />
        <div style={{ position: 'relative' }}>
          {transitions((style, project) => (
            <animated.div style={{ ...style, ...staticStyles }}>
              <Project project={project} />
            </animated.div>
          ))}
          {/* Spacer element to extend the height of the page */}
          <div className="md:h-[100vh] h-[160vh]"></div>
        </div>
      </div>
    </div>
  )
}
