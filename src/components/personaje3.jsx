import React from 'react';
import '../sass/personajes.scss';
import pathMobile from '../assets/icons/path.png';
import menuHamburguesa from "../assets/icons/group.png"
import personajeTerciario from "../assets/img/tercer-personaje.png"
import lineaRectangular from "../assets/icons/Rectangle.png"
import carruselMobile from "../assets/icons/carrusel3.png"


const Personaje3 = () => {
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
                <img src={personajeTerciario} className='personaje__principal' alt="personaje__principal" />
            </div>
            <section className='container__carrusel'>
                <img src={carruselMobile} className='carrusel' alt="carrusel" />
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>PILOT </h1>
                        <h2 className='title__douglas'>Victor Glover</h2>
                    </div>
                    <p className='paragraph__douglas'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Personaje3;