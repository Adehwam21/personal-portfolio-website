import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const links = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/project" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="flex text-base font-bold justify-between bordeer-b shadow-lg mb-5 px-10 h-16 items-center">
      <Link to="/" className="text-sm text-zinc-800 font-bold">AARON  KUDADJIE</Link>
      <ul className="flex space-x-14 ">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              to={link.href} 
              className="text-sm text-zinc-700 hover:text-blue-800 transition-colors "
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
