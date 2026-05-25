"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DockNav from "@/myComponent/NavigationDock";
import MyHero from "../myComponent/MyHero";
import { Accordion05 } from "@/components/accordion-05";
import ProjectWork from "@/myComponent/ProjectWork";
import Testimonial from "@/myComponent/Testonomials";
import Expert from "@/myComponent/Expert";
import TextCircle from "@/myComponent/TextCircle";
import { Loading } from "@/myComponent/Loading";
import Footer from "@/myComponent/Footer";
import Hero from "@/myComponent/Parallex";

import GlitchText from "@/myComponent/GlitchText";

import FeatureGrid from "@/myComponent/FeatureGrid";
import { ImageTrailDemo } from "@/myComponent/ImageTrail";
import ButtonRow from "@/myComponent/ButtonRow";
import { Process } from "@/myComponent/ContactMe";
import GalleryDirectBTN from "@/myComponent/GalleryDirectBTN";





export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
   
        {loading ? (
          <motion.div
            key="loader"
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Loading/>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-x-clip w-full relative"
          >
            <MyHero />

            <div className="py-20 bg-[#121212] w-full">
              <Accordion05 />
            </div>

            <ProjectWork />
            <Expert />
            <TextCircle />
             <Hero/>
              <Process/>
             <GlitchText/>
         
<FeatureGrid/>
            
            <Testimonial />
            <GalleryDirectBTN/>
           <ImageTrailDemo/>
            <Footer/>

            <div className="fixed bottom-10 left-0 right-0 w-full z-50">
              <DockNav />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}