import React, { useState } from 'react';
import { Navegation } from './Navegation';
import '../../sass/destination.scss';

const NavbarDestination = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToComponent(index) {
    setActiveIndex(index);
  }

  return (
    <>
      <div className='navbar'>
        {Navegation[activeIndex]}
        <button className='Moon' onClick={() => goToComponent(0)}>
          MOON
        </button>
        <button className='Mars' onClick={() => goToComponent(1)}>
          MARS
        </button>
        <button className='Europa' onClick={() => goToComponent(2)}>
          EUROPA
        </button>
        <button className='Titan' onClick={() => goToComponent(3)}>
          TITAN
        </button>
      </div>
    </>
  );
};

export default NavbarDestination;
