import React from "react";
import { ICardProps } from "../types";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Card: React.FC<ICardProps> = ({ image, title, description, tools, githubUrl }) => {
  return (
    <div className="w-full my-auto rounded-lg flex flex-col md:flex-row md:p-12 bg-white md:dark:bg-transparent md:bg-transparent dark:bg-gray-800 overflow-hidden transition-transform transform">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full md:rounded-lg md:h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-evenly pl-6 pr-6 pt-14 pb-14 md:p-14 md:w-1/2">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-4 md:mb-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2 mt-4">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="text-xs md:text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-6 md:mt-3">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row w-40 justify-center items-center px-4 py-3 space-x-2 text-sm md:text-base font-medium text-white bg-indigo-500 dark:bg-indigo-600 rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            <span className="text-sm">View project</span>
            <FaArrowRight />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Card;
