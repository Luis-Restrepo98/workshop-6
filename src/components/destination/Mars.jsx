import '../../sass/destination.scss'; 
import destinationMars from "../../assets/img/mars.png";
import lineaRectangular from "../../assets/icons/Rectangle.png";
import{BrowserRouter, Link} from 'react-router-dom';
/* import carruselMobile from "../assets/icons/carrusel.png"; */

const   DestinationMars = () => {
    return (
      <>
          <main className='container'>
                <div className="container-moon">
                    <p className="num">01 </p>
                    <h1 className='moon'>PICK YOUR DESTINATION</h1>
                </div>
              <div className='img_moon'>
                  <img src={destinationMars} className='destination' alt="" />
              </div>
              <section className='container_navegation'>
                          <h1 className='title_moon'>MARS</h1>
                          <p className='paragraph_planet'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                          <img src={lineaRectangular} className='linea_recta' alt="" />
                          <article className='container_distance'>
                                <h3 className='distance'>AVG. DISTANCE</h3>
                                <p className='km'>225 MIL. KM</p>
                          </article>
                          <article className='container_travel'>
                                <h3 className='travel'>Est. travel time</h3>
                                <p className='days'>9 MONTHS</p>
                          </article>  
                
              </section>
          </main>
      </>
    );
};
  
export default DestinationMars;