import React from 'react';
import { useTheme } from '../../assets/themes/ThemeContext.js';
import './ContactMe.css';
import MessageForm from '../forms/MessageForm.jsx';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

function ContactMe() {
  const { isDarkMode } = useTheme();
  return (
    <section className={`contactme-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='contact-container'>
        {/* Contact Details */}
        <div className='contact-details'>
          <h2>Contact</h2>
          <p>Looking foward to hearing from you.</p>
          <div className='contact-info'>
            <FiPhone className='contact-icon' /> 
            <p>+233559595705</p>
          </div>
          <div className='contact-info'>
            <FiMail className='contact-icon'/> 
            <p>akkudadjie@gmail.com</p>
          </div>
          <div className='contact-info'>
            <FiMapPin className='contact-icon' /> 
            <p>Lord's Webley Plus</p>
          </div>
        </div>

        {/* Message Form */}
        <div className='message-form'>
          <MessageForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
