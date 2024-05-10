import React,{useState} from 'react';
import logo from '../assets/logo-blanco.png';


const Nav = ( {Fontcolor} ) => {
  const [menu,setMenu] = useState(true);


  

  const handleMenu = () => {
      setMenu(!menu);
  }
  return (
    <nav className='Nav bg-red-50'>
        <div><img src={logo} alt='' className='w-56 md:w-80' /></div>
        <div className='Nav-icon' onClick={() => handleMenu()}><i className="fa-solid fa-bars"></i></div>
        <ul className={menu ? ' Nav-ul Nav-ulIshidden ' : 'Nav-ul' }>
           <a href="#"><li className='Nav-btnClose' onClick={() => handleMenu()}>x</li></a>
           <a href="#"><li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"}>Ho</li></a>
           <a href="#"><li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >Destinos</li></a>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >¿Quienes somos?</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >Productos</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-loginBlack Nav-fontBlack":"Nav-li Nav-login"} ><a href="https://agencias.trotatourism.com/login">Login</a></li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} ><a href="https://agencias.trotatourism.com/signup">Sign up</a> </li>
        </ul>
    </nav>
  )
}

export default Nav