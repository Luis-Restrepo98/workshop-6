import '../../sass/destination.scss'; 
import pathMobile from '../../assets/icons/path.png';
import menuHamburguesa from "../../assets/icons/group.png";
import destinationTitan from "../../assets/img/titan.png";
import lineaRectangular from "../../assets/icons/Rectangle.png";
import{BrowserRouter, Link} from 'react-router-dom';


const DestinationTitan = () => {
    return (
      <>
          <main className='container'>
              <header className='header'>
                  <div><img src={pathMobile} className='path' alt="path" /></div>
                  <div><img src={menuHamburguesa} className='menu_hamburguesa' alt="menu_hamburguesa" /></div>
              </header>
                <div className="container-moon">
                    <p className="num">01 </p>
                    <h1 className='moon'>PICK YOUR DESTINATION</h1>
                </div>
              <div className='img_moon'>
                  <img src={destinationTitan} className='destination' alt="" />
              </div>
              <section className='container_navegation'>
            
                          <h1 className='title_moon'>TITAN</h1>
                          <p className='paragraph_planet'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                          <img src={lineaRectangular} className='linea_recta' alt="" />
                          <article className='container_distance'>
                                <h3 className='distance'>AVG. DISTANCE</h3>
                                <p className='km'>1.6 BIL. KM</p>
                          </article>
                          <article className='container_travel'>
                                <h3 className='travel'>Est. travel time</h3>
                                <p className='days'>7 YEARS</p>
                          </article>  
              </section>
          </main>
      </>
    );
};
  
export default DestinationTitan;