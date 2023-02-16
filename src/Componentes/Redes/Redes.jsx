import React from 'react';
import './Redes.css'
import {BsFacebook, BsInstagram, BsFillEnvelopeFill} from "react-icons/bs";

const Redes  = () => {
    return(
        <>
        <section id="redes" class="redes">
            <h3 class="tituloRedes">Contactame!</h3>
            <p class="sub">Medios sociales</p>

            <div class="cards">
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Facebook</h5>
                        <h6 class="card-subtitle">Marcos Paredes</h6>
                    </div>
                    <div>
                    <BsFacebook className='facebook icon'/>
                    </div>
                </div>
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Gmail</h5>
                        <h6 class="card-subtitle">marval37822@gmail.com</h6>
                    </div>
                    <BsFillEnvelopeFill className='msj icon'/>
                </div>
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Instagram</h5>
                        <h6 class="card-subtitle">@Marcos__0k</h6>
                    </div>
                    <BsInstagram  className='instagram icon'/>
                </div>

            </div>
            <div class="cajaBoton"><a href="#formulario" class="aContactame">Contactame</a></div>
        </section>
        </>
    )
}

export default Redes;