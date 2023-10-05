import React from 'react';
import '../sass/personajes.scss';
import pathMobile from '../assets/icons/path.png';
import menuHamburguesa from "../assets/icons/group.png"
import personajePrincipal from "../assets/img/primer-personaje.png"
import lineaRectangular from "../assets/icons/Rectangle.png"
import carruselMobile from "../assets/icons/carrusel.png"


const Personajes = () => {
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
                <img src={personajePrincipal} className='personaje__principal' alt="personaje__principal" />
            </div>
            <section className='container__carrusel'>
                <img src={carruselMobile} className='carrusel' alt="carrusel" />
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>Commander </h1>
                        <h2 className='title__douglas'>Douglas Hurley</h2>
                    </div>
                    <p className='paragraph__douglas'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Personajes;