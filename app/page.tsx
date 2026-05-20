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
    
      <main>
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
    href="https://wa.me/94787531134?text=Hello%20Navoda%2C%20I%E2%80%99m%20interested%20in%20your%20design%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20a%20idea."
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
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
