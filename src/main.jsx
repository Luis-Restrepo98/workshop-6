import React from 'react'
import ReactDOM from 'react-dom/client'
import CarruselPersonajes from './components/CarruselPersonajes';
import Home from './components/Home';
import Moon from './components/destination/PersonajeMoon';
import Mars from './components/destination/Mars';

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
    <Moon/>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mars/>
  </React.StrictMode>
);
