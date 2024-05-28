import React from "react";
import {NavLink} from "react-router-dom";

const Volver = () =>{
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className="volver" to='/Productos'>Volver</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Volver;