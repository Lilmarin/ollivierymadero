import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/CasaCampestre/CasaCampestre_1.jpg";
import imagen2 from "../../img/CasaCampestre/CasaCampestre_2.jpg";
import imagen3 from "../../img/CasaCampestre/CasaCampestre_3.png";
import imagen4 from "../../img/CasaCampestre/CasaCampestre_4.png";
import imagen5 from "../../img/CasaCampestre/CasaCampestre_5.png";
import imagen6 from "../../img/CasaCampestre/CasaCampestre_6.png";
import imagen7 from "../../img/CasaCampestre/CasaCampestre_7.png";
import imagen8 from "../../img/CasaCampestre/CasaCampestre_1_1.jpg";
import imagen9 from "../../img/CasaCampestre/CasaCampestre_2_2.jpg";
import imagen10 from "../../img/CasaCampestre/CasaCampestre_3_3.jpg";
import imagen11 from "../../img/CasaCampestre/CasaCampestre_4_4.jpg";
import imagen12 from "../../img/CasaCampestre/CasaCampestre_5_5.jpg";
import imagen13 from "../../img/CasaCampestre/CasaCampestre_6_6.jpg";
import imagen14 from "../../img/CasaCampestre/CasaCampestre_7_7.jpg";

function ResidencialCasaCampestre() {
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
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
    imagen13,
    imagen14,
  ];
  return (
    <>
      <GaleriaLayout1
        background="CasaCampestre"
        titulo0="Casa Campestre"
        images={images}
        images2={images2}
        titledescription="Casa Campestre"
        subtitledescription="Para el diseño de esta residencia se contó con el reto de aprovechar la espectacular vista con la que contaba el lote hacia el campo de golf, pero a su vez con la limitante de estar orientada al poniente, lo cual es un enorme inconveniente por el particular clima tan caluroso y seco con el que se cuenta en la región. 
        La solución consistió en dos elementos rectangulares encontrados, apoyados en grandes volados horizontales para proteger tan especial vista de los inconvenientes de la insolación propiciada por la orientación natural del lote."
      />
    </>
  );
}

export default ResidencialCasaCampestre;
