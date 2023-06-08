import { useState } from 'react'
import ProjectsNavBar from './ProjectsNavBar'
import Project from './Project'
import { projectsData } from '../project-data/projectElements'

export default function Projects() {
  const [currentlyShown, setCurrentlyShown] = useState(projectsData[0].name)

  return (
    <div className="">
      <div className="  max-w-xs md:max-w-5xl mx-auto">
        <a id="projects" href="#projects">
          <h2 className="font-black text-gray-800 dark:text-gray-300 md:text-3xl text-xl pb-3 text-center">
            Projects
          </h2>
        </a>
        <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base text-center">
          {`Check out the cool projects I've worked on at Dev Academy, and in my free
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
