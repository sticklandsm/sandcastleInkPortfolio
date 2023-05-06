import { Projectdata } from '../project-data/projectElements'

interface Props {
  project: Projectdata
}

export default function Project(props: Props) {
  const { name, subTitle, imagesURL, linkToProject, details, thingsUsed } =
    props.project
  return (
    <div
      style={{ height: 700 }}
      className=" flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-white"
    >
      <div className="w-full md:w-1/3  bg-white grid place-items-center">
        <img
          src={imagesURL[0]}
          alt={name + ' screenshots'}
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 className="font-black text-gray-800 md:text-xl text-lg">
          {' '}
          {subTitle}
        </h3>
        <a
          className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
          href={linkToProject}
        >
          Check it out here!
        </a>
        <p className="md:text-base text-gray-500 text-sm">{details}</p>
        <ul className=" text-sm relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          {thingsUsed.map((thingUsed, index) => {
            return (
              <li
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 hidden md:block"
              >
                {thingUsed}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
