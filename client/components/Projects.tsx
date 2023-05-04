import { useState } from 'react'
import ProjectsNavBar from './ProjectsNavBar'
import Project from './Project'
import { projectData } from '../project-data/projectElements'

export default function Projects() {
  const [currentlyShown, setCurrentlyShown] = useState('wordleLike')

  return (
    <>
      <div className=" bg-white grid place-items-center">
        <h2 className="font-black text-gray-800 md:text-3xl text-xl pb-3">
          Projects
        </h2>
        <p className="md:text-lg text-gray-500 text-base">
          Check out the cool projects I worked on at Dev Academy, and in my free
          time.
        </p>
        <ProjectsNavBar
          currentlyShown={currentlyShown}
          setCurrentlyShown={setCurrentlyShown}
        />
      </div>
      <Project project={projectData[currentlyShown] as JSX.Element} />
    </>
  )
}
