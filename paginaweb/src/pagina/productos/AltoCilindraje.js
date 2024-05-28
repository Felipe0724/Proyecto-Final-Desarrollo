import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementar4, decrementar4 } from '../../utilidades/contador4Slice';
import { incrementar5, decrementar5 } from '../../utilidades/contador5Slice';
import { incrementar6, decrementar6 } from '../../utilidades/contador6Slice';

const AltoCilidraje = () =>{
    const dispatch = useDispatch();
    const contador4 = useSelector((state) => state.contador4);
    const contador5 = useSelector((state) => state.contador5);
    const contador6 = useSelector((state) => state.contador6);

    return (
        <div class="targetas">
            <div class="targeta">
                <div class="bmw1250">
                    <div class="imagen_bmw1"></div>
                    <div class="detalle">
                        <h2>BMW R 1250GS</h2>
                        <p>Robusta y con potencia, ideal para viajes largos</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar4())}>+</button>
                            <p className="precio">{contador4.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar4())}>-</button>
                            <h2 className="valor">$136000000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="tracer9gt">
                    <div class="imagen_tracer1"></div>
                    <div class="detalle">
                        <h2>Tracer 900 GT</h2>
                        <p>Otra forma ideal para viajes con más bajo presupuesto</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar5())}>+</button>
                            <p className="precio">{contador5.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar5())}>-</button>
                            <h2 className="valor">$72000000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="r6">
                    <div class="imagen_yamahar6"></div>
                    <div class="detalle">
                        <h2>Motorrad Yamaha R6</h2>
                        <p>Agresiva, deporitiva y emocionante para todo conocedor</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar6())}>+</button>
                            <p className="precio">{contador6.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar6())}>-</button>
                            <h2 className="valor">$64990000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AltoCilidraje;