import React from 'react';
import '../assets/css/global.css';

export default function Contact() {
  return (
    <div className="page contact">
      <h1>Contact</h1>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="4" required />
        <button type="submit">Send</button>
      </form>
      <div className="direct-info">
        <p>Email: <a href="mailto:waterpolo@illinois.edu">waterpolo@illinois.edu</a></p>
        <p>Phone: (217) 333-1000</p>
      </div>
    </div>
  );
}
