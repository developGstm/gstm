import React,{useState} from 'react'
import Input from './input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginUser } from '../redux/userSlice';

const FormRegister = ({ codigo }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataUser, setdataUser] = useState({
        username: '',
        email: '',
        password: '',
        nombre: '',
        telefono: '',
        compania: 'gstm',
        info_user: {
            agenciaData: [
            {
              nombreAgencia: "",
            }
          ],
        }
      });


    const handleInput = (name,value) => {
      setdataUser({...dataUser, [name]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        dataUser.username = dataUser.email;
        dataUser.info_user.agenciaData[0].nombreAgencia = dataUser.agencia;
        try {
          const respuesta = await axios.post('https://cms.gstmtravel.com/api/auth/local/register', dataUser);
          if (respuesta.data.jwt) { 
          dispatch(loginUser({isLoading:false,usuario:respuesta?.data?.user,activeLogin:true}))
            navigate('/home');
          }       
          // Manejar la respuesta del servidor, redirigir, etc.
        } catch (error) {
          // Manejar el error, mostrar un mensaje al usuario, etc.

        }
      };


  return (
    <div className={ `w-full  text-black` }>
    <div className='w-full p-5 relative max-h-80 overflow-auto'>
      <form onSubmit={ handleSubmit } className='flex flex-col gap-5'>
      <Input 
        nombre='nombre' 
        funcion={handleInput} 
        valor={dataUser?.nombre} 
        requerido={true} 
        placeHolder='Nombre' 
        type='text'
        />
        <Input 
        nombre='apellido' 
        funcion={handleInput} 
        valor={dataUser?.apellido} 
        requerido={true} 
        placeHolder='Apellido' 
        type='text'
        />
        <Input 
        nombre='agencia' 
        funcion={handleInput} 
        valor={dataUser?.agencia} 
        requerido={true} 
        placeHolder='Agencia' 
        type='text'
        />
        <Input 
        nombre='telefono' 
        funcion={handleInput} 
        valor={dataUser?.telefono} 
        requerido={true} 
        placeHolder='Telefono' 
        type='text'
        />
        <Input 
        nombre='email' 
        funcion={handleInput} 
        valor={dataUser?.email} 
        requerido={true} 
        placeHolder='Email' 
        type='email'
        />
        <Input 
        nombre='password' 
        funcion={handleInput} 
        valor={dataUser?.password} 
        requerido={true} 
        placeHolder='Password' 
        type='password'
        />
        { 
        codigo  && 
            <Input 
            nombre='codigo_descuento' 
            funcion={handleInput} 
            valor={ codigo ? codigo : dataUser?.info_user.descuentos[0].codigo} 
            requerido={true} 
            placeHolder='Codigo de descuento' 
            type='text'
            /> 
         }
        <button type="submit" className='bg-green-400 rounded p-3' >Registrarse</button>
      </form>
    </div>
  </div>
  )
}

export default FormRegister