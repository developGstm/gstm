import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import Input from './input'

const ContainerPrice = ({trip}) => {
  const [cantidad, setCantidad] = useState({})
  const user = useSelector((state) => state.user)
  
  const handeWhatsApp = (e, index, tarifa) => {
    e.preventDefault()
    const text = `Hola soy ${user?.usuario?.nombre} quiero reservar mi paquete ${trip.titulo}%0A *Tarifa: ${tarifa.titulo}%0A *Precio: ${tarifa.precio}${trip.moneda}/${trip.unidad}%0A *Numero de Personas: ${cantidad[`cantidad${index}`]}`
    window.open(`https://wa.me/17024085453?text=${text.replace(/ /g, "%20")}`)
  }

  const handleInput = (name,value) => {
    setCantidad({...cantidad, [name]: value})
  }

  return (
    <div className='w-full'>
      <div className='containerPrice-card'>
        <div className='w-full flex flex-col gap-5'>
          {trip?.tarifas?.map((tarifa, index) => {
            return (
              <div className='flex items-center gap-2 p-1 border-b flex-col'>
                <div className='flex items-center gap-2 w-full flex-col md:flex-row'>
                  {tarifa?.imagen?.url && <div className='w-full text-center md:w-1/6 flex gap-1 items-center justify-between'>
                    <img src={tarifa?.imagen?.url} className='max-w-full object-cover' alt="" />
                  </div>}
                  <div className='w-full md:w-full flex flex-col'>
                    <p className='font-bold'>{tarifa.titulo}</p>
                    <span className='text-sm w-full md:w-2/3'>{tarifa.descripcion}</span>
                  </div>
                  <div className='w-full md:w-1/6 flex flex-col'>
                    <span className='font-bold text-xl'>${new Intl.NumberFormat('en-IN').format(tarifa.precio)}</span> <span className='text-sm'>{trip?.moneda}/{trip?.unidad}</span>
                  </div>
                </div>
                <form onSubmit={(e) => handeWhatsApp(e, index, tarifa)} className='w-full flex gap-5 flex-col md:flex-row my-5'>
                  <div className='md:w-1/2'>
                    <Input 
                    nombre={`cantidad${index}`}
                    funcion={handleInput} 
                    valor={cantidad[`cantidad${index}`]} 
                    requerido={true} 
                    placeHolder='Cantidad' 
                    type='number'
                    />
                  </div>
                  <button className='rounded p-3 w-full font-semibold border-2 border-[#c42ee8]'><i className="fa-brands fa-whatsapp"></i> Reservar Ahora</button>
                </form>
              </div>
            )
          })}
        </div>
      </div>
  </div>
  )
}

export default ContainerPrice