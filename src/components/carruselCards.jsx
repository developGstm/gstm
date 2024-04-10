import React from 'react'

const CarruselCards = ( { data,url } ) => {
    console.log(data)
  return (
    <div className='mt-8 grid grid-cols-1 gap-2 w-full h-full md:grid-cols-2 lg:grid-cols-4'>
       {(data && data.length > 0) && data.map(item => {
          return (
            <div className="group relative overflow-hidden rounded-xl h-80 bg-red-50">
              <img className='object-cover h-full w-full' src={item?.img} alt="" />
              <div className='bottom-0 left-0 absolute w-full h-2/3 bg-gradient-to-t from-[#010417] from-0%'></div>
              <div className='p-2 text-white flex flex-col justify-end bottom-0 left-0 absolute h-full w-full'>
                <h3 className='text-2xl font-bold'>{ item?.title }</h3>
                <div className='w-full flex justify-between text-sm'>
                    <span className='flex gap-1 items-center'>
                        <i className='fa-sharp fa-light fa-location-dot text-[#ffd603]'></i>{item?.country}
                    </span>
                    <span className='flex gap-1'><p className='font-bold'>{ item?.price }</p></span>
                </div>
              </div>
            </div>
            )
        })}
    </div>
  )
}

export default CarruselCards