import React from "react";
import { useScroll } from "../../context/ScrollContext";
import { motion } from "framer-motion";
import SocialsBar from "../../components/SocialsBar";
import Button from "../../components/Button";

const Hero: React.FC = () => {
  const {scrollTo} = useScroll();
  const handleProjectsButoonClicked = () => {
    // Handle projects button click
    scrollTo("projects-section");
  }

  return (
    <div className="relative h-120 pt-20 md:pt-16 md:pb-6 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Socials Bar */}
      <div>
        <SocialsBar
          className="hidden bg-white dark:bg-slate-950 lg:flex rounded-r flex-col items-center absolute left-0 top-52"
          classNameFooterIcons="text-3xl m-1 p-2 rounded text-black hover:bg-gray-200 dark:bg-slate-950 dark:hover:bg-gray-800 dark:text-white transition-colors"
        />
      </div>

      {/* Hero Content */}
      <div className="h-full text-center flex flex-col items-center px-6 py-5 md:py-16">
        {/* Image with Circular Moving Beam */}
        <div className="relative w-56 h-56 mx-auto mt-10 md:mt-0 mb-6 md:w-60 md:h-60 md:mb-4">
          {/* Moving Beam */}
          <motion.div
            className="absolute inset-0 rounded-full border-8 border-indigo-500 shadow-lg"
            style={{
              background: "conic-gradient(from 0deg, #6366F1, #3B82F6, #6366F1)", // Beam gradient
              maskImage: "radial-gradient(circle, transparent 70%, black 100%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 70%, black 100%)",
            }}
            animate={{
              rotate: [0, 360], // Full rotation
            }}
            transition={{
              repeat: Infinity, // Infinite rotation
              duration: 10, // Duration of one rotation
              ease: "linear", // Smooth continuous motion
            }}
          />

          {/* Profile Image */}
          <motion.img
            src="images/portrait3.JPG"
            alt="Aaron Kudadjie"
            className="relative z-10 w-full h-full object-cover rounded-full border-4  border-indigo-500 shadow-lg"
            whileHover={{
              y: [0, -10, 0], // Creates a smooth bounce effect
            }}
            transition={{
              duration: 1, // Bounce duration
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Title */}
        <h1 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-gray-800 dark:text-gray-100">
          HELLO, I'M AARON KUDADJIE
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
          Proactive and passionate software engineer with a strong work ethic and a thirst for knowledge.
        </p>
        <p className="mt-0 text-base md:text-lg md:mt-2 leading-relaxed text-gray-700 dark:text-gray-400">
          Let's create something amazing together!
        </p>

        {/* Button */}
        <Button
          className="mt-8 px-6 py-3 h-16 w-52 text-lg md:text-lg font-medium rounded-md bg-indigo-500 text-gray-100 dark:bg-indigo-600 dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 shadow-lg"
          onClick={handleProjectsButoonClicked}
        >
          PROJECTS
        </Button>
      </div>
    </div>
  );
};

export default Hero;
