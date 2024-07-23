import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/Casafayad/Casafayad1.jpg";
import imagen2 from "../../img/Casafayad/Casafayad2.jpg";
import imagen3 from "../../img/Casafayad/Casafayad3.jpg";
import imagen4 from "../../img/Casafayad/Casafayad4.jpg";
import imagen5 from "../../img/Casafayad/Casafayad5.jpg";
import imagen6 from "../../img/Casafayad/Casafayad6.jpg";
import imagen7 from "../../img/Casafayad/Casafayad7.jpg";
import imagen1_1 from "../../img/Casafayad/Casafayad1_1.jpg";
import imagen2_2 from "../../img/Casafayad/Casafayad2_2.jpg";
import imagen3_3 from "../../img/Casafayad/Casafayad3_3.jpg";
import imagen4_4 from "../../img/Casafayad/Casafayad4_4.jpg";
import imagen5_5 from "../../img/Casafayad/Casafayad5_5.jpg";
import imagen6_6 from "../../img/Casafayad/Casafayad6_6.jpg";
import imagen7_7 from "../../img/Casafayad/Casafayad7_7.jpg";


function ResidencialCasaFayad() {
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
        background="Casafayad"
        titulo0="Casa la Rioja Saltillo"
        images={images}
        images2={images2}
        titledescription="Casa la Rioja Saltillo"
        subtitledescription="A través de una visión clásica contemporánea se desarrollo este proyecto para atender las necesidades especificas de crear un espacio amable y claro. Por medio de la paleta de colores y los materiales en su forma mas natural, logramos conectar con el propósito de ser una residencia acogedra sin haber comprometido la modernidad y el lujo."
      />
    </>
  );
}

export default ResidencialCasaFayad;
