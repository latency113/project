import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { src: "./images/Banner.jpg", alt: "Banner1" },
    { src: "./images/banner1.jpg", alt: "Banner2" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // สไลด์อัตโนมัติทุกๆ 5 วินาที
    return () => clearInterval(interval);
  }, [slides.length]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="max-w-4xl mx-auto relative ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? "block" : "hidden"}`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full rounded-lg h-auto max-h-[300px] sm:max-h-[400px] object-cover" />
        </div>
      ))}

      <button
        className="prev absolute top-1/2 text-white font-bold text-lg p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-r transform -translate-y-1/2"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </button>
      <button
        className="next absolute top-1/2 right-[0px] text-white font-bold text-lg p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-l transform -translate-y-1/2"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </button>

      <div className="text-center mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot h-3 w-3 mx-1 bg-gray-400 rounded-full inline-block ${
              index === slideIndex ? "bg-gray-700" : ""
            } cursor-pointer`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
