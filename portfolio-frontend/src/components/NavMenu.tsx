import React from "react";
import { INavMenuProps } from "../types";

const NavMenu: React.FC<INavMenuProps> = ({ isOpen, className, children }) => {
  return (
    <nav
      className={`fixed top-20 left-0 w-full h-full z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
      {children}
    </nav>
  );
};

export default NavMenu;
