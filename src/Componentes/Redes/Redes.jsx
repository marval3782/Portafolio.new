import React from 'react';
import './Redes.css'
import {BsFacebook, BsInstagram, BsFillEnvelopeFill} from "react-icons/bs";

const Redes  = () => {
    return(
        <>
        <section id="redes" className="redes">
            <h3 className="tituloRedes">Contactame!</h3>
            <p className="sub">Medios sociales</p>

            <div className="cards">
                <div className="card-body">
                    <div>
                        <h5 className="card-title">Facebook</h5>
                        <h6 className="card-subtitle">Marcos Paredes</h6>
                    </div>
                    <div>
                    <BsFacebook className='facebook icon'/>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">Gmail</h5>
                        <h6 className="card-subtitle">marval37822@gmail.com</h6>
                    </div>
                    <BsFillEnvelopeFill className='msj icon'/>
                </div>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">Instagram</h5>
                        <h6 className="card-subtitle">@Marcos__0k</h6>
                    </div>
                    <BsInstagram  className='instagram icon'/>
                </div>

            </div>
            <div className="cajaBoton"><a href="#formulario" className="aContactame">Contactame</a></div>
        </section>
        </>
    )
}

export default Redes;