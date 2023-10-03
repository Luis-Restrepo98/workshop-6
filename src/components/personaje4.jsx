import React from 'react';
import '../sass/personajes.scss';
import pathMobile from '../assets/icons/path.png';
import menuHamburguesa from "../assets/icons/group.png"
import personajeCuarto from "../assets/img/cuarto-personaje.png"
import lineaRectangular from "../assets/icons/Rectangle.png"
import carruselMobile from "../assets/icons/carrusel4.png"


const Personaje4 = () => {
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
                <img src={personajeCuarto} className='personaje__principal' alt="personaje__principal" />
            </div>
            <section className='container__carrusel'>
                <img src={carruselMobile} className='carrusel' alt="carrusel" />
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>Flight Engineer </h1>
                        <h2 className='title__douglas'>Anousheh Ansari</h2>
                    </div>
                    <p className='paragraph__douglas'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Personaje4;