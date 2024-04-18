import React,{ useState } from 'react';
import img from '../assets/login.jpg'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userSlice'
import FormRegister from './formRegister';
import { useNavigate } from 'react-router-dom'

const ModalLogin = ({ activeModal, closeModal }) => {
  const [formLogin, setFormLogin] = useState({})
  const [formSignUp, setSignUp] = useState({})
  const dispatch = useDispatch();
  const [typeForm, setTypeFaorm] = useState(true)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [isUserCorrect, setIsUserCorrect] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://cms.gstmtravel.com/api/auth/local', formLogin)
    .then(response => {
      if (response.data.jwt) { 
        dispatch(loginUser({isLoading:false,usuario:response?.data?.user,activeLogin:true}))
          navigate('/home');
        }     
    })
  }

  const closeModalHandle = () => {
    setTypeFaorm(true)
    setRegisterSuccess(false)
    closeModal(false);
  }

  if (activeModal) {
    if (typeForm) {
      return (
        <div className='ModalLogin-Wrapper z-50'>
          <div className="ModalLogin-Container">
            <div className="ModalLogin-close">
              <i className="fa-regular fa-xmark" onClick={() =>  closeModalHandle()}></i>
            </div>
            <div className='ModalLogin-Cover' style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img}")`}}>
              <span>Iniciemos Sesión</span>
            </div>
            <form className='ModalLogin-ContainerInputs' onSubmit={(e) => handleLogin(e)}>
              <div>
                <input type="email" placeholder='Email' required onChange={(e) => setFormLogin({...formLogin, identifier:e.target.value})}/>
              </div>
              <div>
                <input type="password" placeholder='Contraseña' required onChange={(e) => setFormLogin({...formLogin, password:e.target.value})}/>
              </div>
              <div>
                <button>
                  Iniciar sesion
                </button>
              </div>
              { isUserCorrect ? '' : <span className=' text-center text-red-600'> Usuario o contraseña inconrrectas </span> }
              <div className='ModalLogin-Registrate'>
                <span>¿Aun no tienes cuenta?</span> <span onClick={() => setTypeFaorm(false)}>Registrate</span>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className='ModalLogin-Wrapper z-50'>
          <div className="ModalLogin-Container">
            <div className="ModalLogin-close">
              <i className="fa-regular fa-xmark" onClick={() =>  closeModalHandle()}></i>
            </div>
            {
              registerSuccess ?<div className='ModalSignUp-Success'>
                <i className="fa-light fa-location-smile"></i> <span>Tu registro fue exitoso, ¡Bienvenido!</span>
              </div> : null
            }

            <div className='ModalLogin-Cover' style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img}")`}}>
              <span>Registrate</span>
            </div>
            <div className='w-full'>
              <FormRegister/>
            </div>
           
          </div>
        </div>
      )
    }
    
  } else {
    return null
  }
  
};

export default ModalLogin;