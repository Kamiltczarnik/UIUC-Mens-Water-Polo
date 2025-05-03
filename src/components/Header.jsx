import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/global.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/images/illini_logo.png" alt="UIUC" />
          <span>Men's Water Polo</span>
        </Link>
      </div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={open ? 'nav nav--open' : 'nav'}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/practice">Practice Info</Link>
        <Link to="/schedule">Schedule & Results</Link>
        <Link to="/roster">Roster</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
