import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  const [sandcastleKicked, kickSandcastle] = useState(false)
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
                alt=""
              />
            </button>
            <span className="ml-2"></span>
          </div>
          <div className="flex-col  sm:flex-row font-medium flex-1 flex justify-center  text-black-900">
            <a
              className="px-10 py-3 text-xl hover:text-white hover:bg-gray-700 rounded"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="px-10 py-3 f text-xl hover:text-white hover:bg-gray-700 rounded text-center"
              href="#curriculum"
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
          <div className="flex items-center ml-auto">
            <SocialIcon url="https://www.linkedin.com/in/sean-stickland-aa26461ab/" />
            <SocialIcon url="https://github.com/sticklandsm" />
          </div>
        </div>
      </nav>
    </>
  )
}
