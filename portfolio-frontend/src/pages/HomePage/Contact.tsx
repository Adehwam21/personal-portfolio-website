import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { useScroll } from "../../context/ScrollContext";

const Contact: React.FC = () => {
    const { setRef } = useScroll();

    useEffect(() => {
      const element = document.getElementById('contact-section');
      setRef('contact-section', element!);
    }, [setRef]);
    
    return (
        <div id="contact-section" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
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
            <div className="text-center mt-12 mb-12">
                <h2 className="font-scode text-4xl md:text-5xl font-extrabold tracking-tight">
                    GET IN TOUCH
                </h2>
                <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                    Whether you have a question, a suggestion, or you just want to say hi, feel free to reach out!
                </p>
            </div>

            {/* Contact Form */}
            <div className="mt-8 md:mt-16 mb-20 w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                                id="message"
                                rows={6}
                                className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none overflow-hidden"
                                placeholder="Write your message here..."
                        ></textarea>

                    </div>
                    <div className="mt-6">
                        <Button
                            className="w-full px-6 py-3 bg-indigo-500 text-white font-medium text-lg rounded-md hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
