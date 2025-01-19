import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavMenu from "./NavMenu";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "/#home-hero-section" },
    { label: "ABOUT", href: "/#home-about-section" },
    { label: "PROJECTS", href: "/#project" },
    { label: "CONTACT", href: "/#contact" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full flex text-base top-0 right-0 z-50 font-bold justify-between bg-white shadow-lg px-4 md:px-10 h-20 items-center dark:bg-slate-800">
      {/* Left Section */}
      <div className="flex row space-x-2 items-center">

        {/* Logo */}
        <div className="flex btn-ghost rounded-md items-center space-x-2">
          <Link to="#home-hero-section" className="flex items-center space-x-2 p-2">
            <img
              src="images/logo.webp"
              alt="logo"
              className="w-10 h-10 object-cover rounded-full border-4- shadow-lg"
            />
            <span className="text-sm font-bold">AARON KUDADJIE</span>
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <Button
          className={`btn btn-ghost rounded-full text-2xl`}
          onClick={toggleTheme}
        >
          {theme === "light" ? <AiOutlineMoon /> : <AiOutlineSun />}
        </Button>
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm px-4 py-2 rounded-md btn-ghost transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <Button
        className={`btn btn-ghost rounded-full text-2xl md:hidden`}
        onClick={toggleNavMenu}
      >
        {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <NavMenu
          isOpen={isMenuOpen}
          className={`${
            theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
          }`}
        >
          <ul className="w-full">
            {links.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  to={link.href}
                  className="block text-end text-sm w-full h-8 px-8 pt-8 pb-12 border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </NavMenu>
      )}
    </nav>
  );
};

export default Navbar;
