import React, { Fragment, useState } from 'react'
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
]


function LandingHome(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
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
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
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
              <span className='text-base block text-[#3abb70]'>Mas conexiónes mas clientes felices</span>
              Tu mejor socio
              <strong className="lg:block font-extrabold"> Global en viajes</strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
              Somos un Operador Mayorista Receptivo y Emisor en Estados Unidos, trabajamos con mas de 2500 agencias alrededor del mundo. Con mas de 25 anos de experiencia en la industria, contamos con mas de 8000 productos de contratacion directa garantizando el precio mas bajo todo el tiempo. Somos el unicos receptivo de habla hispana a nivel nacional, contamos con equipos especializdos que llevan de la mano a nuestros clientes en su proceso de venta.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 animate-fade-out-down supports-no-scroll-driven-animations:animate-none [animation-range:100px_500px] [animation-timeline:scroll()]'>
            <img className="w-auto" src={fondo} alt="" />
          </div>
        </div>
      </section>
      <section className='py-10'>
      <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Conoce mas sobre nosotros</h1>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4">
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-rectangles-mixed"></i>Mision</h3>
            <span className='text-gray-500'>Una vez más, ser un aliado para las agencias que buscan crear experiencias únicas de viaje fuera de su país, con la tranquilidad de que recibirán el mejor servicio antes, durante y después de su viaje, apoyando a la economía local y creando conciencia ambiental en el viajero.</span>
          </div>
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-eye"></i> Vision</h3>
            <span className='text-gray-500'>
              Ser el Tour Operador número uno a nivel nacional, haciendo una diferencia en la industria con productos y servicios de calidad para nuestros clientes, creando no solo una experiencia de viaje, sino LA EXPERIENCIA DE VIAJE desde el primer contacto.
            </span>
          </div>
          <div className='flex flex-col item-center gap-2'>
            <h3 className='text-2xl font-bold flex gap-2 items-center'><i className="fa-regular fa-file-lines"></i>Valores </h3>
            <span className='text-gray-500'>
            Responsabilidad social apoyando a la economía local y creando conciencia ambiental al viajero.
            <br/>Innovación: nuestra tecnología hará para ti y tu cliente la experiencia de viaje única, con una comunicación clara y transparente desde el principio.
            </span>
          </div>
        </div>
      </section>
      <section className='py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Nuestras certificaciones</h1>
        <div className='mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4'>
        <div className='flex items-center justify-center'><img className='w-52' src={ iata } alt="" /></div>
        <div className='flex items-center justify-center'><img className='w-52' src={ us } alt="" /></div>
        <div className='flex items-center justify-center'><img className='w-52' src={ ccra } alt="" /></div>
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
                <circle r={random} fill="#3abb70" />
              </Marker>
            )
          })}
        </ComposableMap>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>La vida son de experiencias</span>
              Para nosotros son 
              <strong className="lg:block font-extrabold">Importantes las Experiencias </strong>
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
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={deportes} alt="" />
          </div>
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Una forma diferente de disfrutar el deporte</span>
              Los eventos de Deportes  
              <strong className="lg:block font-extrabold">Mas importantes del mundo </strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            El turismo deportivo se ha vuelto una rama muy importante dentro de la industria con una derrama económica considerable. Vendemos todos los deportes que estás buscando, desde el ticket individual, experiencias en grupo o simplemente porque eres fanático de algún equipo. Busca dentro de nuestros paquetes o compra a la carta. Recuerda que todos los asientos son sujetos a disponibilidad y ningún asiento está reservado hasta que la compra no esté al 100% concretada.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>La musica se vive</span>
              Disfruta a tus
              <strong className="lg:block font-extrabold">Cantantes favortos</strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
              Tu artista favorito está a punto de presentarse en alguna de las ciudades que siempre quisiste visitar, no esperes más, compra solo tu boleto o un paquete donde puedas experimentar la ciudad y dedicarle una noche a tu artista favorito.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={conciertos} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={barco} alt="" />
          </div>
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Conoce el mundo desde el mar</span>
                Las vacaciónes 
              <strong className="lg:block font-extrabold">Que siempre soñaste</strong>
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Contamos con una gama de seleccionadas navieras, si no encuentras lo que estás buscando, contacta a nuestro servicio al cliente, ellos te ayudarán a seleccionar el crucero adecuado para ti.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>El maravilloso mundo de</span>
              Disney
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            Siempre has querido vender Disney pero no te habías animado, es hora de que te unas al mundo de la magia y experimentes este increíble producto, nosotros te llevamos de la mano para que te conviertas en un experto.
            </p>
          </div>
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={disney} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          <div className='w-100 flex item-center justify-center lg:w-1/2 '>
            <img className="w-auto" src={universal} alt="" />
          </div>
          <div className='w-100 lg:w-1/2 flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className='text-base block text-[#3abb70]'>Estudios</span>
              Universal 
            </h1>
            <p className="w-auto mt-4 text-1xl lg:max-w-lg">
            El parque temático que no puedes dejar de tener en tu lista de imperdibles, todos los tickets los podrás encontrar con nosotros, así como su selección de hoteles.
            </p>
          </div>
        </div>
      </section>
      <section className='py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Parques temáticos</h1>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 flex item-center justify-between flex-col lg:flex-row">
          Mapa con lista de parques temáticos en el mundo.
        </div>
      </section>
      <section id="destinos"  className='container mx-auto lg:py-10'>
        <h1 className='mx-auto max-w-7xl px-6 lg:px-8 text-3xl font-extrabold relative'>Te enseñamos a viajar</h1>
        <div className='mx-auto max-w-7xl p-6 lg:px-8 grid lg:grid-cols-3 gap-4'> 
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
    </div>
  )
}

export default LandingHome
