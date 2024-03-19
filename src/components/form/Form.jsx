import React, { useState } from 'react';
import './Form.scss';

function Form() {
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Contact:', contact);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={handleContactChange}
          required
          className="form-field"
        />
      </div> */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="form-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
          className="form-field"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
