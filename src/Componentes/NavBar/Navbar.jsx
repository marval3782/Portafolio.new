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
    <header className="listaMenu">
        <div className="container-fluid" id='navhead'>
            <h1 className="logo">  Marcos Paredes</h1>

            <BsList  onClick={()=>{abrirMenu()}} className='hamburguesa'/>
            </div>
        <div className="container-fluid"> 
        <div className="nav-links" id='nav-menu'>
            <a href="#quienSoy" className="about">Quien Soy?</a>
            <a href="#portafolio" className="about">Portafolio</a>
            <a href="#redes" className="about">Redes</a>
            <a href="#formulario" className="about">Contactame!</a>        
        </div>
        </div>
       
       
       
    </header>
    )
}

export default Navbar;