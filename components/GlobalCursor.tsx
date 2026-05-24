"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

const SCALE_DEFAULT = 1;
const SCALE_HOVER = 2.2;

export const GlobalCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xSpring = useSpring(x, SPRING);
  const ySpring = useSpring(y, SPRING);
  const scale = useSpring(SCALE_DEFAULT, SPRING);
  const opacity = useSpring(0, SPRING);

  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleEnter = () => opacity.set(1);
    const handleLeave = () => opacity.set(0);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "a, button, [role='button'], input, label, select, textarea, [tabindex]"
      );
      if (clickable) {
        scale.set(SCALE_HOVER);
        setIsHoveringClickable(true);
      } else {
        scale.set(SCALE_DEFAULT);
        setIsHoveringClickable(false);
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      {/* 
        Two-layer cursor:
        1. The adaptive dot — uses mix-blend-mode: difference so it's black on
           light surfaces and flips to white on dark surfaces automatically.
        2. An orange accent ring that fades in on clickable hover, giving a clear
           signal on both light and dark backgrounds.
      */}

      {/* Adaptive dot (black ↔ white via blend mode) */}
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          scale,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: isHoveringClickable ? "normal" : "difference",
        }}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] size-6 rounded-full transition-colors duration-150  ${
          isHoveringClickable ? "bg-orange-500" : "bg-white"
        }`}
      />

      {/* Outer ring — appears on hover for extra visual affordance */}
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          scale,
          opacity: isHoveringClickable ? opacity.get() : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHoveringClickable ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] size-4 rounded-full "
        // The ring is the same size as the dot; scale pushes it outward naturally
      />
    </>
  );
};
