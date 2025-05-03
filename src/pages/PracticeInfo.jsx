import React from 'react';
import '../assets/css/global.css';

export default function PracticeInfo() {
  const schedule = [
    { day: 'Monday', time: '6:00–8:00 PM', location: 'ARC Outdoor Pool' },
    { day: 'Wednesday', time: '6:00–8:00 PM', location: 'ARC Outdoor Pool' },
  ];
  const gear = ['Water polo suit', 'Cap', 'Goggles', 'Towel', 'Water bottle'];

  return (
    <div className="page practice-info">
      <h1>Practice Info</h1>
      <section>
        <h2>Weekly Practice Schedule</h2>
        <ul>
          {schedule.map((s) => <li key={s.day}>{s.day}: {s.time} @ {s.location}</li>)}
        </ul>
      </section>
      <section>
        <h2>Location Map</h2>
        <iframe
          title="Pool Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen
        />
      </section>
      <section>
        <h2>Gear Checklist</h2>
        <ul>
          {gear.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
