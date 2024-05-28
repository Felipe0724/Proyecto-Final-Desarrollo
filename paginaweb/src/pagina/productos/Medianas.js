import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar1, decrementar1 } from '../../utilidades/contador1Slice';
import { incrementar2, decrementar2 } from '../../utilidades/contador2Slice';
import { incrementar3, decrementar3 } from '../../utilidades/contador3Slice';

const Medianas = () =>{
    const dispatch = useDispatch();
    const contador1 = useSelector((state) => state.contador1);
    const contador2 = useSelector((state) => state.contador2);
    const contador3 = useSelector((state) => state.contador3);

    return (
        
        <div class="targetas">
            <div class="targeta">
                <div class="xtz250">
                    <div class="imagen_xtz250"></div>
                    <div class="detalle">
                        <h2>Yamaha XTZ 250</h2>
                        <p>Alta, cómoda y potente. Lo que es una doble propósito.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar1())}>+</button>
                            <p className="precio">{contador1.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar1())}>-</button>
                            <h2 className="valor">$25500000</h2>
                        </div>
                    </div>
                 </div>
            </div>

            <div class="targeta">
                <div class="victoryblack">
                    <div class="imagen_victoryblack"></div>
                    <div class="detalle">
                        <h2>Victory Black</h2>
                        <p>Automática con potencia de 172 cc</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar3())}>+</button>
                            <p className="precio">{contador3.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar3())}>-</button>
                            <h2 className="valor">$12990000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="bomber250">
                    <div class="imagen_bomber"></div>
                    <div class="detalle">
                        <h2>Victory Bomber 250</h2>
                        <p>Estilo rústico pero agresivo, de las mejores que todavía guardan ese toque clásico</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar2())}>+</button>
                            <p className="precio">{contador2.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar2())}>-</button>
                            <h2 className="valor">$8999000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medianas;