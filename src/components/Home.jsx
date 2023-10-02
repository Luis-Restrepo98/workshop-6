import React from 'react';
import '../sass/home.scss';
import homeDesktop from '../assets/img/home-desktop.png';
import starIcon from '../assets/icons/star.svg';
import ovalDesktop from '../assets/img/oval-desktop.png';
import lineDesktop from '../assets/img/line-desktop.png';
import rectangleHeaderDesktop from '../assets/img/rectangle-header-desktop.png';

const Home = () => {
  return (
    <>
      <main className='mainContainer'>
        <img src={homeDesktop} alt='home desktop' id='backgroundDesktop' />
        <img src={starIcon} alt='star' id='starIcon' />
        <img src={lineDesktop} alt='line' id='lineDesktop' />
        <img
          src={rectangleHeaderDesktop}
          alt='rectangle'
          id='rectangleHeaderDesktop'
        />
        <img src={ovalDesktop} alt='oval' id='ovalDesktop' />
        <span id='explore'>EXPLORE</span>
        <article className='desktopTextContainer'>
          <p id='introduction'>SO, YOU WANT TO TRAVEL TO</p>
          <p id='mainTitle'>SPACE</p>
          <p id='paragraph'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
