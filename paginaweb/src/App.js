import './App.css';
import Login from './pagina/Login.js';
//import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import MiCarrito from './pagina/MiCarrito';
import MiCuenta from './pagina/MiCuenta';
import Productos from './pagina/Productos';
import Medianas from './pagina/productos/Medianas.js';
import AltoCilindraje from './pagina/productos/AltoCilindraje.js';
import UsoDiario from './pagina/productos/UsoDiario.js';
import Inicio from './pagina/Inicio.js';
import FMedianas from "./pagina/filtro/FiltroMedianas.js";
import FAltoCilindraje from "./pagina/filtro/FiltroAltoCilindraje.js";
import FUsoDiario from "./pagina/filtro/FiltroUsoDiario.js";

function App() {
 

  return (
    <div className="App">

      <fCerveza />
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='*' element={<>not found</>}/>
        <Route path='/inicio' element={<Inicio />}/>
        <Route path='/micarrito' element={<MiCarrito/>}/>
        <Route path='/micuenta' element={<MiCuenta/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/altocilindraje' element={<Medianas/>}/>
        <Route path='/ron' element={<AltoCilindraje/>}/>
        <Route path='/whisky' element={<UsoDiario/>}/>
        <Route path='/productos/cerveza' element={<FMedianas/>}/>
        <Route path='/productos/ron' element={<FAltoCilindraje/>}/>
        <Route path='/productos/whisky' element={<FUsoDiario/>}/>
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;