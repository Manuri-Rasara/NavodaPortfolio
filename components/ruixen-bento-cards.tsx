"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const cardContents = [
  {
  title: "Creative & Modern Design",
  description:
    "Deliver visually polished interfaces that balance creativity with usability, helping brands stand out through meaningful digital experiences.",
},
{
  title: "Seamless User Experience",
  description:
    "Design intuitive user journeys that reduce friction, improve engagement, and make every interaction feel natural and effortless.",
},
{
  title: "Responsive & Flexible Layouts",
  description:
    "Create adaptive, mobile-first layouts that scale beautifully across desktops, tablets, and smartphones using flexible grids, spacing systems, and responsive design principles.",
},
{
  title: "Design Systems & Consistency",
  description:
    "Build cohesive digital products with reusable components, consistent typography, spacing, and scalable UI patterns for a unified brand experience.",
},
{
  title: "Fast Prototyping & Collaboration",
  description:
    "Turn ideas into interactive prototypes quickly while maintaining smooth collaboration between designers, developers, and stakeholders.",
},
]


const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6  dark:bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between",
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`dark:text-white text-black size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="dark:bg-black dark:bg-transparent mx-20 mt-50 ">
      <div className="mx-auto container px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-blue dark:text-white mb-4">
            Build Frame.㋡
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
Make Unforgettable Digital Experiences.</p>        </div>
      </div>
    </section>
  )
} 
