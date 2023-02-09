import React from 'react';
import './Navbar.css'
import {BsList} from "react-icons/bs";

const Navbar = () => {


    const abrirMenu= () => {

        var x = document.getElementById("nav-menu")
        if (x.className === "nav-links") {
          x.className = "active";
        } else {
          x.className = "nav-links";
        }
      }





    
    return(
    <header class="listaMenu">
        <div class="container-fluid" id='navhead'>
            <h1 class="logo">  Marcos Paredes</h1>

            <BsList  onClick={()=>{abrirMenu()}} className='hamburguesa'/>
            </div>
        <div class="container-fluid"> 
        <div class="nav-links" id='nav-menu'>
            <a href="#quienSoy" class="about">Quien Soy?</a>
            <a href="#portafolio" class="about">Portafolio</a>
            <a href="#redes" class="about">Redes</a>
            <a href="#formulario" class="about">Contactame!</a>        
        </div>
        </div>
       
        
       
    </header>
    )
}

export default Navbar;