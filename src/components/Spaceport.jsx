import React from 'react';
import '../sass/personajes.scss';

const Spaceport = () => {
  return (
    <>
        <main className='container__principal'>
            <h1 className='title__primer__personaje'>SPACE LAUNCH 101</h1>
            <div className='container__image2'>
            </div>
            <section className='container__carrusel'>
                <div className='container__paragraph'>
                    <div className='container__title'>
                        <h1 className='title__Commander '>THE TERMINOLOGY… </h1>
                        <h2 className='title__douglas'>SPACEPORT</h2>
                    </div>
                    <p className='paragraph__douglas'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
            </section>
        </main>
    </>
  );
};

export default Spaceport;