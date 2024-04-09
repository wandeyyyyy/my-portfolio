
import React, { useState } from 'react';
import axios from 'axios'
import '../index.css'
const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send-email', formData);
      alert('Email sent successfully');
      setFormData({ name: '', email: '', subject: '', message: ''  });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='text-grey'>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className='w-[100%] h-[40px] my-input'
          required
        />
      </label>
      <br />
      <label className='text-grey'>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className='w-[100%] h-[40px] my-input'
          required
        />
      </label>
      <br />
      <label className='text-grey'>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className='w-[100%] h-[50px] my-input'
          required
        />
      </label>
      <br />
      <label className='text-grey'>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className='w-[100%] my-input'
          required
        />
      </label>
      <br />
      <button type="submit" className='w-[100%] sendBtn text-white bg-orange py-2 mt-4'>Send</button>
    </form>
  );
};

export default MyForm;
