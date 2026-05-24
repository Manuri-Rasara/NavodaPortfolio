"use client";
import ButtonWithIconDemo from "@/components/button-witn-icon";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import CVDownload from "./CVDownload";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="mx-10 md:mx-80 mt-40 mb-40 overflow-hidden rounded-4xl bg-white">
      <div
        className="relative flex h-[500px] items-center justify-center overflow-hidden"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-20 text-white">
         <div className="flex flex-col gap-5">
          <div className="text-xl uppercase mix-blend-difference">
            Navoda Rajapaksha 
          
          </div>
          <div className="">
          <CVDownload/>
          </div>
          </div>
          <div className="flex justify-end ">
          <ButtonWithIconDemo/>
          

          </div>
          

        </div>
      
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="image"
              className="grayscale-0 brightness-30"
              fill
              src={"/Assets/Navoda2.png"}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
