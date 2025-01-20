import React from "react";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import Button from "../../components/Button";
import TechStackIcon from "tech-stack-icons";
import { useScroll } from "../../context/ScrollContext";

const About: React.FC = () => {
  const {scrollTo} = useScroll();
  const techStacks = [
    "vscode",
    "git",
    "github",
    "docker",
    "postman",
    "html5",
    "css3",
    "tailwindcss",
    "js",
    "python",
    "java",
    "typescript",
    "reactjs",
    "nodejs",
    "figma",
    "mongodb",
    "postgresql",
  ];

  const handleContactButtonClicked = () => {
    // Handle contact button click
    scrollTo("contact-section");
  };

  const handleResumeButtonClicked = () => {
    // Download's resume
    


  }

  return (
    <div className="relative w-full px-8 md:px-20 flex flex-col justify-center items-center py-20 bg-gradient-to-tr from-white via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Light Beam */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5"
        animate={{
          x: ["-100%", "100%"], // Move from left to right
        }}
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          duration: 10, // Total duration of the animation
          ease: "linear", // Smooth transition
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)", // Beam appearance
        }}
      />

      {/* Section Title */}
      <div id="about-section" className="text-center mt-8">
        <h2 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight">
          ABOUT ME
        </h2>
        <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Get to know more about me, my tools, and skills!
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-0 py-0 md:mx-0 mt-16 md:mt-24 md:mb-16 flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-16">
        {/* Left Column: About Information */}
        <div className="mt-2 md:mx-0 md:w-1/2 space-y-6 md:space-y-5">
          <h3 className="text-2xl mb-0 mt-2 md:mt-0 md:text-3xl font-semibold text-indigo-500">
            Get to know me!
          </h3>
          <p className="text-base mt-1 text-justify md:text-lg leading-relaxed">
            I'm a dedicated software engineer with a knack for problem-solving
            and a love for continuous learning.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            While I dabble in all things code, I specialize in crafting <span className="font-bold"> efficient </span>,
            <span className="font-bold"> scalable </span>, and <span className="font-bold"> maintainable </span>
            <span className="font-bold"> backend systems </span> and creating delightful digital experiences. Some
            might call me a full stack wizard 🧙‍♂️, but I prefer "polymath" (it
            sounds fancier, right? 😄).
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new tech trends 📱,
            reading a book 📚, or playing soccer ⚽.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            I'm currently open to new opportunities where I can contribute and
            grow as a developer. Let's connect and make some magic happen!
          </p>
          {/* Buttons */}
          <div className="flex flex-row justify-start items-center space-x-6 md:justify-start md:flex-row md:space-x-6">
            <Button 
              className="mt-5 px-6 py-3 md:h-16 md:w-52 text-lg font-medium rounded-md bg-indigo-500 text-gray-100 dark:bg-indigo-600 dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 shadow-lg"
              onClick={handleContactButtonClicked}
            >
              Contact
            </Button>
            <Button 
              className="mt-5 md:w-52 md:h-16 flex-row px-6 py-3 text-lg font-medium rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-lg flex items-center justify-center space-x-2"
              onClick={handleResumeButtonClicked}
            >
              <span>Resume</span> <LuDownload />
            </Button>
          </div>
        </div>

        {/* Right Column: Technologies Section */}
        <div className="mx-0 md:mx-0 md:w-1/2 space-y-20">
          {/* Technologies Section */}
          <div>
            <h3 className="text-2xl mb-5 mt-8 md:mt-0 pl-3 md:text-3xl font-semibold text-indigo-500">
              Some technologies I often use
            </h3>
            <ul className="space-x-1 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
              {techStacks.map((tech) => (
                <motion.li
                  key={tech}
                  className="relative flex justify-center items-center p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Icon */}
                  <TechStackIcon
                    name={tech}
                    className="w-16 h-16 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
