import React from 'react';
import '../assets/css/global.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <a href="mailto:waterpolo@illinois.edu">waterpolo@illinois.edu</a>
        <span>(217) 333-1000</span>
      </div>
      <div className="social">
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-facebook" /></a>
      </div>
      <div className="link">
        <a href="https://ncaa.org" target="_blank" rel="noopener noreferrer">NCAA.ORG</a>
      </div>
    </footer>
  );
}
