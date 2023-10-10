import React, { useState } from 'react';
import { Carrusel } from '../components/carrusel';
import '../sass/personajes.scss';

const CarruselPersonajes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = slideIndex => {
    setActiveIndex(slideIndex);
  };

  return (
    <>
      {Carrusel[activeIndex]}
      <div className='carrusel__circular'>
        {Carrusel.map((_, idx) => (
          <div
            key={idx}
            className={`carrusel__circular__item`}
            onClick={() => goToSlide(idx)}
          >
            &#9865;
          </div>
        ))}
      </div>
    </>
  );
};

export default CarruselPersonajes;
