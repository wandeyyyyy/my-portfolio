
import React, { useState } from 'react';
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
      </label>
      <br />
      <button type="submit" className='w-[100%] sendBtn text-white bg-orange py-2 mt-4'>Send</button>
    </form>
  );
};

export default MyForm;
