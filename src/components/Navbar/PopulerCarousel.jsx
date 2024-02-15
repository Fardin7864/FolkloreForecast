import React, { useState } from 'react';

const PopulerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["Text 1", "Text 2", "Text 3"]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide">
        <p>{items[currentIndex]}</p>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default PopulerCarousel;