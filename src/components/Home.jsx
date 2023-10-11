import React from 'react';
import '../sass/home.scss';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <main className='mainContainerHome'>
        <Navbar />
        <div id='oval'></div>
        <article id='TextContainer'>
          <p id='introduction'>SO, YOU WANT TO TRAVEL TO</p>
          <p id='mainTitle'>SPACE</p>
          <p id='paragraph'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <span id='explore'>EXPLORE</span>
      </main>
    </>
  );
};

export default Home;
