import React from 'react';
import '../assets/css/global.css';

export default function ScheduleResults() {
  const upcoming = [
    { date: 'Mon 25', opponent: 'Wildcats', home: true },
  ];
  const results = [
    { date: 'Sat 15', opponent: 'Badgers', score: '10–8' },
  ];

  return (
    <div className="page schedule-results">
      <h1>Schedule & Results</h1>
      <section>
        <h2>Upcoming Games</h2>
        <table>
          <thead><tr><th>Date</th><th>Opponent</th><th>Home/Away</th></tr></thead>
          <tbody>
            {upcoming.map((g,i) => (
              <tr key={i}><td>{g.date}</td><td>{g.opponent}</td><td>{g.home ? 'Home' : 'Away'}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Results</h2>
        <ul>
          {results.map((r,i) => <li key={i}>{r.date} vs {r.opponent}: {r.score}</li>)}
        </ul>
      </section>
    </div>
  );
}
