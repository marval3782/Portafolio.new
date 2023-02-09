import React from 'react';
import './Formulario.css'

const Formulario = () => {
    return(
        <>
    <section id="formulario" class="formulario">
        
        <h1 class="tituloContacto">Contactos</h1>
      <div class="contenedorFormularios">
            <div class="contactos">
              <div class="plata">
                <i class="bi bi-envelope-fill icono"></i> <h2 class="izquierda">marval37822@gmail.com</h2>    
              </div>
        
              <div class="plata">
                <i class="bi bi-messenger icono"></i><h2 class="izquierda">Marcos Paredes</h2>  
                  
            </div>

            <div class="plata">
                <i class="bi bi-whatsapp icono"></i> <h2 class="izquierda">+54 9 11 2611-6381</h2>   
            </div>
    
            <div class="plata">
                <i class="bi bi-telegram icono"></i> <h2 class="izquierda">+54 9 11 2611-6381</h2>    
            </div>
             <button class="btnServicios">Contratar Servicios</button>
            </div>

        <hr/>

            <form class="losFormularios" action="https://formsubmit.co/f27bf88bd119fc85c22aa85a4be7032e " method="POST">
                   <p class="parrafoFormulario">Hable conmigo a través del formulario, me pondre en contacto lo mas rapido posible</p>
                <div class="inputUno">
                   <input type="text" placeholder="Nombres" name="Nombres" class="inputNombres"/>
                   <input type="text"placeholder="Apellidos" name="Apellidos" class="inputApellido"/>
                </div>
                <div class="inputDos">
                   <input type="text" placeholder="Email" name="Gmail" class="inputEmail"/>
                   <input type="text" placeholder="Asunto" name="Asunto" class="inputAsunto"/>
                </div>
                   <input type="text" placeholder="Mensaje" name="Mensaje" class="inputMensaje"/>
                   <input type="submit" class="btnEnviar" value="Enviar"></input>
    
                   <input  type="hidden" name="_next" value="http://localhost:3000/#portafolio"/>
                   <input type="hidden" name="_captcha" value="false"/>
            </form>
      </div>


    </section></>
    )
 }

export default Formulario;