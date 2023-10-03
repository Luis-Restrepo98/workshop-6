import React from 'react';
import '../sass/personajes.scss';
import pathMobile from '../assets/icons/path.png';
import menuHamburguesa from "../assets/icons/group.png"




const Capsule = () => {
  return (
    <>
        <main className='container__principal'>
            <header className='header__container'>
                <div><img src={pathMobile} className='path_mobile' alt="path_mobile" /></div>
                <div><img src={menuHamburguesa} className='menu_hamburguesa' alt="menu_hamburguesa" /></div>
            </header>
            <h1 className='title__primer__personaje'>SPACE LAUNCH 101</h1>
            <div className='container__image3'>
            </div>
            <section className='container__carrusel'>
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>THE TERMINOLOGY… </h1>
                        <h2 className='title__douglas'>SPACE CAPSULE</h2>
                    </div>
                    <p className='paragraph__douglas'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. </p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Capsule;