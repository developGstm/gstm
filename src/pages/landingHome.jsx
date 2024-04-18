import React, { useState,useEffect } from 'react'
import fondo from '../assets/fondo.png'
import iata from '../assets/IITA.png'
import us from '../assets/ustravel.png'
import helicoptero from '../assets/helicoptero.png'
import deportes from '../assets/deportes.png'
import conciertos from '../assets/conciertos.png'
import barco from '../assets/barco.png'
import disney from '../assets/disney.png'
import universal from '../assets/universal.png'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Footer from '../components/footer'
import ParquesTematicos from '../components/parquesTematicos'
import Iconos from '../components/iconos';
import axios from 'axios'
import Menu from '../components/nav'

const cordenadas = [
  {lon:-88.35041848015022, lat: 20.019650322154078 },
  {lon:-103.83997413656888, lat: 20.416780187979665 },
  {lon:-96.74165799946856, lat: 17.079535594783813 },
  {lon:-99.14919654495668, lat: 19.39432286933631 },
  {lon:-99.071329702146, lat: 19.43092650300747 },
  {lon:-111.9580443234437, lat: 25.884397818312166 },
  {lon:-115.33872207643668, lat: 31.464038419794303 },
  {lon:-89.03511613003819, lat: 21.082542094907307 },
  {lon:-117.28297097097357, lat: 39.25578946896848 },
  {lon:-81.3243030963075, lat: 28.309701988542866 },
  {lon:-94.92571859994054, lat: 39.80432765403459 },
  {lon:-73.97151421177622, lat: 40.753219651308896 },
  {lon:-99.91142904155241, lat: 31.93152446965594 },
  {lon:-119.94092151807098, lat: 38.10837325843462 },
  {lon:-121.56524334847411, lat: 44.570878358915785 },
  {lon:-121.08431631906585, lat: 47.68192444333631 },
  {lat: 35.6895, lon: 139.69171},
  {lat:8.9936 , lon:-79.51973 },
  {lat:3.37606 , lon:-74.8015 },
  {lat:18.220833 , lon:-66.590149 },
  {lat:-1.831239 , lon: -78.183406},
  {lat:-9.189967 , lon: -75.015152},
  {lat:-38.416097 , lon:-63.616672},
  {lat: -14.235004, lon:-51.92528 },
  {lat: 9.748917, lon:-83.753428 },
  {lat:41.87194 , lon: 12.56738},
  {lat:40.463667 , lon: -3.74922},
  {lat:50.85045 , lon: 4.34878},
  {lat: 51.51279, lon:-0.09184 },
  {lat:48.85341 , lon: 2.3488},
  {lat:-0.789275 , lon:113.921327},
  {lat: 15.870032, lon:100.992541 },
  {lat: 38.963745, lon: 35.243322},
  {lat:4.210484 , lon:101.975766 },
  {lat:35.86166 , lon: 104.195397},
  {lat: -30.559482, lon: 22.937506},
  {lat:-25.274398 , lon: 133.775136},
  {lat: 12.879721, lon:121.774017 },
  {lat:49.24966 , lon:-123.11934 },
  {lat:45.41117 , lon:-75.69812 },
  {lat: 50.11817, lon:-122.95396 },
  {lat:46.81228 , lon: -71.21454},
  {lat:61.92411 , lon: 25.748151},
  {lat:39.074208 , lon:21.824312 },
  {lat:38.3004 , lon:-76.50745},
  {lat: 40.71427, lon: -74.00597},
  {lat:37.77493 , lon:-122.41942 },
  {lat: 34.05223, lon: -118.24368},
  {lat:29.76328	 , lon: 	-95.36327},
  {lat:	 41.64366, lon:-83.48688 },
  {lat:	33.66316 , lon:-95.46245 },
  {lat:	 36.17497, lon:-115.13722 },
  {lat:	 21.17429, lon:-86.84656 },
  {lat:26.01217	 , lon: -111.34888},
  {lat:	16.84942 , lon: -99.90891},
  {lat:	17.06542 , lon:-96.72365 },
  {lat:	19.34472 , lon: -96.36167}


]


function LandingHome(props) {

  const [blogs,setBlog] = useState();

  useEffect(() => {
    axios.get('https://cms-l4tiq.ondigitalocean.app/api/blogs?populate=*')    
    .then(response => {
      console.log(response.data)
      setBlog(response.data.data)
    })
  }, []);

  return (
    <div>
      <Menu/>
      <section>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="lg:block font-extrabold"> Global Supply Travel Market</strong>
              <span className='text-base block text-[#3abb70]'>Tu mejor socio en viajes internacionales</span>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
             Somos un Tour Operador receptivo enfocado en el mercado mexicano, latinoamericano y español, con más de 2,500 agencias afiliadas y más de 9,000 productos de contratación directa, garantizando el precio más bajo en el mercado. Más de 25 años de experiencia en la industria nos respaldan, con un servicio al cliente experto que te llevará de la mano en tus ventas y en tu idioma.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 animate-fade-out-down supports-no-scroll-driven-animations:animate-none [animation-range:100px_500px] [animation-timeline:scroll()]'>
            <img className="w-auto" src={fondo} alt="" />
          </div>
        </div>
      </section>
      <section className='px-6 lg:px-20'>
        
        <h3 className='mx-auto max-w-7xl  lg:px-8 text-3xl font-extrabold relative'>
              <span className='text-base block text-[#3abb70]'>Descubriendo nuestra singularidad</span>
              Por qué somos diferentes
        </h3>
        <Iconos/>
      </section>
      <section className='py-10'>
      <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Nosotros</h1>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4">
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-rectangles-mixed"></i>Mision</h3>
            <span className='text-gray-500'>Ser un aliado para las agencias afiliadas que buscan crear experiencias únicas de viaje, dentro y fuera de su país, con la tranquilidad del mejor servicio antes, durante y después del viaje.</span>
          </div>
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-eye"></i> Vision</h3>
            <span className='text-gray-500'>
            Ser el Tour Operador número uno a nivel mundial, marcando una diferencia en la industria con productos y servicios de calidad para nuestros clientes, creando no solo una experiencia de viaje sino LA EXPERIENCIA DE VIAJE desde el primer contacto.
            </span>
          </div>
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-file-lines"></i>Valores </h3>
            <span className='text-gray-500'>
              Responsabilidad social apoyando a la economía local y creando conciencia ambiental en el viajero.
            <br/>Innovación: Nuestra tecnología hará que la experiencia de reserva sea única para ti y tu cliente, con una comunicación clara y transparente desde el principio.
            </span>
          </div>
        </div>
      </section>
      <section className='py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Nuestras afiliaciones</h1>
        <div className='mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4'>
        <div className='flex items-center justify-center'><img className='w-52' src={ iata } alt="" /></div>
        <div className='flex items-center justify-center'><img className='w-52' src={ us } alt="" /></div>
        </div>
      </section>
      <section className='relative mb-20'>
        <div className="absolute w-full h-full z-10">
          <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col justify-center h-full gap-5">
            <div className='lg:w-1/2'><h1 className='text-4xl md:text-5xl font-extrabold relative'>Experiencias en cualquier lugar del <span className='text-[#3abb70]'>mundo</span></h1></div>
            <div className="grid grid-cols-1 gap-10 lg:gap-2 lg:grid-cols-3 w-full lg:w-1/2 text-black">
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-extrabold'>20+</h1>
                <span className='text-sm font-medium'>Años de Experiencia</span>
              </div>
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-extrabold'>10M+</h1>
                <span className='text-sm font-medium'>Viajeros Felices</span>
              </div>
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-extrabold'>100+</h1>
                <span className='text-sm font-medium'>Destinos Unicos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-h-screen items-end">
          <div className='section-map w-full lg:w-1/2 relative'>
            <ComposableMap>
              <Geographies geography="/features.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              {cordenadas.map(item=> {
                return (
                  <Marker coordinates={[item.lon, item.lat]}>
                    <circle r={2} fill="#ffd603" />
                  </Marker>
                )
              })}
            </ComposableMap>
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#fff] from-10%"></div>
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>La vida son de experiencias</span>
              Lo importante para nosotros son las 
              <strong className="lg:block font-extrabold">experiencias de viaje </strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
              Sabemos que siempre buscas diferentes experiencias de viaje únicas, tenemos una amplia selección de experiencias que solo con nosotros podrás encontrar en diferentes lugares del mundo.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={helicoptero} alt="" />
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="flex-col-reverse mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={deportes} alt="" />
          </div>
          <div className='w-100  lg:w-1/2 flex flex-col justify-center '>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Una forma diferente de disfrutar el deporte</span>
              Los eventos de Deportes  
              <strong className="lg:block font-extrabold">Mas importantes del mundo </strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            El turismo deportivo se ha vuelto una rama muy importante dentro de la industria, con una derrama económica considerable. Tenemos todos los deportes que tu cliente está buscando, desde el ticket individual, experiencias en grupo o simplemente porque eres fanático de algún equipo. Busca dentro de nuestros paquetes o compra a la carta. Recuerda que todos los asientos están sujetos a disponibilidad y ningún asiento está reservado hasta que la compra no esté al 100% concretada
            </p>
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>La musica se vive</span>
              Disfruta de tu 
              <strong className="lg:block font-extrabold">cantante favorito</strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Ese artista que siempre has querido ver en vivo está a punto de presentarse en algún destino que siempre has querido visitar. No esperes más y adquiere entradas para ti o tus clientes de forma individual o en paquete, donde puedan experimentarlo todo en un solo lugar.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={conciertos} alt="" />
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="flex-col-reverse mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={barco} alt="" />
          </div>
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Conoce el mundo en el mar</span>
              Esas vacaciones en 
              <strong className="lg:block font-extrabold">altamar que siempre  soñaste</strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Contamos con una amplia selección de navieras con los itinerarios más exclusivos y populares del mercado. Si quieres personalizar alguno de estos, contacta a nuestros expertos, ellos te ayudarán a seleccionar el mejor crucero para tus clientes.
            </p>
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>El magico mundo de</span>
              Disney a tu alcance
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Siempre has querido ser experto en Disney, pero no te habías animado. Es hora de que te unas al mundo maravilloso y mágico, y experimentes este increíble producto. Nosotros te llevaremos de la mano para que te conviertas en un experto.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={disney} alt="" />
          </div>
        </div>
      </section>
      <section className=' px-8'>
        <div className="flex-col-reverse mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={universal} alt="" />
          </div>
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Universal Studio</span>
              El parque temático más épico del mundo.
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Este parque temático no puede faltar en tu portafolio de ventas, ya que es una visita obligada para la mayoría de los viajeros. Toda variedad de tickets individuales y paquetes los podrás encontrar con nosotros.
            </p>
          </div>
        </div>
      </section>
      <section className='py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>
          <span className='text-base block text-[#3abb70]'>Un diversidad de</span>
          Parques temáticos
        </h1>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <ParquesTematicos/>
        </div>
      </section>
      <section id="destinos"  className='container mx-auto lg:py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Te enseñamos a viajar</h1>
        <div className='mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4'> 
        
        {(blogs && blogs.length > 0) && blogs.map(item => {
          return (
            <a href={ item.attributes.url }>
            <article className='pt-80 pb-8 px-8 rounded-2xl bg-red-50 overflow-hidden flex flex-col justify-end relative isolate'>
              <img className='w-full h-full object-cover absolute -z-10 inset-0'
              src={ item.attributes.img.data.attributes.url } alt="" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2e8b88]"></div>
              <div className="flex items-center justify-center gap-1 overflow-hiden flex-wrap text-sm text-white leading-7">
                <span>{item.attributes.fecha}</span>
                <div className='flex items-center gap-x-2.5'>
                  
                </div>
              </div>
              <h3 className='text-white font-semibold text-lg'>{item.attributes.titulo}</h3>
            </article>
            </a>
            )
        })}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default LandingHome
