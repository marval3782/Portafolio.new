import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
    <header class="listaMenu">
            <h1 class="logo">  Marcos paredes</h1>
        <div>
            <a href="#quienSoy" class="about">Quien Soy?</a>
            <a href="#portafolio" class="about">Portafolio</a>
            <a href="#redes" class="about">Redes</a>
            <a href="#formulario" class="about">Contactame!</a>        
        </div>
    </header>
    )
}

export default Navbar;