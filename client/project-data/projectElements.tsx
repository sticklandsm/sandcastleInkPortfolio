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
    name: 'pictophone',
    title: 'Pictophone',
    subTitle: 'It is like the games telephone and pictionary together at last!',
    imagesURL: [
      '/images/pictophone01.png',
      '/images/pictophone02.png',
      '/images/pictophone0.png',
    ],
    linkToProject: '/',
    details: `This is my latest work. When we were selecting our final projects at Dev Academy Aotearoa, I proposed an online version of Telephone Pictionary, a game I play with friends usually using pen and paper. My idea was chosen but I didn't end up being assigned to work on it. I was impressed with what the other team ended up making but I still wanted to see my vision of it come to life so here it is. I found storing and retrieving images to be the toughest part of working on the backend. It took me hours to figure out how to convert the images that were painted to binary, then send them the back end via API, and then retrieving them was just as time consuming. Styling was also very difficult, no matter how hard I tried I couldn&apos;t get the footer to sit at the right place. If I had to do this again, I would be stricter with my redux use, I used Redux for some things, but then went straight back to normal state when I needed to use APIs which isn&apos;t great.`,
    thingsUsed: [
      'Full Stack',
      'TypeScript',
      'React-Redux',
      'HTML',
      'Tailwind',
      'JSON',
      'Postgres',
    ],
  },
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
    thingsUsed: ['TypeScript', 'React', 'HTML', 'CSS', 'JSON'],
  },
  {
    name: 'restaurantOrderingApp',
    title: 'Restaurant Ordering App',
    subTitle: 'Waitless, wait less without waiters!',
    imagesURL: [
      '/images/Waitless03.png',
      '/images/Waitless02.png',
      '/images/Waitless01.png',
      '/images/Waitless04.png',
    ],
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
      'TailWind',
    ],
  },
  {
    name: 'thisWebsite',
    title: 'My Portfolio',
    subTitle:
      'I made this portfolio from scratch over the course of a day or so',
    imagesURL: [
      '/images/thisWebsite01.png',
      '/images/thisWebsite02.png',
      '/images/thisWebsite03.png',
    ],
    linkToProject: '/',
    details: `The last assessment at Dev Academy is to make a portfolio. This is where you are now. The thing that took the longest was trying to decide what I wanted it to look like, and what features I should put in. I didn't use any templates for this, everything from the little sandcastle easter egg, to the image carousel was coded from scratch by me. I've also made it work on mobile to the best of my abilities. I wanted to do this whole thing in Angular for practice, but that was a bit more difficult than I thought so I'll leave that for my next project.`,
    thingsUsed: ['TypeScript', 'React', 'HTML', 'TailWind'],
  },
]
