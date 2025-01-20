import React from "react";
import { INavMenuProps } from "../types";
import SocialsBar from "./SocialsBar";

const NavMenu: React.FC<INavMenuProps> = ({ isOpen, className, children }) => {
  return (
    <nav
      className={`fixed top-20 left-0 w-full h-full z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
        {children}
        <span className="flex text-sm justify-center items-center mt-16">Connect with me on social media!</span>
        <SocialsBar
          className="bg-transparent flex flex-row justify-center items-center p-4"
          classNameFooterIcons="text-3xl p-2 rounded text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
        />
    </nav>
  );
};

export default NavMenu;
