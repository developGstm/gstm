import React from 'react'
import { useNavigate  } from "react-router-dom";

const Destinations = ({dataDestinos}) => {
  console.log(dataDestinos)
  const navigate = useNavigate();
  const handleDestino = (value) => {
    let url = new URL(window.location)
    url.searchParams.set('ciudad',value.locality)
    url.searchParams.set('pais',value.country)
    navigate(`/destino${url.search}`)
  }

  return (
    <section id="destinos"  className='container mx-auto lg:p-10'>
      <div className='flex flex-col lg:flex-row  px-10 mb-4'>
        <div className='w-full mb-2 text-center lg:text-left lg:mb-0 lg:w-1/2 '>
          <h3 className=' text-4xl lg:text-5xl font-bold'>Nuestros Destinos</h3>
          <span className='text-2xl text-green-400 font-semibold'>El destino que busques lo tenemos a tu alcance</span>
        </div>
        <div className='flex w-full lg:w-1/2 overflow-x-auto'>
          <ul className='flex items-center justify-between w-full'>
          <li className='cursor-pointer mx-1 border-b-2 border-yellow-400'> EEUU </li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>México</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Canadá</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Europa</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Asia</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>África</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Brasil</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Colombia</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Argentina</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Perú</li>
          </ul>
        </div>
      </div>
      <div className='overflow-hidden  gap-3 lg:gap-3 sm:columns-2 lg:columns-3 px-10 [&>div:not(:first-child)]:mt-3 lg:[&>div:not(:first-child)]:mt-3'> 
        {(dataDestinos && dataDestinos.length > 0) && dataDestinos.map(item => {
          return (
            <div className="w-full lg:w-50 relative h-200 rounded-lg bg-gray-200 overflow-hidden shadow " onClick={() => handleDestino(item)}>
              <img className='w-full h-full' src={item?.portada} alt="" />
              <div className=' top-0 absolute rounded-br-lg text-white w-40 bg-yellow-400 text-center'>
                <h3>{ item?.locality }</h3>
              </div>
            </div>
            )
        })}
      </div>
    </section>
  )
}

export default Destinations