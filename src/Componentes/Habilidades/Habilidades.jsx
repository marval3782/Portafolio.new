import React from 'react';
import './Habilidades.css'


const Habilidades = () => {
    return(
        <section className="habilidades">
        
     <div className="quienSoy">
      <span className="des">Descubre</span>
      <h1 className="tituloSoy">Quien soy</h1>
      <p className="parrafoSoy">Hola. bienvenido a mi espacio!
        mi nombre es Marcos Paredes y soy desarrollador web independiente. Tengo un profundo sentido de pasión y dedicación por mi trabajo. lo que me permite entregar resultados excepcionales a mis clientes. con 5 meses de experiencia en el área de desarrollo. He adquirido las habilidades técnicas y creativas necesarias para crear sitios web de alta calidad y crecer y desarrollar mis habilidades, y espero trabajar en proyectos que me desafíen y me permitan demostrar mi valía como desarrollador web independiente.</p>
     </div>
     <div className="listaHabilidades">
      <span className="mis">Mis</span>
      <h1 className="tituloHabilidades">Habilididades</h1>


       <div className="skilss">

            <div className="detalles">
            <span>HTML</span>
            <span>90%</span> 
            </div>


            <div className="menu">
                <div id="htmlMenu"></div>
            </div>
        </div>

        <div className="skilss">
            <div className="detalles">
            <span >CSS</span>
            <span >80%</span> 
            </div>
            <div className="menu">
                <div id="cssMenu"></div>
            </div>
        </div>

        <div className="skilss">
            <div className="detalles">
            <span >Javascript</span>
            <span >60%</span> 
            </div>
            <div className="menu">
                <div id="jsMenu"></div>
            </div>
        </div>

        <div className="skilss">
            <div className="detalles">
            <span>React</span>
            <span>30%</span> 
            </div>
            <div className="menu">
                <div id="reactMenu"></div>
            </div>
        </div>

       </div>


       
    


      </section>
     
    )
}

export default Habilidades;