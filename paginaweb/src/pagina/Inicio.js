import React from "react";
import Encabezado from "./Encabezado";
import BarraNavegacion from "./BarraNavegacion";
import bannerPrehome from '../imagenes/bannerPrehome.jpg';
import '../HojasDeEstilo/Inicio.css';


const Inicio = (params) => {
   let {nombreUsuario} = params
    return(
        <div className="contenedorInicio">
            <Encabezado nombreUsuario={nombreUsuario}/>
            <BarraNavegacion/>
            <img className="bannerPrehome" src={bannerPrehome} alt="pagina de inicio"/>
        </div>
    );
}

export default Inicio;