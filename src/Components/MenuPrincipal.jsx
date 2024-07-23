import React from "react";
import { Button, Navbar } from "flowbite-react";
import imagenlogo from "../img/OM_Logotipos.png";
import { NavLink } from "react-router-dom";
import whatsapp from "../img/Home/whatsapp.png";
import { useNav } from "../NavContext";
import "./Style.css"; // Importar archivo CSS

function MenuPrincipal(props) {
  const { navigateTo } = useNav();

  return (
    <>
      <Navbar className="Menuprincipal navbar bg-black" fluid>
        <NavLink to="/">
          <img
            src={imagenlogo}
            className="logoprincipal mr-3 h-6 sm:h-9"
            alt="Ollivier & Madero"
          />
        </NavLink>
        <div className="flex md:order-2">
        Target="_blank"
          <a Target="_blank" href="https://wa.me/528711385025">
            {" "}
            <Button className="Button-whatsapp">
              <img src={whatsapp} alt="Whatsapp" />
            </Button>{" "}
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <a
            className="text-class-navbar"
            onClick={() => navigateTo("section1")}
          >
            <p>RESIDENCIAL</p>
          </a>
          <a
            className="text-class-navbar"
            onClick={() => navigateTo("section2")}
          >
            <p>VIVIENDA</p>
          </a>
          <a
            className="text-class-navbar"
            onClick={() => navigateTo("section3")}
          >
            <p>COMERCIAL</p>
          </a>
          <a
            className="text-class-navbar"
            onClick={() => navigateTo("section4")}
          >
            <p>USOS MIXTOS</p>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuPrincipal;
