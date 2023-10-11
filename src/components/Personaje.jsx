import React from 'react';
import Navbar from './Navbar';

import linea from '../assets/icons/linea-personajes.png';

import '../sass/personaje.scss';

const Personaje = props => {
  let data = props.data;
  let index = props.index;
  let setIndex = props.setIndex;

  return (
    <>
      <main className='mainContainerPersonajes'>
        <Navbar />
        <h1 className='mainTitle'>
          <span className='mainTitle__number'>02</span> Meet your crew
        </h1>
        <div className='imageContainer'>
          <img
            src={data[index].src}
            alt={data[index].nombre}
            className='personaje'
          />
        </div>
        <img src={linea} alt='linea' className='linea' />

        {/* CAROUSEL INDICATORS BEGINS */}

        <span className='indicators'>
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={
                index === idx ? 'indicator' : 'indicator indicator-inactive'
              }
            ></button>
          ))}
        </span>

        {/* CAROUSEL INDICATORS ENDS */}

        <section className='informacionPersonaje'>
          <h1 className='informacionPersonaje__cargo'>{data[index].cargo}</h1>
          <h2 className='informacionPersonaje__nombre'>{data[index].nombre}</h2>
          <p className='informacionPersonaje__texto'>{data[index].texto}</p>
        </section>
      </main>
    </>
  );
};

export default Personaje;
