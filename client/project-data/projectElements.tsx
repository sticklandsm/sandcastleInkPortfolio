export interface Projectdata {
  name: string
  title: string
  subTitle: string
  imagesURL: string[]
  linkToProject: string
  details: string
  thingsUsed: string[]
}

export const projectsData: Projectdata[] = [
  {
    name: 'wordleLike',
    title: 'Wordle Like Game',
    subTitle: 'Matchstick Land!',
    imagesURL: ['/images/matchStickLand.png'],
    linkToProject: 'https://matchstickland-production.up.railway.app/',
    details: `This game was my personal project during Dev Academy, which means I
  worked on it in my very small amount of spare time. It's a little
  similar to Wordle, in that the game will pick a random word from the
  dictionary. Your job is to guess the word by making letters out of
  matchsticks, kind of similar to in school how everyone used to try to
  make dirty words on the 7 segment displays of old calculators. If you
  don't guess the word correctly, the matchsticks that are in the
  right place will burn out giving you a hint on what letters are in the
  word. I've also implemented a Hint button which uses the ChatGPT
  API to help you guess the word. From this project I learned how
  frustrating CSS flex boxes can be, and the intricacies of using JSON
  files to store and return data. If I had to do this again, which I
  likely will, I would use Tailwind for CSS and I would be much more
  careful with how it looks on mobile. Right now it's a garbled
  mess on smaller screens. I also want to add the ability to do all
  letters as right now you can't do letters like M and X. In order
  to achieve that I would make the matchsticks draggable to anywhere on
  screen instead of being in a grid.`,
    thingsUsed: ['TypeScript', 'React', 'HTML', 'CSS'],
  },
  {
    name: 'restaurantOrderingApp',
    title: 'Restaurant Ordering App',
    subTitle: 'Waitless, wait less without waiters!',
    imagesURL: ['/images/Waitless03.png'],
    linkToProject: 'https://github.com/harakeke-2023/Waitless',
    details: `This Web App was my groups final project at Dev Academy. The idea is
    that customers will come into a restaurant and scan a QR code. This
    will take them to the Waitless website where they can select the food
    they want, and the order is sent to the kitchen. It also has an admin
    section where you can add and update menu items, and check the orders.`,
    thingsUsed: [
      'TypeScript',
      'React',
      'React Router',
      'HTML',
      'CSS',
      'SQLite',
      'KNEX',
    ],
  },
  {
    name: 'aiAdventureGame',
    title: 'AI Adventure Game',
    subTitle: 'A mystery is afoot in small town, Washington...',
    imagesURL: ['/images/AIAdventureGame.png'],
    linkToProject: 'https://gemini-summits-production.up.railway.app/',
    details: `This is an AI powered text based adventure game. This was one of our
    Friday projects at Dev Academy. I had the idea of making a chatGPT
    powered game heavily inspired by my favourite TV series, Twin Peaks.
    It leverages the chatGPT API and very specific prompting to take you
    on a wild and sometimes spooky adventure. The pictures update
    depending on where the adventure takes you. Can you figure out who
    killed Lorraine Handler?`,
    thingsUsed: [
      'TypeScript',
      'React',
      'React Router',
      'Redux',
      'HTML',
      'TaiWind',
    ],
  },
]
