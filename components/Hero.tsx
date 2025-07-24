'use client';
import { useState } from 'react';
import Image from 'next/image';

const carouselImages = [
  '/images/team-highlights/wild-bill2025.jpeg',
  '/images/team-highlights/Iowa-teampic.jpeg',
  '/images/team-highlights/wild-bill2024.JPG',
  
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  // Simple carousel logic
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div>
      {/* Hero Image */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/images/OSU-2025.jpeg"
          alt="UIUC Men's Water Polo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl text-white mb-2 font-semibold tracking-wide">
            Welcome to
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
            UIUC Men's Water Polo
          </h1>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12">
        <div className="flex items-center justify-center max-w-5xl mx-auto mb-4 px-2">
          <h2 className="text-3xl font-bold text-center flex-1">Team Highlights</h2>
        </div>
        <div className="relative max-w-5xl mx-auto bg-white rounded-xl flex items-center justify-center h-[350px] md:h-[400px] border border-gray-200 overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
            aria-label="Previous"
          >
            &#8592;
          </button>
          {/* Image */}
          {carouselImages.length > 0 ? (
            <div className="relative w-full h-full">
              <Image
                src={carouselImages[current]}
                alt={`Highlight ${current + 1}`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 15l3-3 4 4" />
                <circle cx="8.5" cy="8.5" r="1.5" />
              </svg>
            </div>
          )}
          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Dots and Photo Count */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex gap-2 mb-1">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#FF5F05]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="text-gray-600 text-sm">
            Photo {current + 1} of {carouselImages.length}
          </div>
        </div>
      </section>
    </div>
  );
}