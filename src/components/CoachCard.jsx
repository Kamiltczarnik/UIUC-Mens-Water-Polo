import React from 'react';
import '../assets/css/global.css';

export default function CoachCard({ name, title, photo }) {
  return (
    <div className="coach-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}
