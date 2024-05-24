import React from 'react'
import logo from '../assets/logo-2.png';
const Footer = () => {

  const handleWhatsApp = (e) => {
    if (e) {
      e.preventDefault()
    }
    const text = `Hola me gustaria hablar con un representante, ¿podrían ayudar?`
    window.open(`https://wa.me/17024085453?text=${text.replace(/ /g, "%20")}`)
  }

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className='cursor-pointer fixed w-[60px] bg-[#c42ee8] aspect-square rounded-full right-0 bottom-0 mr-3 mb-3 text-white text-3xl flex items-center justify-center z-20' onClick={() => handleWhatsApp()}>
          <i class="fa-brands fa-whatsapp"></i>
          <div className="absolute w-[200px] right-0 mr-[65px] bg-[#c42ee8] rounded-full text-base h-[60px] flex items-center justify-center button-support-liquid">
            <span>¿Necesitas ayuda?</span>
          </div>
        </div>
        <div className='footer-body'>
          <div className='footer-item'>
            <h1>Contactanos</h1>
            <div className='footer-ItemContacto footer-itemContactNumber gap-2'>
              <span>Soporte al cliente</span>
              <h1 className='flex items-center p-1 bg-gray-200 font-bold rounded-lg gap-2'><i className="fa-light fa-phone-volume"></i> <a href="tel:+1 (725) 228-6406">+1 (725) 228-6406</a></h1>
              <button className='flex items-center p-1 bg-[#c42ee8] text-white font-bold rounded-lg gap-2' onClick={() => handleWhatsApp()}><i className="fa-brands fa-whatsapp"></i> +1 (702) 408-5453</button>
            </div>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Dirección</span>
              <a href="http://maps.google.com/?q=871+Coronado+center+drive+Suite+200+las+vegas,+nv+89052">871 Coronado center drive Suite 200 las vegas, nv 89052</a>
            </div>
          </div>
          <div className='footer-item'>
            <h1>Escríbenos</h1>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Para mayor información</span>
              <a href="mailto:hola@destinytravel.group">hola@destinytravel.group</a>
            </div>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Redes</span>
              <div className='flex gap-2 '>
                <a href="https://www.facebook.com/DestinyB2B" target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/DestinyB2B/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <a href={`${window.location}assets/TerminosyConidicionesDestinyGroup.pdf`} className="border-b font-bold"  target="_blank">Terminos y Condiciones</a>
          </div>
        </div>
        <div className='flex justify-between w-full p-3'>
        <div className='flex gap-1'><a href="https://www.destinytravel.ai/" target='_blank'>©2023 by DESTINY B2B, All rights reserved</a></div>
        </div>
      </div>
    </section>
  )
}

export default Footer