import React from 'react';
import './Hero.css';
import traje from '../img/traje.png'



const Hero = () => {
      
    return(
        <section id="quienSoy" class="hero">
        
            <div class="presentacion">
            <p class="iam">Hola, yo soy</p>
            <h1 class="nombre">Marcos Valentin Paredes</h1>
            <p class="programador">Programador web full stack developer</p>
            </div>
            <div class="imagen">
            <img src={traje} class="persona" alt=""></img>
            
            </div>
            
            
            
            
       </section>
    )
}

export default Hero;