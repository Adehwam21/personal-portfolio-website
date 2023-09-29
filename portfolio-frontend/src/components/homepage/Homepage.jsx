import React from 'react';
import MyResume from '../../assets/files/MyResume.pdf';
import me1 from '../../assets/profile/me1.jpg'
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../../assets/themes/ThemeContext.js';
import ContactMe from '../contact/ContactMe';
import './Homepage.css'; // Import the external stylesheet

function Homepage() {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <section id='home'>
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
          <div className={`imageContainer ${isDarkMode ? 'dark' : 'light'}`}>
            <img src={me1} alt="Profile" className={`profileImage ${isDarkMode ? 'dark' : 'light'}`} />
          </div>
          <div className={`content ${isDarkMode ? 'dark' : 'light'}`}>
            <h1>Hi, I'm Aaron.</h1>
            <p>I am  very passionate about software engineering, machine learning, artificial intelligence, photography, graphics designing and game development. You can take a peak at my projects or hire me.</p>
            <div className={`buttons ${isDarkMode ? 'dark' : 'light'}`}>
              <a href={MyResume} download className={`button ${isDarkMode ? 'dark' : 'light'}`}>My Resume</a>
              <ScrollLink to="contact" smooth={true} offset={-70} duration={500} className={`button ${isDarkMode ? 'dark' : 'light'}`}>
                Contact Me
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>

      <section id='contact'>
        <ContactMe/>
      </section>
    </div>
    
  );
}

export default Homepage;
