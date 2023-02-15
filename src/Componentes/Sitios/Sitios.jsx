import React from 'react';
import persona from '../img/persona.png'
import './Sitios.css'

const Sitios = () => { 

return( 
    <>
    
    <h2 className="tituloSitios">SITIOS WEB</h2>
    <div className="contenedor">
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
    </div>
   
    </>

    )
}

export default Sitios;