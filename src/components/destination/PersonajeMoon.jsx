import '../../sass/destination.scss'; 
import pathMobile from '../../assets/icons/path.png';
import menuHamburguesa from "../../assets/icons/group.png";
import destinationMoon from "../../assets/img/moon.png";
import lineaRectangular from "../../assets/icons/Rectangle.png";


const DestinationMoon = () => {
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
                  <img src={destinationMoon} className='destination' alt="" />
              </div>
              <section className='container_navegation'>
                          <h1 className='title_moon'>MOON</h1>
                          <p className='paragraph_planet'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                          <img src={lineaRectangular} className='linea_recta' alt="" />
                          <article className='container_distance'>
                                <h3 className='distance'>AVG. DISTANCE</h3>
                                <p className='km'>384,400 KM</p>
                          </article>
                          <article className='container_travel'>
                                <h3 className='travel'>Est. travel time</h3>
                                <p className='days'>3 DAYS</p>
                          </article>             
              </section>
          </main>
      </>
    );
};
  
export default DestinationMoon;