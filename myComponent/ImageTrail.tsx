'use client'

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Unsplash images that definitely exist
 const images = [
    "/Assets/ImageTrail/Img123.webp",
   "/Assets/ImageTrail/IMG124.webp",
  "/Assets/ImageTrail/Img125.webp",
  "/Assets/ImageTrail/Img126.webp",
  "/Assets/ImageTrail/Img127.jpg",
  ]

  return (
    <div className="flex w-full h-screen justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 rounded-lg"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      <h1 className="text-7xl md:text-9xl font-bold z-10 select-none bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
        LEVEL UP
      </h1>
    </div>
  )
}

export { ImageTrailDemo }