import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { useMediaQuery } from 'react-responsive'

export default function NavBar() {
  const [sandcastleKicked, kickSandcastle] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  )
  console.log(systemPrefersDark)
  return (
    <>
      <nav className="top-0 rounded-md shadow-lg">
        <div className="flex-col sm:flex-row max-w-screen-full flex items-center justify-center mx-auto p-4  ">
          <div className="flex items-center">
            <button
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
            <a
              className="px-10 py-3 text-xl hover:text-white hover:bg-gray-700 rounded"
              href="/"
            >
              About Me
            </a>
            <a
              className="px-10 py-3 text-xl hover:text-white hover:bg-gray-700 rounded"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="px-10 py-3 f text-xl hover:text-white hover:bg-gray-700 rounded text-center"
              href="/cv/SeanSticklandCV.pdf"
              download
              target="_blank"
            >
              Curriculum Vitae
            </a>
            <a
              className=" px-10 py-3  text-xl hover:text-white hover:bg-gray-700 rounded"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center ml-auto ">
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://www.linkedin.com/in/sean-stickland-aa26461ab/"
              fgColor={systemPrefersDark ? 'white' : ''}
              target="_blank"
            />
            <SocialIcon
              className="dark:bg-black-300 dark:rounded-full"
              url="https://github.com/sticklandsm"
              bgColor={systemPrefersDark ? 'white' : ''}
              fgColor={systemPrefersDark ? 'black' : ''}
              target="_blank"
            />
          </div>
        </div>
      </nav>
    </>
  )
}
