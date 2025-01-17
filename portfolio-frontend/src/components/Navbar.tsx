import React, { useState } from 'react';
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const links = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/project" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="flex text-base font-bold justify-between border-transparent shadow-lg mb-5 px-10 h-16 items-center">
      <div className="flex space-x-8 items-center">
        {/* Brand Name */}
        <Link to="/" className="text-sm font-bold px-4 py-2 rounded-md btn-ghost">
          AARON KUDADJIE
        </Link>
        {/* Theme Toggle Button */}
        <Button className="btn btn-ghost text-xl" onClick={toggleTheme}>
          {theme === 'light' ? <AiOutlineMoon /> : <AiOutlineSun />}
        </Button>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
