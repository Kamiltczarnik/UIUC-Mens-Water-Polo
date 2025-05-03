import React from 'react';
import PlayerCard from '../components/PlayerCard';
import '../assets/css/global.css';

export default function Roster() {
  const players = [
    { name: 'Alice Johnson', position: 'Driver', year: 'Senior', photo: '/assets/images/player1.jpg' },
  ];
  return (
    <div className="page roster">
      <h1>Roster</h1>
      <div className="player-grid">
        {players.map(p => <PlayerCard key={p.name} {...p} />)}
      </div>
    </div>
  );
}
