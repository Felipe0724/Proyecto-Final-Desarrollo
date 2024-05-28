import React from "react";
import AltoCilidraje from '../productos/AltoCilindraje';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const FiltroAltoCilindraje = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <AltoCilidraje/>
        </div>
    );
}

export default FiltroAltoCilindraje;