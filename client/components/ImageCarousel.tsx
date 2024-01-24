import { useState } from 'react'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import Carousel from 'react-bootstrap/Carousel'

interface Props {
  images: string[]
}

export default function ImageCarousel(props: Props) {
  const amountOfImages = props.images.length
  const [currentImageNumber, setCurrentImageNumber] = useState(0)

  function changeImage(previousOrNext: number) {
    setCurrentImageNumber((current) => current + previousOrNext)
  }

  return (
    <>
      <Carousel></Carousel>
      <div className="relative">
        <img
          src={props.images[currentImageNumber]}
          alt="screenshots of projects"
        />
        <div className="flex justify-center">
          <div className="absolute inset-y-0 left-0 flex justify-center items-center opacity-60">
            {currentImageNumber !== 0 && (
              <button
                className=" bg-opacity-100 rounded-full"
                onClick={() => {
                  changeImage(-1)
                }}
              >
                <HiArrowCircleLeft size={40} />
              </button>
            )}
          </div>
          <div className=" absolute inset-y-0 right-0 flex justify-center items-center opacity-60">
            {currentImageNumber !== amountOfImages - 1 && (
              <button
                className=" bg-opacity-100 rounded-full"
                onClick={() => {
                  changeImage(1)
                }}
              >
                <HiArrowCircleRight size={40} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
