import React, { useState } from 'react';
import axios from 'axios';
import '../contact/ContactMe.css';

function MessageForm() {

    const url = 'http://localhost:5000'
    // Form data state
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

    // Handle form input changes
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    // Handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        // Send the form data to your backend route for sending emails
        const response = await axios.post( url + '/send-mail', formData);

        console.log('Email sent successfully', response.data);
        alert('Sent Successfully.');

      } catch (error) {
        console.error('Error sending email', error);
      }
      console.log('Form Data:', formData);
  };

  return(
    <form className="form" onSubmit={handleSubmit}>
        <div className='form-group-name'>
            <input
            type='text'
            name='firstName'
            placeholder='First Name*'
            value={formData.firstName}
            onChange={handleInputChange}
            required
            />
            <input
            type='text'
            name='lastName'
            placeholder='Last Name*'
            value={formData.lastName}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className='form-group'>
            <input
            type='email'
            name='email'
            placeholder='Your Email*'
            value={formData.email}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className='form-group'>
            <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={formData.subject}
            onChange={handleInputChange}
            />
        </div>
        <div className='form-group'>
            <textarea
            name='message'
            placeholder='Type your message here'
            rows='5'
            value={formData.message}
            onChange={handleInputChange}
            ></textarea>
        </div>
        <button type='submit'>Send</button>
    </form>
  );
};

export default MessageForm;