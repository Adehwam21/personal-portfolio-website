import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion";
import projectData from "../../assets/projects.json"; // Adjust the path based on your project structure
import Card from "../../components/Card";
import Button from "../../components/Button"
import { useScroll } from "../../context/ScrollContext";


const Projects: React.FC = () => {
    const { setRef } = useScroll();

    useEffect(() => {
        const element = document.getElementById('projects-section');
        setRef('projects-section', element!);
    }, [setRef]);
    
    return (
        <div id="projects-section" className="relative flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
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
            <div className="text-center mt-12 mb-12">
                <h2 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight">
                    PROJECTS
                </h2>
            <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                A collection of some of the most impactful projects I’ve worked on.
            </p>
            </div>

            <div className="flex flex-col mt-8 space-y-10">
            {projectData.map((project, index) => (
                <Card
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    caseStudyPath={project.caseStudyPath}
                />
            ))}
            </div>

            <Button className="mt-8 md:mt-6 w-48 h-16 flex-row px-10 py-4 text-lg font-medium rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-lg flex items-center justify-center space-x-2">
                <span>View more </span>
                <FaArrowRight />
            </Button>
        </div>
    );
};

export default Projects;
