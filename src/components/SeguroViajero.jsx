import React from 'react'

const SeguroViajero = () => {
  return (
    <section className='pt-20 pb-20 mb-20 bg-gray-100'>
          <div className='px-10 lg:px-20'>
          <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 mb-2">Cuidamos de ti</h2>
          <span className='text-2xl text-green-400 font-semibold mb-10'>Obeten uno de nuestros seguros y viaja sin preocupacion</span>
          <div className='lg:px-10'>
            <div className=' w-full md:w-1/3 rounded-xl bg-white pb-5'>
                <div className='w-ful bg-blue-600 text-center h-40 flex justify-center items-center mb-5'>
                    <p className=' text-white text-5xl'>Basico</p>
                </div>
                <div className=' text-center'> <span className=' text-center  text-4xl font-semibold'>$300 USD </span> </div>
                <ul className=' p-10'>
                    <li className='list-disc'>Asistencia médica</li>
                    <li className='list-disc'> Cancelación de viaje </li>
                    <li className='list-disc'> Cobertura de equipaje perdido o retrasado </li>
                    <li className='list-disc'>Servicios de concierge</li>
                </ul>
                <div className='p-2'>
                    <div className=' rounded-xl w-full bg-blue-600 text-center text-white text-2xl'>Comprar</div>
                </div>

            </div>
          </div>
          </div>
    </section>
  )
}

export default SeguroViajero