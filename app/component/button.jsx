"use client";
import { useState } from "react";

export function ImageSlider() {
  const images = [
    "/assets/images/image-product-1.jpg",
    "/assets/images/image-product-2.jpg",
    "/assets/images/image-product-3.jpg",
    "/assets/images/image-product-4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next slide
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Go to previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto overflow-hidden relative rounded-4xl space-x-2">
      
      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full flex"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
      >
        <img
          src="\assets\images\icon-previous.svg"
          alt="shoe"
          className=" bg-white rounded-full "
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
      >
        <img
          src="\assets\images\icon-next.svg"
          alt="shoe"
          className=" rounded-4xl bg-white"
        />
      </button>
    </div>
  );
}