import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/global.css';

export default function QuickLinks() {
  return (
    <section className="quick-links">
      <Link to="/practice" className="btn">Practice Info</Link>
      <Link to="/schedule" className="btn">Schedule</Link>
      <Link to="/roster" className="btn">Roster</Link>
    </section>
  );
}
