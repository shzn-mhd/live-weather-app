import React, { useState } from 'react';

const FAQ = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: '',
    });
  };

  const styles = {
    formContainer: {
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #a9dfbf',
      borderRadius: '10px',
      backgroundColor: '#d4efdf',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      width: '90%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #a9dfbf',
      borderRadius: '5px',
      fontSize: '16px',
    },
    textArea: {
      width: '90%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #a9dfbf',
      borderRadius: '5px',
      fontSize: '16px',
      height: '100px',
    },
    button: {
      backgroundColor: '#28b463',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#239b56',
    },
    heading: {
      textAlign: 'center',
      color: '#145a32',
    },
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <textarea
          style={styles.textArea}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FAQ;
