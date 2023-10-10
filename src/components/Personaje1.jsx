import React from 'react';
import personaje1Mobile from '../assets/img/personaje1-mobile.png';
import linea from '../assets/icons/linea-personajes.png';
import carruselMobile from '../assets/icons/carrusel.png';

import '../sass/personajes.scss';

const Personaje1 = () => {
  return (
    <>
      <main className='mainContainer'>
        <h1 className='mainTitle'>
          <span className='mainTitle__number'>02</span> Meet your crew
        </h1>
        <div className='imageContainer'>
          <img src={personaje1Mobile} alt='personaje' className='personaje' />
        </div>
        <img src={linea} alt='linea' className='linea' />
        {/*  <section className='container__carrusel'>
          <img src={carruselMobile} className='carrusel' alt='carrusel' />
        </section> */}
        <section className='informacionPersonaje'>
          <h1 className='informacionPersonaje__cargo'>Commander</h1>
          <h2 className='informacionPersonaje__nombre'>Douglas Hurley</h2>
          <p className='informacionPersonaje__texto'>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </section>
      </main>
    </>
  );
};

export default Personaje1;
