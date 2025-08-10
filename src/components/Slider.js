

import React, { useState, useEffect } from "react";

const images = [
  "/images/banner-1.png",
  "/images/ban-new-2.png",
  "/images/ban-new-1.png",
  "/images/ban-new-3.png"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Image wrapper */}
      <div
        className="flex w-full-important transition-transform duration-700 ease-in-out "
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-[500px] object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
