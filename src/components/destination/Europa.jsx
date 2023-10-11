import '../../sass/destination.scss';
import destinationEuropa from '../../assets/img/europa.png';
import lineaRectangular from '../../assets/icons/Rectangle.png';
import Navbar from '../Navbar';

const DestinationEuropa = () => {
  return (
    <>
      <main className='container'>
        <Navbar />

        <div className='container-moon'>
          <p className='num'>01 </p>
          <h1 className='moon'>PICK YOUR DESTINATION</h1>
        </div>
        <div className='img_moon'>
          <img src={destinationEuropa} className='destination' alt='' />
        </div>
        <section className='container_navegation'>
          <h1 className='title_moon'>EUROPA</h1>
          <p className='paragraph_planet'>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <img src={lineaRectangular} className='linea_recta' alt='' />
          <article className='container_distance'>
            <h3 className='distance'>AVG. DISTANCE</h3>
            <p className='km'>628 MIL. KM</p>
          </article>
          <article className='container_travel'>
            <h3 className='travel'>Est. travel time</h3>
            <p className='days'>3 YEARS</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default DestinationEuropa;
