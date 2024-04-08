import React, { Fragment, useState,useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import fondo from '../assets/fondo.png'
import logo from '../assets/gstm-imagotipo.png'
import iata from '../assets/IITA.png'
import us from '../assets/ustravel.png'
import ccra from '../assets/ccra.png'
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
import ModalLogin from '../components/modalLogin'
import axios from 'axios'

const products = [
  { name: 'Deportes', description: 'Los mejores eventos deportivos del mundo', href: '#', icon: ChartPieIcon },
  { name: 'Conciertos', description: 'Tus cantates favoritos', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Cruceros', description: 'Una nueva manera de explorar el mundo', href: '#', icon: FingerPrintIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


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
    axios.get('https://cms-l4tiq.ondigitalocean.app/api/blogs')
    .then(response => {
      setBlog(response.data.data)
      console.log(blogs)
    })
  }, []);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const [openModal, setOpenModal] = useState(false);

  function handleModal(isOpen) {
    if( isOpen ) {
      setOpenModal(true)
    }else{
      setOpenModal(false)
    }
    
  }

  return (
    <div>
      <ModalLogin activeModal={openModal} closeModal={handleModal} />
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="w-24" src={ logo } alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Nosotros
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Destinos
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Experiencias
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Disney
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Universal
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Parques tematicos
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Blog de viaje
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a onClick={() => handleModal(true)} href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log In / Sign Up <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="w-16"
                  src={ logo }
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    onClick={() => handleModal(true)}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
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
      <section className="py-10 section-map">
      <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Experiencias en cualquier lugar del mundo</h1>
        <div className="mx-auto lg:max-w-5xl px-6 lg:px-8">
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {cordenadas.map(item=> {
            const random = Math.floor((Math.random() * (4 - 2 + 1)) + 2)
            return (
              <Marker coordinates={[item.lon, item.lat]}>
                <circle r={2} fill="#3abb70" />
              </Marker>
            )
          })}
        </ComposableMap>
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
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" />
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

          <article className='pt-80 pb-8 px-8 rounded-2xl bg-red-50 overflow-hidden flex flex-col justify-end relative isolate'>
            <img className='w-full h-full object-cover absolute -z-10 inset-0'
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2e8b88]"></div>
            <div className="flex items-center justify-center gap-1 overflow-hiden flex-wrap text-sm text-white leading-7">
              <span>Mar 16, 2024</span>
              <div className='flex items-center gap-x-2.5'>
                
              </div>
            </div>
            <h3 className='text-white font-semibold text-lg'>Boost your conversion rate</h3>
          </article>
          <article className='pt-80 pb-8 px-8 rounded-2xl bg-red-50 overflow-hidden flex flex-col justify-end relative isolate'>
            <img className='w-full h-full object-cover absolute -z-10 inset-0'
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2e8b88]"></div>
            <div className="flex items-center justify-center gap-1 overflow-hiden flex-wrap text-sm text-white leading-7">
              <span>Mar 16, 2024</span>
              <div className='flex items-center gap-x-2.5'>
                
              </div>
            </div>
            <h3 className='text-white font-semibold text-lg'>Boost your conversion rate</h3>
          </article>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default LandingHome
