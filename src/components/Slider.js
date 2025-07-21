// src/components/Slider.jsx

import React, { useState, useEffect } from "react";

const images = [
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
  "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden max-h-[500px]">
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)`, width: `${images.length * 100}%` }}>
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full flex-shrink-0" alt={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${current === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
