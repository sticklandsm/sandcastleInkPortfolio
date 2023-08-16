import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import { animated } from '@react-spring/web'
import AnimationComponent from './AnimationComponent'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
  const { pathname } = useLocation()
  console.log(location.pathname)
  const [sandcastleKicked, kickSandcastle] = useState(false)

  const [isDark, setIsDark] = useState(true)
  useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  )

  return (
    <>
      <nav className="top-0 rounded-md shadow-lg">
        <div className="flex-col sm:flex-row max-w-screen-full flex items-center justify-center mx-auto p-4  ">
          <div className="flex items-center">
            <button
              id="sandCastle"
              onClick={() => {
                kickSandcastle(() => !sandcastleKicked)
              }}
              style={{ width: '6rem', height: '6rem' }}
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
          <div className="flex-col  sm:flex-row font-medium flex-1 flex justify-center  text-black-900 dark:text-white">
            <Link
              id="aboutMeLink"
              className={
                'px-10 py-3 text-xl hover:text-white hover:bg-gray-700 rounded'
              }
              to={'/'}
            >
              About Me
            </Link>
            <Link
              id="projectsLink"
              className="px-10 py-3 text-xl hover:text-white hover:bg-gray-700 rounded"
              to={'/projects'}
            >
              Projects
            </Link>
            <a
              className="px-10 py-3 f text-xl hover:text-white hover:bg-gray-700 rounded text-center"
              href="/cv/SeanSticklandCV.pdf"
              target="_blank"
            >
              Curriculum Vitae
            </a>
            <Link
              id="contactLink"
              className=" px-10 py-3  text-xl hover:text-white hover:bg-gray-700 rounded"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center ml-auto ">
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://www.linkedin.com/in/sean-stickland-aa26461ab/"
              fgColor={isDark ? 'white' : ''}
              target="_blank"
            />
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://github.com/sticklandsm"
              bgColor={isDark ? 'white' : ''}
              fgColor={isDark ? 'black' : ''}
              target="_blank"
            />
          </div>
        </div>
      </nav>
    </>
  )
}
