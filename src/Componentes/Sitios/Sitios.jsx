import React from 'react';
import persona from '../img/persona.png'
import calculadora from '../img/calculadora.png'
import moxa from '../img/moxa.png'
import degrade from '../img/degrade.png'
import './Sitios.css'

const Sitios = () => { 

return( 
    <>
    
    <h2 className="tituloSitios">SITIOS WEB</h2>
    <div className="contenedor">
        <img src={persona} class="foto" alt="" />
        <img src={calculadora} class="foto" alt="" />
        <img src={moxa} class="foto" alt="" />
        <img src={degrade} class="foto" alt="" />
    </div>
   
    </>

    )
}

export default Sitios;