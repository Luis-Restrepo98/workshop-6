import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../sass/navbar.scss';

import starIcon from '../assets/icons/star.svg';
import burguerIcon from '../assets/icons/burguer-menu.svg';
import closeIcon from '../assets/icons/close.svg';
import burguerMenuBackground from '../assets/img/burguer-menu-background.png';
import lineDesktop from '../assets/img/line-desktop.png';
import rectangleHeaderDesktop from '../assets/img/rectangle-header-desktop.png';

const Navbar = () => {
  let burgerMenuIcon, closeMenuIcon, mobileMenuBackground, navContainer;

  useEffect(() => {
    burgerMenuIcon = document.querySelector('#burguerIcon');
    closeMenuIcon = document.querySelector('#closeIcon');
    mobileMenuBackground = document.querySelector('#burguerMenuBackground');
    navContainer = document.querySelector('.navContainer');
  }, []);

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

  function openMobileMenu() {
    burgerMenuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'block';
    mobileMenuBackground.style.display = 'block';
    navContainer.style.display = 'flex';
  }

  function closeMobileMenu() {
    burgerMenuIcon.style.display = 'block';
    closeMenuIcon.style.display = 'none';
    mobileMenuBackground.style.display = 'none';
    navContainer.style.display = 'none';
  }

  return (
    <>
      <img src={starIcon} alt='star' id='starIcon' />
      <img
        src={burguerIcon}
        alt='burger'
        id='burguerIcon'
        onClick={openMobileMenu}
      />
      <img
        src={closeIcon}
        alt='close'
        id='closeIcon'
        onClick={closeMobileMenu}
      />
      <img
        src={burguerMenuBackground}
        alt='burger menu background'
        id='burguerMenuBackground'
      />
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
