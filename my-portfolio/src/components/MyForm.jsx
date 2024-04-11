
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';


import '../index.css'
const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  axios.post("http://localhost:5000/api/mail", formData)
  .then(() => {
    setLoading(false); 
    // Display SweetAlert notification on success
    swal.fire({
    icon: 'success',
      text: 'Message sent Successfully',
      confirmButtonColor: '#fe6235'
    });
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  })
    .catch(() => {
      setLoading(false); 
      console.log("Failed");
    });

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
      <button type="submit" className='w-[100%] sendBtn text-white bg-orange py-2 mt-4'>
      {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default MyForm;
