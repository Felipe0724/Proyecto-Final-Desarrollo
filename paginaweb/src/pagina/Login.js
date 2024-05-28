
import React from 'react';
import LogoLicorera from '../imagenes/logoConce.png'
import '../HojasDeEstilo/Login.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { guardarUsuario } from '../utilidades/login/loginSlice';
import { useState } from 'react';

const Login = (params) =>{
    const [datos, setDatos] = useState({nombre: "", contraseña: ""})

    const navigate = useNavigate();
    const handleLogin = () => {navigate('/Inicio')};

    // leer Store
    const datosUsuario = useSelector((store) => store.login)
    console.log(datosUsuario)
    console.log(datos.nombre)

    // traer action del Store
    const accion = useDispatch()

    const setNombre = (evento) => {
        let valor = evento.target.value
        setDatos({...datos, nombre: valor})
    }

    const setContraseña = (evento) => {
        let valor = evento.target.value
        setDatos({...datos, contraseña: valor})
    }

    const guardar = (evento) => {    
        accion(guardarUsuario(datos.nombre,datos.contraseña))
        handleLogin();
    }
    

    // reseteo de los datos del login
    return(
        <div className="contenedorLogin">
            <div className='contenedorLogo'>
                <img src={LogoLicorera} className='LogoLicorera' alt='icono de licores'/>
            </div>
            <div className='contenedorForm'>
            <form>
                <label>
                    usuario<br/>
                    <input className='nombre' type='text' name='nombre' onChange={setNombre}></input>
                </label><br/>
                <label>
                    Contraseña<br/>
                    <input type='password' name='contraseña' onChange={setContraseña}/>
                </label><br/>
                <button className='botonInicio' onClick={guardar}>Inicio Sesion</button>
                <button className='botonCrear'>Crear Sesion</button>
            </form>
            </div>
        </div>
    )
}

export default Login;