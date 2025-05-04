'use client';
import { useState } from 'react';
import Image from 'next/image';

const initialGalleryImages = [
  "images/gallery/7AF1AD81-0D2C-4EBB-ABFD-BE6F1C01AF1C_1_105_c.jpeg",
  "images/gallery/8D29A7D8-E816-4A6F-A185-4719AB65A1E1_1_105_c.jpeg",
  "images/gallery/78ED7846-3305-48C8-89CC-CAA79F65EFB9_1_105_c.jpeg",
  "images/gallery/84EFB657-F967-4704-8F05-7DC34E9B1291_1_105_c.jpeg",
  "images/gallery/96E2D41F-23D7-4644-AAE9-17E1AAE4D35F_1_105_c.jpeg",
  "images/gallery/716AAF77-7E0E-4750-A397-F766701673DC_1_102_o.jpeg",
  "images/gallery/16214762-14C4-4F4A-A804-82EE65E7E3C6_1_102_o.jpeg",
  "images/gallery/IMG_4153.png"
];

function shuffleArray(array: string[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shuffle = () => setGalleryImages(shuffleArray(galleryImages));

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="flex justify-end max-w-6xl mx-auto px-2 mb-4">
        <button
          onClick={shuffle}
          className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-50 flex items-center gap-2"
        > Shuffle Photos
        </button>
      </div>
      {/* Rest of the component remains the same */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {galleryImages.map((src, idx) => (
          <div 
            key={idx} 
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => setSelectedImage(src)}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}