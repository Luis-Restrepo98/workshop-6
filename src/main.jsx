import React from 'react'
import ReactDOM from 'react-dom/client'
import Personajes from './components/Personajes'
import Personaje2 from "./components/Personaje2"
import Personaje3 from "./components/personaje3"
import Personaje4 from "./components/personaje4"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Personajes />
    <Personaje2/>
    <Personaje3/>
    <Personaje4/>
  </React.StrictMode>,
)
