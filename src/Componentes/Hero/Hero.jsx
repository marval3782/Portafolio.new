import React from 'react';
import './Hero.css'

const Hero = () => {
    return(
        <section id="quienSoy" class="hero">
        
            <div class="presentacion">
            <p class="iam">Hola, yo soy</p>
            <h1 class="nombre">Marcos Valentin Paredes</h1>
            <p class="programador">Programador web full stack developer</p>
            </div>
            <img src="./persona.png" class="persona" alt=""></img>
            

       </section>
    )
}

export default Hero;