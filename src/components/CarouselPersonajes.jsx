import React, { useState } from 'react';
import Personaje from '../components/Personaje';

import personaje1 from '../assets/img/personaje1-desktop.png';
import personaje2 from '../assets/img/personaje2-desktop.png';
import personaje3 from '../assets/img/personaje3-desktop.png';
import personaje4 from '../assets/img/personaje4-desktop.png';

let personajesData = [
  {
    id: 1,
    src: personaje1,
    alt: 'Per|sonaje 1',
    cargo: 'Commander',
    nombre: 'Douglas Hurley',
    texto:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    id: 2,
    src: personaje2,
    alt: 'Personaje 2',
    cargo: 'Mission Specialist',
    nombre: 'MARK SHUTTLEWORTH',
    texto:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    id: 3,
    src: personaje3,
    alt: 'Personaje 3',
    cargo: 'Pilot',
    nombre: 'Victor Glover',
    texto:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
  },
  {
    id: 4,
    src: personaje4,
    alt: 'Personaje 4',
    cargo: 'Flight Engineer',
    nombre: 'Anousheh Ansari',
    texto:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
  },
];

const CarouselPersonajes = () => {
  const [indexPersonaje, setIndexPersonaje] = useState(0);

  return (
    <>
      <Personaje
        data={personajesData}
        index={indexPersonaje}
        setIndex={setIndexPersonaje}
        key={indexPersonaje}
      />
      {/* <Personaje1 {...personajesData[indexPersonaje]} key={indexPersonaje} /> */}
      {/* <span className='indicators'>
        {personajesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndexPersonaje(index)}
            className={
              indexPersonaje === index
                ? 'indicator'
                : 'indicator indicator-inactive'
            }
          ></button>
        ))}
      </span> */}
    </>
  );
};

export default CarouselPersonajes;
