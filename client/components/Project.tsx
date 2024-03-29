import { Projectdata } from '../project-data/projectElements'
import CarouselImage from './Carousel'

interface Props {
  project: Projectdata
}

export default function Project(props: Props) {
  const {
    subTitle,
    imagesURL,
    linkToProject,
    adminSectionLink,
    details,
    thingsUsed,
    linkToCode,
  } = props.project
  return (
    <div
      // style={{ height: 900 }}
      className=" flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl md:h-[700px] shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white dark:border-0 "
    >
      <div className="w-full md:w-1/3   grid place-items-center">
        <CarouselImage images={imagesURL} />
      </div>
      <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
        <h3 className="font-black text-gray-800 dark:text-gray-300 md:text-xl text-lg">
          {' '}
          {subTitle}
        </h3>
        <a
          className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
          target="_blank"
          rel="noreferrer"
          href={linkToProject}
        >
          Check it out here!
        </a>
        {linkToCode && (
          <a
            className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
            target="_blank"
            rel="noreferrer"
            href={linkToCode}
          >
            See the GitHub page here
          </a>
        )}
        {adminSectionLink && (
          <a
            className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
            target="_blank"
            rel="noreferrer"
            href={adminSectionLink}
          >
            See the Admin section here
          </a>
        )}

        <p
          className="md:text-base text-gray-500 dark:text-gray-400 text-sm"
          style={{ whiteSpace: 'pre-line' }}
        >
          {details}
        </p>

        <ul className="text-sm relative flex items-end flex-wrap flex-none md:flex-row rounded-xl p-3 space-y-3 md:space-x-3 max-w-xs md:max-w-3xl x-auto border border-white dark:border-0  align-middle">
          {thingsUsed.map((thingUsed, index) => {
            return (
              <li
                key={index}
                className="bg-gray-200 p-2 rounded-full text-gray-800  md:block text-center "
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
