import React from "react";
import Medianas from './productos/Medianas';
import AltoCilidraje from './productos/AltoCilindraje';
import UsoDiario from './productos/UsoDiario';
import BarraNavegacion from "./BarraNavegacion";
import Encabezado from "./Encabezado";
import '../HojasDeEstilo/Productos.css';
import {NavLink} from "react-router-dom";

const Productos = () => {
    return(
        <div className="contenedorProductos">
            <Encabezado/>
            <BarraNavegacion/>

            <nav>
                <ul className="contenedorLista">
                    <h3>Filtrar: </h3>
                    <li><NavLink className="FiltroUsoDiario" to='./productos/UsoDiario'>De uso Diario</NavLink></li>
                    <li><NavLink className="FiltroAltoCilindraje" to='/productos/Altocilindraje'> De Alto Cilidraje</NavLink></li>
                    <li><NavLink className="FiltroMedianas" to='/productos/Medianas'>Medianas</NavLink></li>
                </ul>
            </nav>

            <Medianas/>
            <AltoCilidraje/>
            <UsoDiario/>
        </div>
    );
}

export default Productos;