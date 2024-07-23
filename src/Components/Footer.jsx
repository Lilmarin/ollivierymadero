import React from "react";
import LogoFooter from "../img/Home/Logotipo_Ollivier.png";
import "./Style.css";
import whatsapp from "../img/Home/whatsapp.png";
import Button from "./GlobalElements/Button";
import id from "./../img/Home/id.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="footer-inside">
        <div className="Top-Ft">
          <div className="logo">
            <NavLink to="/">
              <img
                src={LogoFooter}
                className="logoprincipal-footer "
                alt="Ollivier & Madero"
              />
            </NavLink>
          </div>
          <div className="contact">
            <div className="social-net">
              {/* // eslint-disable-next-line */}
              <a href="https://www.instagram.com/madero_arquitectura/"> FB</a>
              {/* // eslint-disable-next-line */}
              <a href="https://www.instagram.com/madero_arquitectura/"> IG</a>
              
            </div>
            {/* // eslint-disable-next-line */}
            <a className="mail" href="mailto:oficinaom@olliviermadero.com">
              {" "}
              oficinaom@olliviermadero.com
            </a>
            {/* // eslint-disable-next-line */}
            <div className="whatsapp">
              {" "}
              {/* // eslint-disable-next-line */}
              <a Target="_blank" href="https://wa.me/528711385025">
                (871) 1385 025 <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
          <div className="phrase">
            <h5>Hablemos de tus futuros proyectos con nosotros.</h5>
            <div className="butn">
              {/* // eslint-disable-next-line */}
              <Button
                enlace="https://wa.me/528711385025"
                texto="CONTACTO"
                classcolor="white-btn"
              />
            </div>
          </div>
        </div>
        <div className="Bot-Ft">
          <div className="madeby">
            <h5>
              ©2024 Creado por
              {/* // eslint-disable-next-line */}
              <a href="https://ingenieriadigital.mx"> Ingeniería digital. </a>
                Todos los derechos reservados.  
              {/* // eslint-disable-next-line */}
              <a href="/"> Aviso de privacidad </a>
            </h5>
          </div>
          <div className="madeby-ft">
            <h5>Página hecha por </h5>
            {/* // eslint-disable-next-line */}
            <a href="https://ingenieriadigital.mx">
              <img src={id} alt="Ingenieria Digital" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
