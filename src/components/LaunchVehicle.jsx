import React from 'react';
import '../sass/personajes.scss';

const LaunchVehicle = () => {
  return (
    <>
        <main className='container__principal'>
            <h1 className='title__primer__personaje'>SPACE LAUNCH 101</h1>
            <div className='container__image'></div>
            <section className='container__carrusel'>
                    <div className='container__title'>
                        <h3 className='title__Commander '>THE TERMINOLOGY… </h3>
                        <h1 className='title__douglas'>LAUNCH VEHICLE</h1>
                    </div>
                    <p className='paragraph__douglas'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!</p>
            </section>
        </main>
    </>
  );
};

export default LaunchVehicle;