import React from 'react';
import './Hero.css';
import traje from '../img/traje.png'



const Hero = () => {
      
    return(
        <section id="quienSoy" className="hero">
        
            <div className="presentacion">
            <p className="iam">Hola, yo soy</p>
            <h1 className="nombre">Marcos Valentin Paredes</h1>
            <p className="programador">Programador web full stack developer</p>
            </div>
            <div className="imagen">
            <img src={traje} className="persona" alt=""></img>
            
            </div>
            
            
            
            
       </section>
    )
}

export default Hero;