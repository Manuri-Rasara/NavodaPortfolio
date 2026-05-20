"use client";

import DockNav from "@/myComponent/NavigationDock";
import MyHero from "../myComponent/MyHero";
import MyAcc from "@/myComponent/MyAcc";
import { Accordion05 } from "@/components/accordion-05";
import ProjectWork from "@/myComponent/ProjectWork";
import Testimonial from "@/myComponent/Testonomials";
import Expert from "@/myComponent/Expert";
import TextCircle from "@/myComponent/TextCircle";
import WhatsAppIcon from "../public/Assets/Logos/WhatsAppIconLogo.png";
import Image from "next/image";

export default function Home() {
  return (
    
      <main className="overflow-x-hidden w-full relative">
       <MyHero/>
       <div className="py-20 bg-[#121212] w-full">
         <Accordion05 />
       </div>
        <ProjectWork/>
        <Expert/>
        <TextCircle/>
        <Testimonial/>
        
          <div className="fixed bottom-10 left-0 right-0 w-full z-50">
          <DockNav/>
         </div>

<a
    href="https://wa.me/94716145824?text=Hello%20Navoda%2C%20I%E2%80%99m%20like%20your%20creative%20work"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-40 right-6 z-[9999] flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
    aria-label="Open WhatsApp chat"
  >
    <Image
      src={WhatsAppIcon}
      alt="WhatsApp"
      width={64}
      height={64}
    />
  </a>
      </main>


      );
}
