import React from 'react';
import legoland from '../assets/legoland-park.jpg';
import hershey from '../assets/hershey-park.jpg';
import oldTown from '../assets/old-town-park.jpg';
import zooSafari from '../assets/San_Diego_Zoo_Safari_Park.jpg';
import seaWorld from '../assets/sea-world-park.jpeg';
import sesame from '../assets/sesame-place-san-diego.jpg';
import bushch from '../assets/busch-garden-park.jpg';
import knotts from '../assets/knotts-berry-park.jpg';
import xcaret from '../assets/parque-xcaret-mexico.jpg';
import sixFlags from '../assets/six_flags_mexico_park.jpg';
import AquaNick from '../assets/aqua-nick.jpg'; 
import NickPark from '../assets/nickelodeon-park.jpg';

const ParquesTematicos = () => {
  return (
    <div>
    <section id="destinos"  className='container mx-auto lg:p-10'>
      <div className='overflow-hidden  gap-3 lg:gap-3 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-3 lg:[&>div:not(:first-child)]:mt-3'> 
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={legoland} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>Legoland Park</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={hershey} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>Hershey Park</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={oldTown} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Old Town</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={zooSafari} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>Sandiego ZOO</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={seaWorld} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>Sea World</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={sesame} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>Sesame Park</h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={AquaNick} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Aqua Nick </h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={ bushch} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>  Busch Gardens </h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={ knotts } alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Knotts berry farm </h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={xcaret } alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Parques Xcaret </h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={ sixFlags } alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Six Flags </h3>
              </div>
            </div>
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow ">
              <img className='w-full h-full' src={ NickPark } alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3> Nickelodeon Universe </h3>
              </div>
            </div>
            
      </div>
    </section>
    </div>
  )
}

export default ParquesTematicos