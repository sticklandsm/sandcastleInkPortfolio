import { Projectdata, projectsData } from '../project-data/projectElements'

interface Props {
  currentlyShown: string
  setCurrentlyShown: React.Dispatch<React.SetStateAction<string>>
}

const selectedStyle = { backgroundColor: 'black', color: 'white' }

export default function ProjectsNavBar(props: Props) {
  function changeMenu(evt: React.MouseEvent<HTMLButtonElement>) {
    const buttonName = evt.currentTarget.getAttribute('data-name')
    if (buttonName) {
      props.setCurrentlyShown(() => buttonName)
      console.log(props.currentlyShown)
    }
  }

  return (
    <>
      <nav className="flex justify-center items-center  pb-5">
        <ul className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white dark:border-0">
          {projectsData.map((project: Projectdata) => {
            return (
              <button
                key={project.title}
                data-name={project.name}
                onClick={changeMenu}
                className="cursor-pointer justify-center items-center flex bg-gray-200 px-3 py-1 rounded-full text-s text-gray-800 transition-colors duration-300 ease-in-out"
                style={
                  props.currentlyShown === project.name ? selectedStyle : {}
                }
              >
                {project.title}
              </button>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
