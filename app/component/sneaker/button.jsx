"use client";
import { useState } from "react";

export function ImageSlider() {
  const images = [
    "/assets/images/image-product-1.jpg",
    "/assets/images/image-product-2.jpg",
    "/assets/images/image-product-3.jpg",
    "/assets/images/image-product-4.jpg",
  ];

  const thumbnails = [
    "/assets/images/image-product-1-thumbnail.jpg",
    "/assets/images/image-product-2-thumbnail.jpg",
    "/assets/images/image-product-3-thumbnail.jpg",
    "/assets/images/image-product-4-thumbnail.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-xl mx-auto select-none">
      
      <div className="relative w-full overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-md">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-slide-${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-150 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-150 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white w-5" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      
      <div className="hidden md:flex gap-3 justify-center">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? "border-orange-500 opacity-100 ring-2 ring-orange-300"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <img
              src={thumb}
              alt={`thumbnail-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
