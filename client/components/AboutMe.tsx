export default function AboutMe() {
  return (
    <>
      <div className=" py-5 md:py-20">
        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-7xl mx-auto border border-white dark:border-0">
          <div className="w-full md:w-1/3 ">
            <img
              src="/images/seanPhoto.jpeg"
              alt="Sean wearing a nice shirt"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
            <h1 className="font-black text-gray-800 dark:text-gray-300 md:text-4xl text-xl">
              I&apos;m Sean and I&apos;m a Full Stack Developer
            </h1>
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              I&apos;m based in Auckland, New Zealand. I have 4 years of
              experience working in software companies as an ICT Technician but
              I&apos;ve always had a keen interest in coding. At the end of 2022
              I took on software development full time. At the start of 2023 I
              enrolled in the coding bootcamp,{' '}
              <a
                href="https://devacademy.co.nz/"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Dev Academy Aotearoa.
              </a>
            </p>
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              The bootcamp aims to simulate working in a real agile development
              team. Due to my coding aptitude and prior experience, I often
              assumed the role of team lead. I scoped out the projects, ensured
              progress was being made, and provided guidance whenever others
              were blocked. I then used my evenings to work on coding the back
              ends. I emerged as one of the most proficient students in my
              cohort.{' '}
            </p>
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              Programming has always been a strength of mine, but I faced
              challenges in fully pursuing it due to undiagnosed ADHD. After
              receiving a diagnosis in 2020 and with the aid of medication, I
              have been able to overcome these obstacles and truly unlock my
              potential. Thanks to Dev Academy and my personal development, I am
              now a proficient full stack developer with skills in JavaScript,
              TypeScript, Node JS, React, and HTML/CSS. Additionally, I have
              experience in consuming RESTful API services and deploying
              projects to the web. <br /> <br /> Please check out some of my
              project below!{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
