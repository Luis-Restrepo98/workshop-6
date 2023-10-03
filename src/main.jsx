import React from 'react'
import ReactDOM from 'react-dom/client'
import CarruselPersonajes from './components/CarruselPersonajes';
import Home from './components/Home';
import NavbarDestination from './components/destination/NavbarDestination';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarruselPersonajes/>
  </React.StrictMode>,
)

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarDestination/>
  </React.StrictMode>
);

