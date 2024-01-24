import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <>
      <div className=" py-10">
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
            <br />
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              I&apos;m an early career software engineer with 9 years of
              previous experience as an IT Support Specialist. In 2023, I
              graduated with flying colours from{' '}
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://devacademy.co.nz/"
                target="_blank"
                rel="noreferrer"
              >
                Dev Academy Aotearoa
              </a>
              —a rigorous TypeScript-based coding bootcamp where I was
              recognized by the lead teacher as “one of our most advanced
              students.&quot;
            </p>
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              Since then, I&apos;ve honed my craft by contracting, building side
              projects, and studying further. To round out my knowledge, I
              recently completed{' '}
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://aws.amazon.com/training/restart/"
                target="_blank"
                rel="noreferrer"
              >
                AWS re/Start
              </a>
              , an intense 12-week development training program focused on using
              Python to set up and maintain AWS cloud infrastructure. Thanks to
              Dev Academy, AWS, and my personal development, I am now a
              proficient full stack developer with skills in JavaScript,
              TypeScript, Node, React, Redux, Angular, MySQL, RESTful APIs, web
              deployment, and AWS Lambda, S3, EC2, RDS, CloudFront, and
              SNS.I&apos;m now looking for my next opportunity to learn and grow
              as a developer. I&apos;m excited to join a diverse and innovative
              team.
            </p>
            <br />
            <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base">
              Programming has always been a strength of mine, but I faced
              challenges in fully pursuing it due to undiagnosed ADHD. After
              receiving a diagnosis in 2020 and with the aid of medication, I
              have been able to overcome these obstacles and truly unlock my
              potential. Please check out some of my projects{' '}
              <Link
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                to="/projects"
              >
                here
              </Link>
              !{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
