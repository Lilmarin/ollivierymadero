import React from "react";
import { NavLink } from "react-router-dom";
import "../Style.css"; // Importar archivo CSS

function ElementBorders(props) {
  return (
    <div className="Element-container">
      <NavLink to={props.enlace} className={props.classcolor}>
        <div className="grid-button">
          <div className="Left-button"></div>
          <h5 className="center">{props.texto}</h5>
          <div className="Right-button"></div>
        </div>
      </NavLink>
    </div>
  );
}

export default ElementBorders;
