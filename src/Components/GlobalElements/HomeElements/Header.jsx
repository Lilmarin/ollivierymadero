import React from "react";
import "../../Style.css";
import LogoHeader from "../../../img/Home/Logotipo_Header.png";
import Button from "../Button";

function Header() {
  return (
    <div className="Header-Main-Component">
      <img src={LogoHeader} alt="Ollivier&Madero" />
      <Button  enlace="https://wa.me/528711385025" texto="CONTACTO" classcolor="white-btn" />
    </div>
  );
}

export default Header;
