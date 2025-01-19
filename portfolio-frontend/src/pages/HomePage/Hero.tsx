import React from "react";
import SocialsBar from "../../components/SocialsBar";

const Hero: React.FC = () => {
  return (
    <div className="h-120 pt-20 md:pt-16 md:pb-6 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Socials Bar */}
      <div>
        <SocialsBar 
          className="hidden bg-white dark:bg-slate-950 lg:flex flex-col items-center absolute left-0 top-52" 
          classNameFooterIcons="text-3xl m-1 p-2 rounded text-black hover:bg-gray-200 dark:bg-slate-950 dark:hover:bg-gray-800 dark:text-white transition-colors"
        />
      </div>
      {/* Hero Content */}
      <div className="h-full text-center item-center justify-center px-6 py-5 md:py-16">
        {/* Portrait */}
        <div className="w-56 h-56 mx-auto mt-10 md:mt-0 mb-6 md:w-60 md:h-60 md:mb-4">
          <img
            src="images/portrait3.JPG" 
            alt="Aaron Kudadjie"
            className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
        {/* Title */}
        <h1 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-gray-800 dark:text-gray-100">
          HELLO,  I'M  AARON  KUDADJIE
        </h1>
        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
          Proactive and passionate software engineer with a strong work ethic and a thirst for knowledge.
        </p>
        <p className="mt-0 text-base md:text-lg md:mt-2 leading-relaxed text-gray-700 dark:text-gray-400">
          Let's create something amazing together!
        </p>
        {/* Button */}
        <button className="mt-8 px-6 py-3 h-16 w-52 text-sm md:text-lg font-medium rounded-md bg-indigo-500 text-gray-100 dark:bg-indigo-600 dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
          <a href="#projects">PROJECTS</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
