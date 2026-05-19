"use client";

import DockNav from "@/myComponent/NavigationDock";
import MyHero from "../myComponent/MyHero";
import MyAcc from "@/myComponent/MyAcc";
import { Accordion05 } from "@/components/accordion-05";

export default function Home() {
  return (
    
      <main>
       <MyHero/>
       <div className="py-20 bg-[#121212] w-full">
         <Accordion05 />
       </div>
          <div className="fixed bottom-10 left-0 right-0 w-full z-50">
          <DockNav/>
         </div>

      </main>


      );
}
