import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/CasaCollier/Casacollier1.jpg";
import imagen2 from "../../img/CasaCollier/Casacollier2.jpg";
import imagen3 from "../../img/CasaCollier/Casacollier3.jpg";
import imagen4 from "../../img/CasaCollier/Casacollier4.jpg";
import imagen5 from "../../img/CasaCollier/Casacollier5.jpg";
import imagen6 from "../../img/CasaCollier/Casacollier6.jpg";
import imagen7 from "../../img/CasaCollier/Casacollier7.jpg";
import imagen1_1 from "../../img/CasaCollier/Casacollier1_1.jpg";
import imagen2_2 from "../../img/CasaCollier/Casacollier2_2.jpg";
import imagen3_3 from "../../img/CasaCollier/Casacollier3_3.jpg";
import imagen4_4 from "../../img/CasaCollier/Casacollier4_4.jpg";
import imagen5_5 from "../../img/CasaCollier/Casacollier5_5.jpg";
import imagen6_6 from "../../img/CasaCollier/Casacollier6_6.jpg";
import imagen7_7 from "../../img/CasaCollier/Casacollier7_7.jpg";

function ResidencialCasaCollier() {
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
        background="Casacollier"
        titulo0="Casa Collier"
        images={images}
        images2={images2}
        titledescription="Casa Collier"
        subtitledescription="La arquitectura de esta obra sigue dos lineamientos importantes, la integración de la volumetría con la naturaleza que ofrece el terreno a sus alrededores y el diseño refinado y elegante. Mediante la selección especifica de los materiales de decoración logramos expresar un diseño lujoso y distinto sin perder la delicadeza."
      />
    </>
  );
}

export default ResidencialCasaCollier;
