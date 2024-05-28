import React from "react";
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import icono from '../imagenes/iconoPersona.jpg'
import { useSelector } from 'react-redux'
import '../HojasDeEstilo/MiCuenta.css'

const MiCuenta = () =>{
    const nombreUsuario = useSelector((store) => store.login)
    return (
        <div className="contenedorMiCuenta">
        <Encabezado/>
        <BarraNavegacion/>
        <img src={icono} alt="icono de persona" className="fotoPersona"/>
        <h1 className="info">Usuario: {nombreUsuario.nombreUsuario} </h1>
        <h1 className="info">Ciudad: Medellin</h1>
        </div>
    );
}

export default MiCuenta;