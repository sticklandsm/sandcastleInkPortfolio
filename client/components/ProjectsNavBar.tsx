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

  //https://gemini-summits-production.up.railway.app/
  return (
    <>
      <nav className="flex justify-center items-center pt-8 pb-5">
        <ul className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <li
            className="bg-gray-200 px-3 py-1 rounded-full text-s  text-gray-800 hidden md:block"
            style={props.currentlyShown === 'wordleLike' ? selectedStyle : {}}
          >
            <button name="wordleLike" onClick={changeMenu}>
              Wordle Like Game
            </button>
          </li>
          <li
            className="bg-gray-200 px-3 py-1 rounded-full text-s  text-gray-800 hidden md:block"
            style={
              props.currentlyShown === 'restaurantOrderingApp'
                ? selectedStyle
                : {}
            }
          >
            <button name="restaurantOrderingApp" onClick={changeMenu}>
              Restaurant Ordering App
            </button>
          </li>
          <li
            className="bg-gray-200 px-3 py-1 rounded-full text-s  text-gray-800 hidden md:block"
            style={
              props.currentlyShown === 'aiAdventureGame' ? selectedStyle : {}
            }
          >
            <button name="aiAdventureGame" onClick={changeMenu}>
              AI Adventure Game
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
