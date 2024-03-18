import React from 'react'

const Capacitaciones = () => {
  return (
    <section className=' h-auto lg:px-20 bg-gray-100 py-20'>
      <div className='flex flex-col lg:flex-row mb-4'>
        <div className='w-full mb-2 text-center lg:text-left lg:mb-0 lg:w-1/2 '>
          <h3 className='font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800'>Capacitete con nosotros</h3>
          <span className='font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 '>Potenciamos tu éxito: capacitación continua y asesoría integral en turismo</span>
        </div>
        <div className='flex w-full lg:w-1/2 overflow-x-auto'>
          <ul className='flex items-center justify-between w-full'>
          <li className='cursor-pointer mx-1 border-b-2 border-yellow-400'> Destino </li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Producto</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Ventas</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Asesoria </li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Contable</li>
          <li className='cursor-pointer mx-1 hover:border-b-2 border-yellow-400'>Ver todas</li>
          </ul>
        </div>
      </div>
      <div className='flex gap-4'>
            <div className='border border-inherit w-3/6 flex rounded-lg overflow-hidden'>
                <div className="w-1/2">
                    <img src="https://www.viajesboletin.com/wp-content/uploads/2023/09/viajandofest.jpg" alt="" />
                </div>
                <div className="w-1/2 p-3 flex flex-col justify-evenly bg-white">
                  <h6 className='text-green-400 font-semibold text-center text-2xl'>Explorando Destinos: Curso de Capacitación en Turismo</h6>
                  <p className=' text-justify'>Descubre los secretos de los destinos turísticos más emocionantes del mundo y conviértete en un experto en ofrecer experiencias...</p>
                  <p>Categoria:<span className='  text-yellow-400'>Destinos</span></p>
                  <p>Nivel:<span className='  text-yellow-400'>Basico</span></p>
                  <p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                    </svg>
                    <span>Marz. 22, 2024</span>/
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
                    </svg>
                    <span>13:00</span>
                  </p>
                  <div className=' bg-yellow-400 p-3 rounded text-center cursor-pointer'>Ver más</div>
                </div>
            </div>
            <div className='border border-inherit w-3/6 flex rounded-lg overflow-hidden'>
                <div className="w-1/2">
                    <img src="https://eclibertad.com/wp-content/uploads/2020/03/2-Tecnicas-efectivas-en-Ventas-600x600.jpg" alt="" />
                </div>
                <div className="w-1/2 p-3 flex flex-col justify-evenly bg-white">
                  <h6 className='text-green-400 font-semibold text-center text-2xl'>Ventas Exitosas en Turismo: Paso a Paso hacia el Éxito</h6>
                  <p className=' text-justify'>Domina las técnicas y estrategias fundamentales para aumentar tus ventas en la industria turística...</p>
                  <p>Categoria:<span className='  text-yellow-400'>Ventas</span></p>
                  <p>Nivel:<span className='  text-yellow-400'>Intermedio</span></p>
                  <p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                    </svg>
                    <span>Abril. 03, 2024</span>/
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
                    </svg>
                    <span>14:00</span>
                  </p>
                  <div className=' bg-yellow-400 p-3 rounded text-center cursor-pointer'>Ver más</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Capacitaciones