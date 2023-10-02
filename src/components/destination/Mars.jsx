import '../../sass/destination.scss'; 
import pathMobile from '../../assets/icons/path.png';
import menuHamburguesa from "../../assets/icons/group.png";
import destinationMars from "../../assets/img/mars.png";
import lineaRectangular from "../../assets/icons/Rectangle.png";
import{BrowserRouter, Link} from 'react-router-dom';
/* import carruselMobile from "../assets/icons/carrusel.png"; */

const   DestinationMars = () => {
    return (
      <>
          <main className='container'>
              <header className='header'>
                  <div><img src={pathMobile} className='path' alt="path" /></div>
                  <div><img src={menuHamburguesa} className='menu_hamburguesa' alt="menu_hamburguesa" /></div>
              </header>
              <h1 className='moon'>Pick your destination</h1>
              <div className='img_moon'>
                  <img src={destinationMars} className='destination' alt="" />
              </div>
              <section className='container_navegation'>
              <BrowserRouter>
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
                </BrowserRouter>  
                          <h1 className='title_moon'>MARS</h1>
                          <p className='paragraph_planet'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                          <img src={lineaRectangular} className='linea_recta' alt="" />
                
              </section>
          </main>
      </>
    );
};
  
export default DestinationMars;