'use client';
import { useState } from 'react';
import Image from 'next/image';

const carouselImages = [
  '/images/carousel1.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpg',
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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
            Welcome to UIUC Men's Water Polo
          </h1>
        </div>
      </section>

      {/* Carousel */}
      <section className="w-full max-w-4xl mx-auto mt-8">
        <div className="relative">
          <Image
            src={carouselImages[current]}
            alt={`Carousel ${current + 1}`}
            width={900}
            height={500}
            className="rounded-xl object-cover w-full h-72 md:h-96"
          />
          {/* Carousel Controls */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#FF5F05]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
