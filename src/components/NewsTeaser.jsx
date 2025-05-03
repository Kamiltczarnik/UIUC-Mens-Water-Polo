import React from 'react';
import '../assets/css/global.css';

export default function NewsTeaser() {
  const headlines = [
    'Illini Defeat Wildcats in Home Opener',
    'Spring Tournament Announced',
    '2024 Team Captains Named',
  ];
  return (
    <section className="news-teaser">
      <h2>Latest News</h2>
      <ul>
        {headlines.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </section>
  );
}
