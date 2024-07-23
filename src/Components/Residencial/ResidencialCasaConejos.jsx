import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/CasaConejos/CasaConejos1.jpg";
import imagen2 from "../../img/CasaConejos/CasaConejos2.jpg";
import imagen3 from "../../img/CasaConejos/CasaConejos3.jpg";
import imagen4 from "../../img/CasaConejos/CasaConejos4.jpg";
import imagen5 from "../../img/CasaConejos/CasaConejos5.jpg";
import imagen6 from "../../img/CasaConejos/CasaConejos6.jpg";
import imagen7 from "../../img/CasaConejos/CasaConejos7.jpg";
import imagen1_1 from "../../img/CasaConejos/CasaConejos1_1.jpg";
import imagen2_2 from "../../img/CasaConejos/CasaConejos2_2.jpg";
import imagen3_3 from "../../img/CasaConejos/CasaConejos3_3.jpg";
import imagen4_4 from "../../img/CasaConejos/CasaConejos4_4.jpg";
import imagen5_5 from "../../img/CasaConejos/CasaConejos5_5.jpg";
import imagen6_6 from "../../img/CasaConejos/CasaConejos6_6.jpg";
import imagen7_7 from "../../img/CasaConejos/CasaConejos7_7.jpg";

function ResidencialCasaConejos() {
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
        background="CasaConejos"
        titulo0="Casa Conejos"
        images={images}
        images2={images2}
        titledescription="Casa Conejos"
        subtitledescription="Se distingue por su diseño vanguardista, caracterizado por líneas limpias y geometrías audaces que armonizan con el paisaje circundante. Esta obra conformada por volúmenes superpuestos crea una identidad visual única de la casa, con una claridad de las formas y materialidad, que resaltan la armonía de los espacios y dejan en claro la función de las áreas."
      />
    </>
  );
}

export default ResidencialCasaConejos;
