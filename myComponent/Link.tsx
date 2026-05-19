"use client";

import { useState, useEffect } from "react";
import { RevealLinks } from "@/components/reveal-links";


const DemoRevealLinks = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center  dark:bg-black relative overflow-auto">
      <RevealLinks />

      
    </div>
  );
};

export { DemoRevealLinks };