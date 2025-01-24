import React from "react";
import { useScroll } from "../../context/ScrollContext";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import SocialsBar from "../../components/SocialsBar";
import AnimatedSection from "../../components/Animator";

const Hero: React.FC = () => {
  const {scrollTo} = useScroll();
  const handleProjectsButoonClicked = () => {
    // Scroll to the projects section
    scrollTo("projects-section");
  }

  return (
    <div
      id="hero-section"
      className="relative h-120 pt-20 md:pt-20 md:pb-6 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100"
    >
      {/* Socials Bar */}
        <SocialsBar
          className="hidden bg-white dark:bg-slate-950 lg:flex rounded-r flex-col items-center absolute left-0 top-52"
          classNameFooterIcons="text-3xl m-1 p-2 rounded text-black hover:bg-gray-200 dark:bg-slate-950 dark:hover:bg-gray-800 dark:text-white transition-colors"
        />

      {/* Hero Content */}
      <div className="h-full text-center flex flex-col items-center px-6 py-5 md:py-16">
        {/* Image with Circular Moving Beam */}
        <AnimatedSection>
            <div className="relative w-56 h-56 mx-auto mt-10 md:mt-0 mb-6 md:w-60 md:h-60 md:mb-4">
              {/* Profile Image */}
              <motion.img
                src="images/portrait3.JPG"
                alt="Aaron Kudadjie"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-indigo-500 dark:border-indigo-800 shadow-lg"
                style={{ filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.7))" }} // Initial glow
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(99, 102, 241, 0.7))", // Compressed glow
                    "drop-shadow(0 0 40px rgba(99, 102, 241, 0.9))", // Expanded glow
                    "drop-shadow(0 0 20px rgba(99, 102, 241, 0.7))", // Back to initial
                  ],
                }}
                transition={{
                  duration: 2, // Total duration of the breathing effect
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth transition
                }}
              />
            </div>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection>
          <h1 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-gray-800 dark:text-gray-100">
            HELLO, I'M AARON KUDADJIE
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
            Proactive and passionate software engineer with a strong work ethic and a thirst for knowledge.
          </p>
          <p className="mt-0 text-base md:text-lg md:mt-2 leading-relaxed text-gray-700 dark:text-gray-400">
            Let's create something amazing together!
          </p>
        </AnimatedSection>

        {/* Button */}
        <AnimatedSection>
          <Button
            className="mt-8 px-6 py-3 h-16 w-52 text-lg md:text-lg font-medium rounded-md bg-indigo-500 text-gray-100 dark:bg-indigo-600 dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 shadow-lg"
            onClick={handleProjectsButoonClicked}
          >
            PROJECTS
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Hero;
