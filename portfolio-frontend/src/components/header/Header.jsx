import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../../assets/themes/ThemeContext';
import './Header.css';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }, 100); // for delay
  };

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };
  
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className='logo'>
        <div className="mode-toggle-icon" onClick={toggleTheme} title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className={`nav-list ${isMobileMenuOpen ? 'show' : ''}`}>
          <li>
            <ScrollLink to="home" smooth={true} offset={-70} duration={500} onClick={toggleMobileMenu}>
              HOME
            </ScrollLink>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMobileMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} offset={-70} duration={500} onClick={toggleMobileMenu}>
              CONTACT
            </ScrollLink>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              ABOUT ME
            </Link>
          </li>
        </ul>

        <div className="mobile-toggle-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
