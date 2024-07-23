import React, { useState } from "react";
import ElementBorders from "../ElementBorders";
import "../../Style.css";
import { useNav } from '../../../NavContext';
function Vivienda() {
  const { sectionRefs } = useNav();
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredColumn(index);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };
  return (
    <div  ref={sectionRefs.section2} className="Vivienda-home-container">
      <div className="Residencial-Section">
        <h2>VIVIENDA</h2>
        <div className="four-column-section-2">
          <div
            className={`column one ${hoveredColumn === 0 ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredColumn === 0 && (
              <>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ViviendaLaGrand"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="LA GRAND"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ViviendaLaGrand"
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
                    enlace="/ViviendaSantolivoParras"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="Santolivo Parras"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ViviendaSantolivoParras"
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
                    enlace="/ViviendaTulum"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="TULUM"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ViviendaTulum"
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
                    enlace="/ViviendaFraccionamientoColinadeSantiago"
                    classcolor="white-btn"
                    className="title-margin"
                    texto="Fraccionamiento colina de santiago"
                  />{" "}
                </div>
                <div className="container-inner">
                  <ElementBorders
                    enlace="/ViviendaFraccionamientoColinadeSantiago"
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

export default Vivienda;
