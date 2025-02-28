import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import arrow-up icon
import Button from "./Button"; // Adjust the path as necessary

const ScrollToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled past a certain point
  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`bg-custom-white rounded-1 border-custom-blue text-custom-blue fixed bottom-14 right-5 md:right-7 ${isVisible ? 'flex' : 'hidden'
      } ${
        "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </Button>
  );
};

export default ScrollToTopBtn;
