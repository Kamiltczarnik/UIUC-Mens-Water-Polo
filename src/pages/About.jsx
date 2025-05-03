import React from 'react';
import CoachCard from '../components/CoachCard';
import '../assets/css/global.css';

export default function About() {
  const coaches = [
    { name: 'John Doe', title: 'Head Coach', photo: '/assets/images/coach_john.jpg' },
    { name: 'Mike Smith', title: 'Assistant Coach', photo: '/assets/images/coach_mike.jpg' },
  ];
  return (
    <div className="page about">
      <h1>About</h1>
      <section>
        <h2>Team History and Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </section>
      <section>
        <h2>Coaches</h2>
        <div className="coach-grid">
          {coaches.map((c) => <CoachCard key={c.name} {...c} />)}
        </div>
      </section>
    </div>
  );
}
