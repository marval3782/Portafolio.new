import React from 'react';
import './Redes.css'
import {BsFacebook, BsInstagram, BsFillEnvelopeFill} from "react-icons/bs";

const Redes  = () => {
    const style = { color:"var(--naranja)", fontSize: "4rem", marginLeft:"90px", marginTop:'20px' }
    const stylomsj = {marginLeft:'60px',fontSize: "4rem", marginTop:'20px'}
    return(
        <><section id="redes" class="redes">
            <h3 class="tituloRedes">Contactame!</h3>
            <p class="sub">Medios sociales</p>

            <div class="cards">
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Facebook</h5>
                        <h6 class="card-subtitle">Marcos Paredes</h6>
                    </div>
                    <div>
                    <BsFacebook style={style}/>
                    </div>
                </div>
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Gmail</h5>
                        <h6 class="card-subtitle">marval37822@gmail.com</h6>
                    </div>
                    <BsFillEnvelopeFill style={stylomsj}/>
                </div>
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Instagram</h5>
                        <h6 class="card-subtitle">@Marcos__0k</h6>
                    </div>
                    <BsInstagram  style={style}/>
                </div>

            </div>

        </section><div class="cajaBoton"><a href="#formulario" class="aContactame">Contactame</a></div></>
    )
}

export default Redes;