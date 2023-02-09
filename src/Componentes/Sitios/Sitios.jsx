import React from 'react';
import persona from '../img/persona.png'
import './Sitios.css'

const Sitios = () => { 

return( 
    <><h2 class="sitios">SITIOS WEB</h2>
    <div class="contenedor">
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
        <img src={persona} class="foto" alt="" />
    </div></>

    )
}

export default Sitios;