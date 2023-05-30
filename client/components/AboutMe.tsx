export default function AboutMe() {
  return (
    <>
      <div className=" py-5 md:py-20">
        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-7xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white">
            <img
              src="/images/seanPhoto.jpeg"
              alt="Sean wearing a nice shirt"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <h1 className="font-black text-gray-800 md:text-4xl text-xl">
              I&apos;m Sean and I&apos;m a Full Stack Developer
            </h1>
            <p className="md:text-lg text-gray-500 text-base">
              I&apos;m based in Auckland, New Zealand. I&apos;ve worked as an IT
              Specialist for many years, but I&apos;ve always been a coder at
              heart. Recently I took on software development full time. I
              enrolled and recently graduated from a rigorous software
              development program at{' '}
              <a
                href="https://devacademy.co.nz/"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Dev Academy Aotearoa.
              </a>
            </p>
            <p className="md:text-lg text-gray-500 text-base">
              I completed the program and emerged as one of the most proficient
              students in my cohort. I have many transferrable skills from the
              IT world, and I&apos;m eager to join a high-performing team where
              I can contribute my skills and continue to learn!{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
