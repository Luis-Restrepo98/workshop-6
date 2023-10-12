import { useState } from 'react';
import '../sass/vehicles.scss';
import launchVehicle from '../assets/img/Space-1.png';
import spaceport from '../assets/img/Space-2.png';
import spacecapsule from '../assets/img/Sapce-3.png';

export const Vehicles = () => {
  const [vehicle, setVehicle] = useState('LAUNCH');

  const handleVehicleLaunch = () => {
    setVehicle('LAUNCH');
  };

  const handleVehicleSpacePort = () => {
    setVehicle('SPACEPORT');
  };

  const handleVehicleSpaceCapsule = () => {
    setVehicle('SPACECAPSULE');
  };

  return (
    <div>
      <div className='vehiclesBody'>
        <div className='vehiclesHeader'>Header</div>
        <div className='vehiclesTitle'>
          <span className='vehiclesTitleText'>
            <span className='num'>03</span> SPACE LAUNCH 101
          </span>
        </div>

        <div className='vehiclesContanerInfo'>
          <div className='vehiclesContainerButtons'>
            <button
              className={`${
                vehicle === 'LAUNCH'
                  ? 'buttonVehiclesActiv'
                  : 'buttonVehiclesInactiv'
              }`}
              onClick={handleVehicleLaunch}
            >
              1
            </button>
            <button
              className={`${
                vehicle === 'SPACEPORT'
                  ? 'buttonVehiclesActiv'
                  : 'buttonVehiclesInactiv'
              }`}
              onClick={handleVehicleSpacePort}
            >
              2
            </button>
            <button
              className={`${
                vehicle === 'SPACECAPSULE'
                  ? 'buttonVehiclesActiv'
                  : 'buttonVehiclesInactiv'
              }`}
              onClick={handleVehicleSpaceCapsule}
            >
              3
            </button>
          </div>
          <div className='vehiclesDescription'>
            {vehicle === 'LAUNCH' ? (
              <>
                {' '}
                <div className='title'>The Terminology</div>
                <div className='titleLaunch'>LAUNCH VEHICLE</div>
                <div className='paragraph'>
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earths surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, its
                  quite an awe-inspiring sight on the launch pad!
                </div>{' '}
              </>
            ) : (
              <></>
            )}
            {vehicle === 'SPACEPORT' ? (
              <>
                {' '}
                <div className='title'>The Terminology</div>
                <div className='titleLaunch'>SPACEPORT</div>
                <div className='paragraph'>
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </div>{' '}
              </>
            ) : (
              <></>
            )}
            {vehicle === 'SPACECAPSULE' ? (
              <>
                {' '}
                <div className='title'>The Terminology</div>
                <div className='titleLaunch'>SPACE CAPSULE</div>
                <div className='paragraph'>
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earths atmosphere
                  without wings. Our capsule is where you will spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </div>{' '}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className='vehiclesImages'>
            {vehicle === 'LAUNCH' ? <img src={launchVehicle} alt='' /> : <></>}
            {vehicle === 'SPACEPORT' ? <img src={spaceport} /> : <></>}
            {vehicle === 'SPACECAPSULE' ? <img src={spacecapsule} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};
