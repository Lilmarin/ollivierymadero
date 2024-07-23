import React from "react";
import imagen1 from "../../img/Colinadesantiago/Colinadesantiago1.jpg";
import imagen2 from "../../img/Colinadesantiago/Colinadesantiago2.jpg";
import imagen3 from "../../img/Colinadesantiago/Colinadesantiago3.jpg";
import imagen4 from "../../img/Colinadesantiago/Colinadesantiago4.jpg";
import imagen5 from "../../img/Colinadesantiago/Colinadesantiago5.jpg";
import imagen6 from "../../img/Colinadesantiago/Colinadesantiago6.jpg";
import imagen7 from "../../img/Colinadesantiago/Colinadesantiago7.jpg";
import imagen1_1 from "../../img/Colinadesantiago/Colinadesantiago1_1.jpg";
import imagen2_2 from "../../img/Colinadesantiago/Colinadesantiago2_2.jpg";
import imagen3_3 from "../../img/Colinadesantiago/Colinadesantiago3_3.jpg";
import imagen4_4 from "../../img/Colinadesantiago/Colinadesantiago4_4.jpg";
import imagen5_5 from "../../img/Colinadesantiago/Colinadesantiago5_5.jpg";
import imagen6_6 from "../../img/Colinadesantiago/Colinadesantiago6_6.jpg";
import imagen7_7 from "../../img/Colinadesantiago/Colinadesantiago7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";



function ViviendaFraccionamientoColinadeSantiago() {
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
        background="Colinadesantiago"
        titulo0="FRACCIONAMIENTO COLINA DE SANTIAGO"
        images={images}
        images2={images2}
        titledescription="Fraccionamiento Colina de Santiago"
        subtitledescription="El fraccionamiento está diseñado con un enfoque en la comunidad y la funcionalidad.
        Cada casa está diseñada para maximizar el espacio y la comodidad, con un enfoque en la funcionalidad y el estilo."
      />
    </>
  );
}

export default ViviendaFraccionamientoColinadeSantiago;
