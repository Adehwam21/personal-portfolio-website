import React from "react";
import { ICardProps } from "../types";
import Button from "./Button";

const Card: React.FC<ICardProps> = ({ image, title, description, caseStudyPath }) => {
  return (
    <div className="w-full my-auto rounded-lg flex flex-col md:flex-row md:p-12 bg-white md:dark:bg-transparent md:bg-transparent dark:bg-gray-800 overflow-hidden transition-transform transform">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full md:rounded-lg md:h-auto  object-cover"
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
        <div className="mt-6 md:mt-3">
          <Button
            className="px-6 py-3 text-sm md:text-base font-medium text-white bg-indigo-500 dark:bg-indigo-600 rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-700" 
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
