import React from "react";
import Medianas from '../productos/Medianas';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const filtroMedianas = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <Medianas/>
        </div>
    );
}

export default filtroMedianas;