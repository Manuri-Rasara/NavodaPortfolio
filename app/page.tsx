"use client";

import DockNav from "@/myComponent/NavigationDock";
import MyHero from "../myComponent/MyHero";
import MyAcc from "@/myComponent/MyAcc";
import { Accordion05 } from "@/components/accordion-05";
import ProjectWork from "@/myComponent/ProjectWork";
import Testimonial from "@/myComponent/Testonomials";

export default function Home() {
  return (
    
      <main>
       <MyHero/>
       <div className="py-20 bg-[#121212] w-full">
         <Accordion05 />
       </div>
        <ProjectWork/>
        <Testimonial/>
          <div className="fixed bottom-10 left-0 right-0 w-full z-50">
          <DockNav/>
         </div>

      </main>


      );
}
