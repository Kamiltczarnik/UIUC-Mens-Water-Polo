import React from 'react';

export default function PlayerCard({ name, position, year, photo }) {
  return (
    <div className="player-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{position}, {year}</p>
    </div>
  );
}
