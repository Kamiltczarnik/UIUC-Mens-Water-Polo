import React from 'react';
import HeroBanner from '../components/HeroBanner';
import QuickLinks from '../components/QuickLinks';
import NewsTeaser from '../components/NewsTeaser';

export default function Home() {
  return (
    <div className="page home">
      <HeroBanner />
      <QuickLinks />
      <NewsTeaser />
    </div>
  );
}
