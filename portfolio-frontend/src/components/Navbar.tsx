import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
import NavMenu from "./NavMenu";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { label: "HOME", href: "/", isScroll: false },
    { label: "ABOUT", href: "about-section", isScroll: true },
    { label: "PROJECTS", href: "/projects", isScroll: false },
    { label: "CONTACT", href: "contact-section", isScroll: true },
  ];

  return (
    <nav className="fixed  w-full flex text-base top-0 right-0 z-50 font-bold justify-between bg-white shadow-lg px-4 md:px-10 h-20 dark:bg-slate-800 items-center">
      <div className="flex justify-between nav-max mx-auto w-full items-center">
        {/* Left Section */}
        <div className="flex md:space-x-3 items-center">
          {/* Logo */}
          <div className="flex btn-ghost rounded-md items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 p-2 py-3">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-8 h-8 object-cover rounded-full shadow-lg"
              />
              <span className="text-sm font-fira font-bold">TheKudaCode</span>
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <Button
            className="btn btn-ghost rounded-full text-xl"
            onClick={toggleTheme}
          >
            {theme === "light" ? <AiOutlineMoon /> : <AiOutlineSun />}
          </Button>
        </div>
        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) =>
            link.isScroll ? (
              <li key={link.href}>
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="text-sm px-4 py-2 rounded-md btn-ghost transition-colors cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm px-4 py-2 rounded-md btn-ghost transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <Button
        className="btn btn-ghost rounded-full text-2xl md:hidden"
        onClick={toggleNavMenu}
      >
        {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <NavMenu
          isOpen={isMenuOpen}
          className={`${
            theme === "light"
              ? "bg-gray-100 text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          <ul className="w-full">
            {links.map((link) =>
              link.isScroll ? (
                <li key={link.href} className="w-full">
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className="block text-end text-sm w-full h-8 px-8 pt-8 pb-12 border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
                    onClick={closeNavbar}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link.href} className="w-full">
                  <Link
                    to={link.href}
                    className="block text-end text-sm w-full h-8 px-8 pt-8 pb-12 border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    onClick={closeNavbar}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </NavMenu>
      )}
    </nav>
  );
};

export default Navbar;
