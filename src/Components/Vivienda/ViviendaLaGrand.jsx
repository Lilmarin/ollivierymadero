import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/LaGrand/LaGrand1.jpg";
import imagen2 from "../../img/LaGrand/LaGrand2.jpg";
import imagen3 from "../../img/LaGrand/LaGrand3.jpg";
import imagen4 from "../../img/LaGrand/LaGrand4.jpg";
import imagen5 from "../../img/LaGrand/LaGrand5.jpg";
import imagen6 from "../../img/LaGrand/LaGrand6.jpg";
import imagen7 from "../../img/LaGrand/LaGrand7.jpg";
import imagen8 from "../../img/LaGrand/LaGrand1_1.jpg";
import imagen9 from "../../img/LaGrand/LaGrand2_2.jpg";
import imagen10 from "../../img/LaGrand/LaGrand3_3.jpg";
import imagen11 from "../../img/LaGrand/LaGrand4_4.jpg";
import imagen12 from "../../img/LaGrand/LaGrand5_5.jpg";
import imagen13 from "../../img/LaGrand/LaGrand6_6.jpg";
import imagen14 from "../../img/LaGrand/LaGrand7_7.jpg";

function ViviendaLaGrand() {
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
        background="LaGrand"
        titulo0="La Grand"
        images={images}
        images2={images2}
        titledescription="La grand"
        subtitledescription="Colaboramos en este proyecto con el diseño de interiorismo desarrollando áreas de departamentos acogedores y modernos reflejando el estilo del complejo. En las amenidades buscamos aprovechar cada espacio lo mejor posible para obtener áreas de uso común desarrolladas a la altura del recinto. "
      />
    </>
  );
}

export default ViviendaLaGrand;
