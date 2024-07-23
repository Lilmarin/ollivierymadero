import React, { useState } from "react";
import ElementBorders from "../ElementBorders";
import "../../Style.css";
import { useNav } from '../../../NavContext';

function Comercial() {
  const { sectionRefs } = useNav();
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredColumn(index);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  return (
    <div  ref={sectionRefs.section3}  className="Comercial-container">
      <div className="Residencial-Section">
        <h2>COMERCIAL</h2>
        <div className="four-column-section-3">
          <div
            className={`column one ${hoveredColumn === 0 ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredColumn === 0 && (
              <>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialSalondeEventos"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="SALON DE EVENTOS"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialSalondeEventos"
                    classcolor="white-btn"
                    texto="VER MÁS"
                  />
                </div>
              </>
            )}
          </div>
          <div
            className={`column two ${hoveredColumn === 1 ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredColumn === 1 && (
              <>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialPlazalasTrojes"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="PLAZA LAS TROJES"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialPlazalasTrojes"
                    classcolor="white-btn"
                    texto="VER MÁS"
                  />
                </div>
              </>
            )}
          </div>
          <div
            className={`column three ${hoveredColumn === 2 ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredColumn === 2 && (
              <>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialPlazaPaseoIndependencia"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="PLAZA PASEO INDEPENDENCIA"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialPlazaPaseoIndependencia"
                    classcolor="white-btn"
                    texto="VER MÁS"
                  />
                </div>
              </>
            )}
          </div>
          <div
            className={`column four ${hoveredColumn === 3 ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredColumn === 3 && (
              <>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialMahaRomana"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="MAHA ROMANA"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ComercialMahaRomana"
                    classcolor="white-btn"
                    texto="VER MÁS"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Comercial;
