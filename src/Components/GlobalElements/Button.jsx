import React from "react";

function Button(props) {
  return (
    <div className="GeneralBtnClass">
      <a Target="_blank" className={props.classcolor} href={props.enlace}>
        <div className="grid-button">
          <div className="Left-button"></div>
          <p className="center">{props.texto}</p>
          <div className="Right-button"></div>
        </div>
      </a>
    </div>
  );
}

export default Button;
