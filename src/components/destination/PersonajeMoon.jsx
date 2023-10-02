
import '../../sass/destination.scss'; 
import pathMobile from '../../assets/icons/path.png';
import menuHamburguesa from "../../assets/icons/group.png";
import destinationMoon from "../../assets/img/moon.png";
import lineaRectangular from "../../assets/icons/Rectangle.png";
import{BrowserRouter, Link} from 'react-router-dom';
/* import carruselMobile from "../assets/icons/carrusel.png"; */

const DestinationMoon = () => {
    return (
      <>
          <main className='container'>
              <header className='header'>
                  <div><img src={pathMobile} className='path' alt="path" /></div>
                  <div><img src={menuHamburguesa} className='menu_hamburguesa' alt="menu_hamburguesa" /></div>
              </header>
              <h1 className='moon'>Pick your destination</h1>
              <div className='img_moon'>
                  <img src={destinationMoon} className='destination' alt="" />
              </div>
              <section className='container_navegation'>
                <BrowserRouter>
                    <div className='navbar-destination'>
                        <ul className='navbar-nav'>
                            <li className='nav-items'>
                                <Link className="nav-link" to="/personajemoon"> MOONS
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link className="nav-link" to="/Mars"> MARS
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link className="nav-link" to="/Mars"> EUROPA
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link className="nav-link" to="/Mars"> TITAN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </BrowserRouter> 
                          <h1 className='title_moon'>MOON</h1>
                          <p className='paragraph_planet'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                          <img src={lineaRectangular} className='linea_recta' alt="" />
                
              </section>
          </main>
      </>
    );
};
  
export default DestinationMoon;