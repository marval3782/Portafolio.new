import React from 'react';
import './Habilidades.css'


const Habilidades = () => {
    return(
        <section class="habilidades">
        
     <div class="quienSoy">
      <span class="des">Descubre</span>
      <h1 class="tituloSoy">Quien soy</h1>
      <p class="parrafoSoy">Hola. bienvenido a mi espacio!
        mi nombre es Marcos Paredes y soy desarrollador web independiente. Tengo un profundo sentido de pasión y dedicación por mi trabajo. lo que me permite entregar resultados excepcionales a mis clientes. con 3 meses de experiencia en el área de desarrollo. He adquirido las habilidades técnicas y creativas necesarias para crear sitios web de alta calidad y crecer y desarrollar mis habilidades, y espero trabajar en proyectos que me desafíen y me permitan demostrar mi valía como desarrollador web independiente.</p>
     </div>
     <div class="listaHabilidades">
      <span class="mis">Mis</span>
      <h1 class="tituloHabilidades">Habilididades</h1>


       <div class="skilss">

            <div class="detalles">
            <span>HTML</span>
            <span>90%</span> 
            </div>


            <div class="menu">
                <div id="htmlMenu"></div>
            </div>
        </div>

        <div class="skilss">
            <div class="detalles">
            <span >CSS</span>
            <span >80%</span> 
            </div>
            <div class="menu">
                <div id="cssMenu"></div>
            </div>
        </div>

        <div class="skilss">
            <div class="detalles">
            <span >Javascript</span>
            <span >60%</span> 
            </div>
            <div class="menu">
                <div id="jsMenu"></div>
            </div>
        </div>

        <div class="skilss">
            <div class="detalles">
            <span>React</span>
            <span>30%</span> 
            </div>
            <div class="menu">
                <div id="reactMenu"></div>
            </div>
        </div>

       </div>


       
    


      </section>
     
    )
}

export default Habilidades;