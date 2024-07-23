import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia1.jpg";
import imagen2 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia2.jpg";
import imagen3 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia3.jpg";
import imagen4 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia4.jpg";
import imagen5 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia5.jpg";
import imagen6 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia6.jpg";
import imagen7 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia7.jpg";
import imagen1_1 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia1_1.jpg";
import imagen2_2 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia2_2.jpg";
import imagen3_3 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia3_3.jpg";
import imagen4_4 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia4_4.jpg";
import imagen5_5 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia5_5.jpg";
import imagen6_6 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia6_6.jpg";
import imagen7_7 from "../../img/Plazapaseoindependencia/Plazapaseoindependencia7_7.jpg";


function ComercialPlazaPaseoIndependencia() {
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
        background="Plazapaseoindependencia"
        titulo0="Plaza paseo independencia"
        images={images}
        images2={images2}
        titledescription="Plaza paseo independencia"
        subtitledescription="El diseño de esta plaza es un resultado de las necesidades del entorno ya que se tiene restricción aérea la cual nos llevó a desarrollar el diseño de una plaza en desnivel, sin perder la comunicación entre edificios logrando así un espacio social y transitable."
      />
    </>
  );
}

export default ComercialPlazaPaseoIndependencia;
