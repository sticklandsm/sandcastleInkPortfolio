import { Projectdata, projectsData } from '../project-data/projectElements'

interface Props {
  currentlyShown: string
  setCurrentlyShown: React.Dispatch<React.SetStateAction<string>>
}

const selectedStyle = { backgroundColor: 'black', color: 'white' }

export default function ProjectsNavBar(props: Props) {
  function changeMenu(evt: React.MouseEvent<HTMLButtonElement>) {
    const buttonName = (evt.target as HTMLButtonElement).name
    props.setCurrentlyShown(() => buttonName)
    console.log(props.currentlyShown)
  }

  return (
    <>
      <nav className="flex justify-center items-center pt-8 pb-5">
        <ul className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          {projectsData.map((project: Projectdata) => {
            return (
              <li
                key={project.title}
                className="bg-gray-200 px-3 py-1 rounded-full text-s  text-gray-800  md:block"
                style={
                  props.currentlyShown === project.name ? selectedStyle : {}
                }
              >
                <button name={project.name} onClick={changeMenu}>
                  {project.title}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
