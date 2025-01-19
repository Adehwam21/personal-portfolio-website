import React from 'react';
import SocialsBar from './SocialsBar';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black px-3 md:px-10 text-gray-300 py-10">
            {/* Light Beam */}
            <motion.div
                className="absolute top-0 left-0 w-full h-0.5"
                animate={{
                x: ["100%", "-100%"], // Move from right to left
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
            {/* First Row */}
            <div className="container md:h-44 md:mt-16 flex md:gap-15 flex-col md:flex-row justify-between md:items-start">
                {/* Column 1: Name and Info */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl p-2 font-bold mb-2 md:mb-4 text-white">Aaron Kudadjie</h3>
                    <p className="mb-10 text-gray-400 p-2">
                        A passionate developer with a focus on creating intelligent and efficient solutions for modern problems.
                    </p>
                </div>

                {/* Column 2: Socials */}
                <div className="flex flex-col items-start md:items-end md:w-1/2">
                    <h4 className="text-2xl p-2 font-semibold text-white mb-4">Let's connect</h4>
                    <SocialsBar
                        className="bg-black dark:bg-black flex flex-row md:items-end"
                        classNameFooterIcons="text-2xl p-2 rounded text-white hover:bg-slate-700"
                    />
                </div>
            </div>

            {/* Second Row */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                <p className="text-sm text-gray-400 p-2">
                    Design inspired by <a className="text-blue-700" href="https://www.rammaheshwari.com/">Ram Maheshwari</a>
                </p>
                <p className="text-sm text-gray-400">&copy;{new Date().getFullYear()} Aaron Katey Kudadjie (TheKudaCode). All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
