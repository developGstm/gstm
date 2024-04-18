import React,{useEffect,useState} from 'react'
import HeaderSecundary from '../components/headerSecundary';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import key from '../scripts/apikey'
import Footer from '../components/footer';
import img from '../assets/lasvegas.jpg';
import Header from '../components/header'
import { useNavigate  } from "react-router-dom";
import modelServices from '../model/serviceModel'
import ContainerPrice from '../components/containerPrice'

const LandingTour = () => {
  const { url } = useParams();
  const [trip,setTrip] = useState();
  const navigate = useNavigate();
  const [ShowMorePoliticas, setShowMorePoliticas] = useState(false)
  
  useEffect(() => {
    axios.get(`https://cms.gstmtravel.com/api/filterServiceGlobalSearch/${url}`)
  .then(function (response) {
    // manejar respuesta exitosa
    const data = new modelServices(response?.data?.data[0]);
    setTrip(data);
    console.log(data)
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  }, [])  

  const renderizarConSaltosDeLinea = (texto) => {
    return texto?.split('\n')?.map((linea, index) => {
      return <React.Fragment key={index}>{linea}<br /></React.Fragment>;
    });
  };
  
 if (url) {
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl p-6 lg:px-8'>
        <Header/>
        <div className="mt-10">
          <div className="w-full flex flex-col gap-10 mt-2">
            <div className='Header-Secundary-buttons'>
              <button onClick={() => navigate('/home')}>
                <i className="fa-sharp fa-light fa-chevron-left"></i> Go Home
              </button>
              <div className='HeaderSecundary-map'>
                <li>Home</li>
                <li><i className="fa-sharp fa-light fa-chevron-right"></i></li>
                <li>{trip?.type?.type}</li>
                <li><i className="fa-sharp fa-light fa-chevron-right"></i></li>
                <li>{trip?.titulo}</li>
              </div>
              <div className='HeaderSecundary-share'>
                <button><i class="fa-light fa-arrow-up-from-square"></i></button>
              </div>
            </div>
            <div className='w-full relative'>
              <img src={trip?.portada} className='w-full h-96 object-cover rounded-lg' alt='portada-global'/>
              <div className='absolute w-full h-full flex flex-col justify-center items-center top-0 p-6 text-white z-10'>
                <h2 className='text-3xl font-bold'> {trip?.titulo} </h2>        
                <h3 className='HeaderSecundary-subtitle'> { trip?.locacion?.description } </h3>
              </div>
              <div className="absolute w-full h-full bg-black top-0 rounded-lg opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
      <section className=''>
        <div className='flex flex-col-reverse lg:flex-row mx-auto max-w-7xl p-6 lg:px-8 gap-2'>
          <div className='w-full lg:w-3/4 flex flex-col gap-10'>
            <div className='w-full '>
              <div className='landing-info'>
              {trip?.duracion.duracion && 
                <div className='landing-item'>
                  <div className='landing-itemIcon'><i className="fa-light fa-clock"></i></div>
                  <div className='landing-itemInfo'>
                    <h6>Duracion</h6>
                    <span>{trip?.duracion.duracion}</span>
                  </div>
                </div>}
                <div className='landing-item'>
                  <div className='landing-itemIcon'><i className="fa-sharp fa-light fa-earth-americas"></i></div>
                  <div className='landing-itemInfo'>
                    <h6>Tipo</h6>
                    <span>{trip?.type?.type}</span>
                  </div>
                </div>
              </div>
                  <div className='landing-seccion'>
                    <span className='landing-span'>Acerca del Servicio:</span>
                    <p>
                      {trip?.descripcion}
                    </p>
                  </div>
                  {
                    trip?.incluido?.length > 0 && <div className='w-full relative mt-10'>
                      <h3 className='mb-3'><strong>Que incluye:</strong></h3>
                      <div className='flex flex-col gap-4'>
                        {trip?.incluido.map(item => {
                          return (
                            <div className='flex md:items-center flex-col md:flex-row'>
                              <div className='flex gap-2 items-center md:w-1/2'>
                                <i className="fa-sharp fa-light fa-circle-check"></i>
                                <h3 className='font-bold'>{item.titulo}</h3>
                              </div>
                              <div className='md:w-1/2'>
                                {item.descripcion}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  }
                  {(trip?.no_incluido && trip?.no_incluido.length > 0) && <div className='landing-seccion'>
                    <span className='landing-span'>No incluido:</span>
                    <div className='landing-inclusiones'>
                      <ul className='landing-ul'>
                      {trip?.no_incluido.map ( item =>(
                          <li key={item.id} className='landing-li no-include'>
                            <div>
                              <i class="fa-solid fa-ban"></i>
                              <span>{item.titulo}</span>
                            </div>
                            <p>{item.descripcion}</p>
                          </li>
                          )
                        )       
                        }
                      </ul>
                    </div>
                  </div>}
            </div>
            <ContainerPrice trip={trip} />
            {trip?.politicas && <div className="mt-10 flex flex-col border-b">
              <div className="flex justify-between">
                <h3 className='mb-3'><strong>Terminos y Condiciones</strong></h3>
                <button onClick={() => setShowMorePoliticas(true)}><i className="fa-light fa-circle-arrow-down"></i></button>
              </div>
              { ShowMorePoliticas && <article className='block w-full'>{renderizarConSaltosDeLinea(trip?.politicas)}</article> }
            </div>}
          </div>
        </div>
      </section>
      <section className='landing-gallery'>
        {/*<div className="landing-galleryContainer">
          {(trip?.galeria?.data && trip?.galeria?.data.length > 0) && trip?.galeria?.data.map(imagen => {
            return (
              <div className='landing-img'><img src={`https://cms-l4tiq.ondigitalocean.app${imagen.attributes.url}`} alt="" /></div>
            )
          })}
        </div>*/}
      </section>
      <Footer/>
    </div>
  )
 } else {
  return (
    <div>Cargando...</div>
  )
 }


}

export default LandingTour