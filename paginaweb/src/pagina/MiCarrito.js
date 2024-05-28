import React from "react";
import '../HojasDeEstilo/MiCarrito.css';
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import { useDispatch, useSelector } from 'react-redux';
import { reset1 } from '../utilidades/contador1Slice';
import { reset2 } from '../utilidades/contador2Slice';
import { reset3 } from '../utilidades/contador3Slice';
import { reset4 } from '../utilidades/contador4Slice';
import { reset5 } from '../utilidades/contador5Slice';
import { reset6 } from '../utilidades/contador6Slice';
import { reset7 } from '../utilidades/contador7Slice';
import { reset8 } from '../utilidades/contador8Slice';
import { reset9 } from '../utilidades/contador9Slice';

const MiCarrito = () =>{
    const dispatch = useDispatch();
    const contador1 = useSelector((state) => state.contador1);
    const contador2 = useSelector((state) => state.contador2);
    const contador3 = useSelector((state) => state.contador3);
    const contador4 = useSelector((state) => state.contador4);
    const contador5 = useSelector((state) => state.contador5);
    const contador6 = useSelector((state) => state.contador6);
    const contador7 = useSelector((state) => state.contador7);
    const contador8 = useSelector((state) => state.contador8);
    const contador9 = useSelector((state) => state.contador9);

    var mensaje = false;

    const pagar = () => {
        dispatch(reset1());
        dispatch(reset2());
        dispatch(reset3());
        dispatch(reset4());
        dispatch(reset5());
        dispatch(reset6());
        dispatch(reset7());
        dispatch(reset8());
        dispatch(reset9());
        mensaje = true;
    }

    const vaciar = () => {
        dispatch(reset1());
        dispatch(reset2());
        dispatch(reset3());
        dispatch(reset4());
        dispatch(reset5());
        dispatch(reset6());
        dispatch(reset7());
        dispatch(reset8());
        dispatch(reset9());
        mensaje = false;
    }

    const subtotal1 = contador1.value * 25500000;
    const subtotal2 = contador2.value * 16100000;
    const subtotal3 = contador3.value * 12990000;
    const subtotal4 = contador4.value * 136000000;
    const subtotal5 = contador5.value * 72000000;
    const subtotal6 = contador6.value * 64990000;
    const subtotal7 = contador7.value * 7899000;
    const subtotal8 = contador8.value * 6250000;
    const subtotal9 = contador9.value * 9500000;

    const total = subtotal1 + subtotal2 + subtotal3 + subtotal4 + subtotal5 + subtotal6 + subtotal7 + subtotal8 + subtotal9;

    return(
     <div>
        <Encabezado/>
        <BarraNavegacion/>
        <h1 className="titulo">Pasarela de Pago</h1>

        {total > 0 &&
        <div className="total">
            <h1 className="valorPagar">Total a pagar: ${total}</h1>
            <button className="btn_operacion" onClick={() => vaciar()}>Vaciar Tablero</button>
            <button className="btn_operacion" onClick={() => pagar()}>Pagar</button>
        </div>
        }

        {mensaje === false && total === 0 &&
            <h2 className="mensaje">El tablero esta vacio.</h2>
        }
        {mensaje === true && total === 0 &&
            <h2 className="mensaje">Gracias por su compra.</h2>
        }

        <div class="targetas">
            {contador1.value > 0 &&
            <div id="target" class="targeta">
                <div class="xtz250">
                    <div class="imagen_xtz250"></div>
                    <div class="detalle">
                        <h2>Yamaha XTZ 250</h2>
                        <p>Alta, cómoda y potente. Lo que es una doble propósito.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset1())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal1}</h2>
                        </div>
                    </div>
                 </div>
            </div>
            }
            
            {contador2.value > 0 &&
            <div id="target" class="targeta">
                    <div class="bomber250">
                    <div class="imagen_bomber"></div>
                    <div class="detalle">
                        <h2>Victory Bomber 250</h2>
                        <p>Estilo rústico pero agresivo, de las mejores que todavía guardan ese toque clásico</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset2())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal2}</h2>
                        </div>
                     </div>
                </div>
            </div>
            }
            
            {contador3.value > 0 &&
            <div id="target" class="targeta">
                <div class="victoryblack">
                    <div class="imagen_victoryblack"></div>
                    <div class="detalle">
                        <h2>Victory Black</h2>
                        <p>Automática con potencia de 172 cc</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset3())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal3}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador4.value > 0 &&
            <div id="target" class="targeta">
                <div class="bmw1250">
                    <div class="imagen_bmw1"></div>
                    <div class="detalle">
                        <h2>BMW R 1250GS</h2>
                        <p>Robusta y con potencia, ideal para viajes largos</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset4())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal4}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador5.value > 0 &&
            <div id="target" class="targeta">
                <div class="tracer9gt">
                    <div class="imagen_tracer1"></div>
                    <div class="detalle">
                        <h2>Tracer 900 GT</h2>
                        <p>Otra forma ideal para viajes con más bajo presupuesto</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset5())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal5}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador6.value > 0 &&
            <div id="target" class="targeta">
                <div class="r6">
                    <div class="imagen_yamahar6"></div>
                    <div class="detalle">
                        <h2>Motorrad Yamaha R6</h2>
                        <p>Agresiva, deporitiva y emocionante para todo conocedor</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset6())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal6}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador7.value > 0 &&
            <div id="target" class="targeta">
                <div class="mrx125">
                    <div class="imagen_mrx125"></div>
                    <div class="detalle">
                        <h2>Victory MRX 125</h2>
                        <p>Doble propósito de muy bajo presupuesto, ideal para el día a día.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset7())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal7}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador8.value > 0 &&
            <div id="target" class="targeta">
                <div class="nitro125">
                    <div class="imagen_nitro125"></div>
                    <div class="detalle">
                        <h2>Victory Nitro 125</h2>
                        <p>Perfecta para movilizarte en la ciudad.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset8())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal8}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador9.value > 0 &&
            <div id="target" class="targeta">
                <div class="szrr">
                    <div class="imagen_szrr"></div>
                    <div class="detalle">
                        <h2>Yamaha SZ-RR</h2>
                        <p>De las mejores en la ciudad, hasta para trabajar.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset9())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal9}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>
     </div>
    );
}

export default MiCarrito;