import React from "react";
import "./../../Style.css";
import circle from "../../../img/Home/Circle_Black_Us.png";
import Linevector from "../../../img/Home/Linevector.png";
import Button from "../Button";

function Us() {
  return (
    <div className="Us-Container">
      <div className="booth-containers top">
        <img className="circle-vector" src={circle} alt="VectorImage" />
        <div className="left-cont-circle">
          <h2>
            REDEFINIMOS <span>ELEGANCIA Y LUJO</span>
            <br />
            EN UN SOLO ESPACIO
          </h2>
          <div className="grid-container">
            <div className="grid-it">
              {" "}
              <h3>Mision</h3>
              <p>
              Diseñar espacios innovadores y funcionales, mejorando vidas y entornos con creatividad y compromiso.
              </p>
              <br/>
            </div>
            <div className="grid-it">
              {" "}
              {/* <h3>Historia</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed congue et hac
                vestibulum. Velit eget nulla egestas aliquet eget. Quisque nunc
                gravida etiam fusce. Sed cras sit enim commodo et morbi potenti
                tellus.
              </p> */}
            </div>
          </div>
          <div className="width-btn">
            {" "}
            <Button
              enlace="https://wa.me/528711385025"
              texto="CONTACTO"
              classcolor="black-btn"
            />
          </div>
        </div>
      </div>
      <div className="booth-containers bottom-td">
        <img src={Linevector} alt="Line Vector" />
      </div>
    </div>
  );
}

export default Us;
