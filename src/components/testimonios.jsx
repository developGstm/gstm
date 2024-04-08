import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Testimonios = () => {
        
    const [testimonios, setTestimonios] = useState([])
    
    useEffect(() => {
        axios.get('https://cms-l4tiq.ondigitalocean.app/api/testimonios')
        .then(response => {
          setTestimonios(response.data.data)
        })
    }, [])

    const handleClickTestimonails = (type) => {
        const slider = document.querySelector('.Home-sliderCarouselTestimonials');
        const firsElement = document.querySelectorAll('.Home-sliderTestimonialsContainer')[0];
        const firstElementWidth = firsElement.clientWidth;
        slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
      }
  return (
    <section className='Home-section Home-sectionWork'>
        <div className="Home-wrapper Home-TopDeals">
        <div className='Home-TopDealsHeader'>
          <div className='Home-TopDealsTitle Home-TitleTestimonios'>
            <h1>Testimonios</h1>
            <span>Que dicen de nosotros</span>
          </div>
          <div className='Home-TopDealsButtons Home-TitleTestimoniosButton'>
            <div onClick={() => handleClickTestimonails('left')}>
              <i className="fa-sharp fa-light fa-chevron-left"></i>
            </div>
            <div onClick={() => handleClickTestimonails('right')}>
              <i className="fa-sharp fa-light fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className='Home-sliderDeals'>
          <div className="Home-sliderCarouselTestimonials">
            {(testimonios && testimonios.length > 0) && testimonios.map(item => {
              return (
                <div className='Home-sliderTestimonialsContainer'>
                <div className='Home-sliderTestimonailsWrapper' key={item.id}>
                <div>
                  <div className='Home-sliderTestimonailsIcon'>😊</div>
                </div>
                <div>
                  <span>
                    {item.attributes.testimonio}
                  </span>
                </div>
                <div>
                  <h1>{item.attributes.autor}</h1>
                </div>
              </div>
              </div>
              )
            })}
          </div>
        </div>
        </div>
      </section>
  )
}

export default Testimonios