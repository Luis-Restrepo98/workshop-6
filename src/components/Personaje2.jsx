import React from 'react';
import '../sass/personajes.scss';
import pathMobile from '../assets/icons/path.png';
import menuHamburguesa from "../assets/icons/group.png"
import personajeSecundario from "../assets/img/segundo-personaje.png"
import lineaRectangular from "../assets/icons/Rectangle.png"
import carruselMobile from "../assets/icons/carrusel2.png"


const Personaje2 = () => {
  return (
    <>
        <main className='container__principal'>
            <header className='header__container'>
                <div><img src={pathMobile} className='path_mobile' alt="path_mobile" /></div>
                <div><img src={menuHamburguesa} className='menu_hamburguesa' alt="menu_hamburguesa" /></div>
            </header>
            <h1 className='title__primer__personaje'>Meet your crew</h1>
            <div className='container__image'>
                <img src={lineaRectangular} className='linea__rectangular' alt="linea__rectangular" />
                <img src={personajeSecundario} className='personaje__principal' alt="personaje__principal" />
            </div>
            <section className='container__carrusel'>
                <img src={carruselMobile} className='carrusel' alt="carrusel" />
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>Mission Specialist  </h1>
                        <h2 className='title__douglas'>MARK SHUTTLEWORTH</h2>
                    </div>
                    <p className='paragraph__douglas'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Personaje2;