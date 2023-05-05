export const projectData = {
  wordleLike: (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="/images/matchStickLand.png"
          alt="MatchStickLand screenshot"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 className="font-black text-gray-800 md:text-xl text-lg">
          {' '}
          Matchstick Land!
        </h3>
        <a
          className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
          href="https://matchstickland-production.up.railway.app/"
        >
          Check it out here!
        </a>
        <p className="md:text-base text-gray-500 text-sm">
          This game was my personal project during Dev Academy, which means I
          worked on it in my very small amount of spare time. It&apos;s a little
          similar to Wordle, in that the game will pick a random word from the
          dictionary. Your job is to guess the word by making letters out of
          matchsticks, kind of similar to in school how everyone used to try to
          make dirty words on the 7 segment displays of old calculators. If you
          don&apos;t guess the word correctly, the matchsticks that are in the
          right place will burn out giving you a hint on what letters are in the
          word. I&apos;ve also implemented a Hint button which uses the ChatGPT
          API to help you guess the word. From this project I learned how
          frustrating CSS flex boxes can be, and the intricacies of using JSON
          files to store and return data. If I had to do this again, which I
          likely will, I would use Tailwind for CSS and I would be much more
          careful with how it looks on mobile. Right now it&apos;s a garbled
          mess on smaller screens. I also want to add the ability to do all
          letters as right now you can&apos;t do letters like M and X. In order
          to achieve that I would make the matchsticks draggable to anywhere on
          screen instead of being in a grid.
        </p>
        <ul className=" text-sm relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <li className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 hidden md:block">
            TypeScript
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 hidden md:block">
            React
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 hidden md:block">
            HTML
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 hidden md:block">
            CSS
          </li>
        </ul>
      </div>
    </div>
  ),
  restaurantOrderingApp: (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="/images/Waitless03.png"
          alt="Waitless screenshot"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 className="font-black text-gray-800 md:text-xl text-lg">
          {' '}
          Waitless, wait less without waiters!
        </h3>
        <a
          className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
          href="https://github.com/harakeke-2023/Waitless"
        >
          Check it out here!
        </a>
        <p className="md:text-base text-gray-500 text-sm">
          This Web App was my groups final project at Dev Academy. The idea is
          that customers will come into a restaurant and scan a QR code. This
          will take them to the Waitless website where they can select the food
          they want, and the order is sent to the kitchen. It also has an admin
          section where you can add and update menu items, and check the orders.
        </p>
      </div>
    </div>
  ),
  aiAdventureGame: (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="/images/AIAdventureGame.png"
          alt="Waitless screenshot"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 className="font-black text-gray-800 md:text-xl text-lg">
          {' '}
          A mystery is afoot in small town, Washington...
        </h3>
        <a
          className="md:text-base underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm"
          href="https://gemini-summits-production.up.railway.app/"
        >
          Check it out here!
        </a>
        <p className="md:text-base text-gray-500 text-sm">
          This is an AI powered text based adventure game. This was one of our
          Friday projects at Dev Academy. I had the idea of making a chatGPT
          powered game heavily inspired by my favourite TV series, Twin Peaks.
          It leverages the chatGPT API and very specific prompting to take you
          on a wild and sometimes spooky adventure. The pictures update
          depending on where the adventure takes you. Can you figure out who
          killed Lorraine Handler?
        </p>
      </div>
    </div>
  ),
}
