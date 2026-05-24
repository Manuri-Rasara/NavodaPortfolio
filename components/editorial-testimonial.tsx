"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:"Sample",
    author: "Sarah Chen",
    role: "Creative Director",
    company: "Studio Forma",
    image: "/Assets/Navoda.png",
  },
  {
    id: 2,
    quote:
      "Working with them felt like a true creative partnership from day one.",
    author: "Marcus Webb",
    role: "Head of Design",
    company: "Minimal Co",
    image: "/Assets/Navoda.png",
  },
  {
    id: 3,
    quote:
      "They understand that great design is invisible yet unforgettable.",
    author: "Elena Voss",
    role: "Art Director",
    company: "Pixel & Co",
    image: "/Assets/Navoda.png",
  },
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      setActive(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 250)
  }

  const handlePrev = () => {
    const newIndex =
      active === 0 ? testimonials.length - 1 : active - 1

    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex =
      active === testimonials.length - 1 ? 0 : active + 1

    handleChange(newIndex)
  }

  const current = testimonials[active]

  return (
    <section className="w-full px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
          
          {/* Large Number */}
          <div className="flex-shrink-0">
            <span
              className="
                text-[72px]
                sm:text-[100px]
                md:text-[140px]
                font-light
                leading-none
                text-foreground/10
                select-none
                transition-all
                duration-500
              "
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full sm:pt-6">
            
            {/* Quote */}
            <blockquote
              className={`
                text-lg
                sm:text-2xl
                md:text-4xl
                font-light
                leading-relaxed
                tracking-tight
                text-foreground
                transition-all
                duration-300
                ${
                  isTransitioning
                    ? "opacity-0 translate-y-3 sm:translate-x-4"
                    : "opacity-100 translate-y-0 sm:translate-x-0"
                }
              `}
            >
              “{current.quote}”
            </blockquote>

            {/* Author */}
            <div
              className={`
                mt-8
                sm:mt-10
                group
                transition-all
                duration-300
                ${
                  isTransitioning
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            >
              <div className="flex items-center gap-4">
                
                {/* Avatar */}
                <div
                  className="
                    relative
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-full
                    overflow-hidden
                    ring-2
                    ring-foreground/10
                    group-hover:ring-foreground/30
                    transition-all
                    duration-300
                  "
                >
                  <Image
                    src={current.image}
                    alt={current.author}
                    fill
                    className="
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      transition-all
                      duration-500
                    "
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-foreground">
                    {current.author}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {current.role}

                    <span className="mx-2 text-foreground/20">
                      /
                    </span>

                    <span className="group-hover:text-foreground transition-colors duration-300">
                      {current.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          className="
            mt-12
            sm:mt-16
            flex
            flex-col
            sm:flex-row
            gap-6
            sm:gap-0
            sm:items-center
            sm:justify-between
          "
        >
          
          {/* Progress Lines */}
          <div className="flex items-center justify-between sm:justify-start gap-5">
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleChange(index)}
                  className="group relative py-3"
                >
                  <span
                    className={`
                      block
                      h-[2px]
                      rounded-full
                      transition-all
                      duration-500
                      ease-out
                      ${
                        index === active
                          ? "w-10 sm:w-12 bg-foreground"
                          : "w-5 sm:w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <span
              className="
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                uppercase
                text-muted-foreground
                whitespace-nowrap
              "
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              className="
                p-2.5
                rounded-full
                text-foreground/40
                hover:text-foreground
                hover:bg-foreground/5
                transition-all
                duration-300
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="
                p-2.5
                rounded-full
                text-foreground/40
                hover:text-foreground
                hover:bg-foreground/5
                transition-all
                duration-300
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}