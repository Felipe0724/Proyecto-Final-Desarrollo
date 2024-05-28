import React from "react";
import Logo from '../imagenes/logoConce.png';
import Icono from '../imagenes/iconoPersona.jpg';
import '../HojasDeEstilo/Encabezado.css';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux'

const Encabezado = () => {
    const nombreUsuario = useSelector((store) => store.login)

    console.log(nombreUsuario)
    return(
        <div className="contenedorEncabezado">
        <NavLink to='/Inicio'>
            <img className='logo'src={Logo} alt="imagen del logo"/>
        </NavLink>
        <div className="contenedorIcono">
        <h2 className="h2">Hola {nombreUsuario.nombreUsuario}</h2>
        <NavLink to='/MiCuenta'>
            <img className='icono'src={Icono} alt="imagen del icono"/>
        </NavLink>
        </div>
        </div>
    );
}

export default Encabezado;