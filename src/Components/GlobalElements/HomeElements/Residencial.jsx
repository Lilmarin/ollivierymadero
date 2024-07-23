import React, { useState } from "react";
import ElementBorders from "../ElementBorders";
import "../../Style.css";
import { useNav } from '../../../NavContext';


function Residencial(props) {
  
  const { sectionRefs } = useNav();

  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredColumn(index);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };
  return (
    <div  ref={sectionRefs.section1} className="Residencial-Section">
      <h2>RESIDENCIAL</h2>
      <div className="four-column-section">
        <div
          className={`column one ${hoveredColumn === 0 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 0 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaCampestre"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA CAMPESTRE"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaCampestre"
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
                  enlace="/ResidencialCasaAlces"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA ALCES"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaAlces"
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
                  enlace="/ResidencialCasaCumbres"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA CUMBRES"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaCumbres"
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
                  enlace="/ResidencialCasalariojasaltillo"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA LA RIOJA SALTILLO"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasalariojasaltillo"
                  classcolor="white-btn"
                  texto="VER MÁS"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="four-column-section">
        <div
          className={`column five ${hoveredColumn === 4 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredColumn === 4 && (
            <>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaConejos"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA CONEJOS"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaConejos"
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
                  enlace="/ResidencialCasaCollier"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA COLLIER"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaCollier"
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
                  enlace="/residencialcasahalcones"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA HALCONES"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/residencialcasahalcones"
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
                  enlace="/ResidencialCasaLondres"
                  classcolor="white-btn"
                  className="title-margin"
                  texto="CASA Londres"
                />{" "}
              </div>
              <div className="container-inner">
                <ElementBorders
                  enlace="/ResidencialCasaLondres"
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

export default Residencial;
