import { CSSProperties, useState } from 'react'
import ProjectsNavBar from './ProjectsNavBar'
import Project from './Project'
import { projectsData } from '../project-data/projectElements'
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from '@react-spring/web'

export default function Projects() {
  const [currentlyShown, setCurrentlyShown] = useState(projectsData[0].name)

  const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = projectsData.map((project) => {
    const Page = ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
      <animated.div
        style={{ ...style, background: 'lightpink' }}
        key={project.name}
      >
        <Project project={project} />
      </animated.div>
    )
    Page.displayName = project.name
    return Page
  })

  console.log(pages, 'sean')

  return (
    <div className=" py-10">
      <div className="  max-w-xs md:max-w-5xl mx-auto">
        <h2 className="font-black text-gray-800 dark:text-gray-300 md:text-3xl text-xl pb-3 text-center">
          Projects
        </h2>

        <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base text-center">
          {`Check out the cool projects I worked on at Dev Academy, and in my free
        time.`}
        </p>
        <ProjectsNavBar
          currentlyShown={currentlyShown}
          setCurrentlyShown={setCurrentlyShown}
        />
        {projectsData.map((project) => {
          return (
            project.name === currentlyShown && (
              <div key={project.name}>
                <Project project={project} />
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
