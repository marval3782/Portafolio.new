import React from 'react';
import paginaweb from '../img/paginaweb.png'
import calculadora from '../img/calculadora.png'
import moxa from '../img/moxa.png'
import degrade from '../img/degrade.png'
import './Sitios.css'

const Sitios = () => { 

return( 
    <>
    
    <h2 className="tituloSitios">SITIOS WEB</h2>
    <div className="contenedor">
        <img src={paginaweb} className="foto" alt="" />
        <img src={calculadora} className="foto" alt="" />
        <img src={moxa} className="foto" alt="" />
        <img src={degrade} className="foto" alt="" />
    </div>
   
    </>

    )
}

export default Sitios;