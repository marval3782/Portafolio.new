import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './Componentes/Hero/Hero';
import Navbar from './Componentes/NavBar/Navbar';
import Habilidades from './Componentes/Habilidades/Habilidades';
import Portafolio from './Componentes/Portafolio/Portafolio';
import Sitios from './Componentes/Sitios/Sitios';
import Redes from './Componentes/Redes/Redes';
import Formulario from './Componentes/Formulario/Formulario';
import Footer from './Componentes/Footer/Footer';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <>
  <Navbar/>
  {/* <App/> */}
  <Hero/>
  <Habilidades/> 
  <Portafolio/>
  <Sitios/>
  <Redes/>
  <Formulario/>
  <Footer/>
  </>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

