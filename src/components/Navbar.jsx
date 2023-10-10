import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/navbar.scss';

import starIcon from '../assets/icons/star.svg';
import lineDesktop from '../assets/img/line-desktop.png';
import rectangleHeaderDesktop from '../assets/img/rectangle-header-desktop.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: '/',
      number: '00',
      label: 'home',
    },
    {
      id: 2,
      link: '/destination',
      number: '01',
      label: 'destination',
    },
    {
      id: 3,
      link: '/crew',
      number: '02',
      label: 'crew',
    },
    {
      id: 4,
      link: '/technology',
      number: '03',
      label: 'technology',
    },
  ];

  return (
    <>
      <img src={starIcon} alt='star' id='starIcon' />
      <img
        src={rectangleHeaderDesktop}
        alt='rectangle'
        id='rectangleHeaderDesktop'
      />
      <img src={lineDesktop} alt='line' id='lineDesktop' />
      <nav className='navContainer'>
        {links.map(item => (
          <NavLink
            key={item.id}
            to={item.link}
            className={'navContainer__link'}
          >
            <b>{item.number}</b> {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
