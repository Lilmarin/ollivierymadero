import React from "react";
import imagen1 from "../../img/Tulum/Tulum1.jpg";
import imagen2 from "../../img/Tulum/Tulum2.jpg";
import imagen3 from "../../img/Tulum/Tulum3.jpg";
import imagen4 from "../../img/Tulum/Tulum4.jpg";
import imagen5 from "../../img/Tulum/Tulum5.jpg";
import imagen6 from "../../img/Tulum/Tulum6.jpg";
import imagen7 from "../../img/Tulum/Tulum7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1_1 from "../../img/Tulum/Tulum1_1.jpg";
import imagen2_2 from "../../img/Tulum/Tulum2_2.jpg";
import imagen3_3 from "../../img/Tulum/Tulum3_3.jpg";
import imagen4_4 from "../../img/Tulum/Tulum4_4.jpg";
import imagen5_5 from "../../img/Tulum/Tulum5_5.jpg";
import imagen6_6 from "../../img/Tulum/Tulum6_6.jpg";
import imagen7_7 from "../../img/Tulum/Tulum7_7.jpg";

function ViviendaTulum() {
  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
  ];
  const images2 = [
    imagen1_1,
    imagen2_2,
    imagen3_3,
    imagen4_4,
    imagen5_5,
    imagen6_6,
    imagen7_7,
  ];
  return (
    <>
      <GaleriaLayout1
        background="Tulum"
        titulo0="Tulum"
        images={images}
        images2={images2}
        titledescription="Tulum"
        subtitledescription="El diseño del complejo busca integrarse armoniosamente con el entorno natural de Tulum, utilizando materiales locales y técnicas de construcción sostenibles. La arquitectura moderna se mezcla con elementos rústicos y naturales, creando un ambiente relajado y elegante.
        Las fachadas de los edificios combinan el uso de concreto, madera y piedra. Las líneas modernas y limpias de la arquitectura se suavizan con detalles rústicos como paredes de piedra caliza y revestimientos de madera tropical. Los balcones y terrazas están diseñados para maximizar las vistas a la selva y al océano."
      />
    </>
  );
}

export default ViviendaTulum;
