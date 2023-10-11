import React from 'react';
import linea from '../assets/icons/linea-personajes.png';
// import personaje1Mobile from '../assets/img/personaje1-mobile.png';
// import carruselMobile from '../assets/icons/carrusel.png';

import '../sass/personajes.scss';

const Personaje1 = ({ src, alt, cargo, nombre, texto }) => {
  return (
    <>
      <main className='mainContainer'>
        <h1 className='mainTitle'>
          <span className='mainTitle__number'>02</span> Meet your crew
        </h1>
        <div className='imageContainer'>
          <img src={src} alt={alt} className='personaje' />
        </div>
        <img src={linea} alt='linea' className='linea' />
        <section className='informacionPersonaje'>
          <h1 className='informacionPersonaje__cargo'>{cargo}</h1>
          <h2 className='informacionPersonaje__nombre'>{nombre}</h2>
          <p className='informacionPersonaje__texto'>{texto}</p>
        </section>
      </main>
    </>
  );
};

export default Personaje1;
