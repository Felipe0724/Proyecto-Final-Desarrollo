import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementar7, decrementar7 } from '../../utilidades/contador7Slice';
import { incrementar8, decrementar8 } from '../../utilidades/contador8Slice';
import { incrementar9, decrementar9 } from '../../utilidades/contador9Slice';

const UsoDiario = () =>{
    const dispatch = useDispatch();
    const contador7 = useSelector((state) => state.contador7);
    const contador8 = useSelector((state) => state.contador8);
    const contador9 = useSelector((state) => state.contador9);

    return (
        <div class="targetas">
            <div class="targeta">
                <div class="mrx125">
                    <div class="imagen_mrx125"></div>
                    <div class="detalle">
                        <h2>Victory MRX 125</h2>
                        <p>Doble propósito de muy bajo presupuesto, ideal para el día a día.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar7())}>+</button>
                            <p className="precio">{contador7.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar7())}>-</button>
                            <h2 className="valor">$7899000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="nitro125">
                    <div class="imagen_nitro125"></div>
                    <div class="detalle">
                        <h2>Victory Nitro 125</h2>
                        <p>Perfecta para movilizarte en la ciudad.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar8())}>+</button>
                            <p className="precio">{contador8.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar8())}>-</button>
                            <h2 className="valor">$6250000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="szrr">
                    <div class="imagen_szrr"></div>
                    <div class="detalle">
                        <h2>Yamaha SZ-RR</h2>
                        <p>De las mejores en la ciudad, hasta para trabajar.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar9())}>+</button>
                            <p className="precio">{contador9.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar9())}>-</button>
                            <h2 className="valor">$9500000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UsoDiario;