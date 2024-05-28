import React from "react";
import UsoDiario from '../productos/UsoDiario';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const filtroUsoDiario = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <UsoDiario/>
        </div>
    );
}

export default filtroUsoDiario;