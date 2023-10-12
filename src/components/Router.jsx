import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import CarouselPersonajes from '../components/CarouselPersonajes';
import NavbarDestination from '../components/destination/NavbarDestination';
import { Vehicles } from '../components/vehicle';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='crew' element={<CarouselPersonajes />} />
          <Route path='destination' element={<NavbarDestination />} />
          <Route path='technology' element={<Vehicles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
