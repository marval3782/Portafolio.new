import React from 'react';
import './Formulario.css';
import { BsFillEnvelopeFill, BsMessenger,BsTelegram,BsWhatsapp } from "react-icons/bs";

const Formulario = () => {
    return(
        <>
    <section id="formu lario" className="formulario">
        
        <h1 className="tituloContacto">Contactos</h1>
      <div className="contenedorFormularios">
            <div className="contactos">
              <div className="plata">
                <h2 className="izquierda">marval37822@gmail.com</h2>  <BsFillEnvelopeFill className='icono'/>  
              </div>
        
              <div className="plata">
                <h2 className="izquierda">Marcos Paredes</h2>  <BsMessenger className='icono'/>
                  
            </div>

            <div className="plata">
                <h2 className="izquierda">+54 9 11 2611-6381</h2>  <BsTelegram className='icono'/> 
            </div>
    
            <div className="plata">
                 <h2 className="izquierda">+54 9 11 2611-6381</h2>   <BsWhatsapp className='icono'/>
            </div>
             <button className="btnServicios">Contratar Servicios</button>
            </div>

        <hr className='separa'/> 

            <form className="losFormularios" action="https://formsubmit.co/f27bf88bd119fc85c22aa85a4be7032e " method="POST">
                   <p className="parrafoFormulario">Hable conmigo a través del formulario, me pondre en contacto lo mas rapido posible</p>
                <div className="inputUno">
                   <input type="text" placeholder="Nombres" name="Nombres" className="inputNombres"/>
                   <input type="text"placeholder="Apellidos" name="Apellidos" className="inputApellido"/>
                </div>
                <div className="inputDos">
                   <input type="text" placeholder="Email" name="Gmail" className="inputEmail"/>
                   <input type="text" placeholder="Asunto" name="Asunto" className="inputAsunto"/>
                </div>
                   <input type="text" placeholder="Mensaje" name="Mensaje" className="inputMensaje"/>
                   <input type="submit" className="btnEnviar" value="Enviar"></input>
    
                   <input  type="hidden" name="_next" value="portafolio-new-git-master-marval3782.vercel.app"/>
                   <input type="hidden" name="_captcha" value="false"/>
            </form>
      </div>


    </section></>
    )
 }

export default Formulario;