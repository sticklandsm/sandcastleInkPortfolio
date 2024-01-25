import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  const { pathname } = useLocation()

  const activeStyle = {
    color: 'rgb(96 165 250 / var(--tw-text-opacity))',
  }

  const hoverStyle = {
    backgroundColor: 'gray.700',
  }

  const linkStyle = {
    transition: 'color 0.3s ease-in-out, background-color 0.3s ease-in-out', // Animation for both color and background
  }

  const [sandcastleKicked, kickSandcastle] = useState(false)

  const handleSandcastleClick = () => {
    kickSandcastle(!sandcastleKicked)
  }

  return (
    <>
      <nav className="top-0 rounded-md shadow-lg">
        <div className="flex-col md:flex-row max-w-screen-full flex items-center justify-center mx-auto p-4 ">
          <div className="flex items-center">
            <button
              onClick={handleSandcastleClick}
              style={{ width: '6rem', height: '6rem' }}
              id="sandCastle"
            >
              <img
                src={
                  sandcastleKicked
                    ? '/images/sandcastleKicked.png'
                    : '/images/sandcastle.png'
                }
                alt="sandcastle"
              />
            </button>
            <span className="ml-2"></span>
          </div>
          <div className="flex-col  sm:flex-row font-medium flex-1 flex justify-center  text-black-900 dark:text-white text-center">
            <Link
              className="px-10 py-3 text-xl rounded"
              to="/"
              style={{
                ...linkStyle,
                ...(pathname === '/' ? activeStyle : {}),
                ...(pathname === '/' ? hoverStyle : {}),
              }}
            >
              About Me
            </Link>
            <Link
              className="px-10 py-3 text-xl rounded"
              to="/projects"
              style={{
                ...linkStyle,
                ...(pathname === '/projects' ? activeStyle : {}),
                ...(pathname === '/projects' ? hoverStyle : {}),
              }}
            >
              Projects
            </Link>
            <Link
              className="px-10 py-3 text-xl rounded"
              to="/curriculumvitae"
              style={{
                ...linkStyle,
                ...(pathname === '/curriculumvitae' ? activeStyle : {}),
                ...(pathname === '/curriculumvitae' ? hoverStyle : {}),
              }}
            >
              Curriculum Vitae
            </Link>
            <Link
              className="px-10 py-3 text-xl rounded"
              to="/contact"
              style={{
                ...linkStyle,
                ...(pathname === '/contact' ? activeStyle : {}),
                ...(pathname === '/contact' ? hoverStyle : {}),
              }}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center ml-auto justify-evenly">
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://www.linkedin.com/in/sean-stickland-aa26461ab/"
            />
            <div className="w-3"></div>
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://github.com/sticklandsm"
            />
          </div>
        </div>
      </nav>
    </>
  )
}
