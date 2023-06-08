export default function Contact() {
  return (
    <div className=" py-10">
      <div className=" max-w-xs md:max-w-5xl mx-auto">
        <a id="contact" href="#contact">
          <h2 className="font-black text-gray-800 dark:text-gray-300 md:text-3xl text-xl pb-3 text-center">
            Contact
          </h2>
        </a>
        <p className="md:text-lg text-gray-500 dark:text-gray-400 text-base text-center">
          You can reach me at the below email: <br />
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="mailto:sandcastleink@gmail.com"
          >
            sandcastleink@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
