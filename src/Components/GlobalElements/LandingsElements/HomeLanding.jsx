import React from "react";
import ElementBorders from "../ElementBorders";
import logotipo from "../../../img/Home/Logotipo_Ollivier.png";
import "../../Style.css";
import { NavLink } from "react-router-dom";

function HomeLanding(props) {
  return (
    <div className={`Homelanding-container ${props.class}`}>
      <ElementBorders classcolor="white-btn" texto={props.titulo} />
      <NavLink className="width-link" to="/">
        <img className="imagelogo" src={logotipo} alt="Ollivier Madero" />
      </NavLink>
    </div>
  );
}

export default HomeLanding;
