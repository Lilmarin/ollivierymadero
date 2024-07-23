import React, { useState } from "react";
import ElementBorders from "../ElementBorders";
import "../../Style.css";
import { useNav } from '../../../NavContext';

function UsosMixtos() {
  const { sectionRefs } = useNav();
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredColumn(index);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };
  return (
    <div ref={sectionRefs.section4}  className="Usos-Mixtos Residencial-Section">
      <h2>USOS MIXTOS</h2>
      <div className="four-column-section-4">
        <div
          className={`column one ${hoveredColumn === 0 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 0 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosBodegasZonaIndustrial"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="BODEGAS ZONA INDUSTRIAL"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosBodegasZonaIndustrial"
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
                  enlace="/UsosMixtosCentrodeNegocios"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CENTRO DE NEGOCIOS"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosCentrodeNegocios"
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
                  enlace="/UsosMixtosClinica"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CLINICA"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosClinica"
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
                  enlace="/UsosMixtosCorporativo"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CORPORATIVO"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosCorporativo"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="four-column-section-4">
        <div
          className={`column five ${hoveredColumn === 4 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 4 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosNotaria"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="NOTARIA"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosNotaria"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
        <div
          className={`column six ${hoveredColumn === 5 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 5 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosOficinaPaseoMillex"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="OFICINAS PASEO MILLEX"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosOficinaPaseoMillex"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
        <div
          className={`column seven ${hoveredColumn === 6 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 6 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosOficinasSaltillo"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="OFICINAS SALTILLO"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosOficinasSaltillo"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
        <div
          className={`column eight ${hoveredColumn === 7 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 7 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosPlazaAlameda"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="PLAZA ALAMEDA"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/UsosMixtosPlazaAlameda"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsosMixtos;
