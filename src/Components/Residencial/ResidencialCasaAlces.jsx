import React from "react";
import imagen1 from "../../img/CasaAlces/CasaAlces1.jpg";
import imagen2 from "../../img/CasaAlces/CasaAlces2.jpg";
import imagen3 from "../../img/CasaAlces/CasaAlces3.jpg";
import imagen4 from "../../img/CasaAlces/CasaAlces4.jpg";
import imagen5 from "../../img/CasaAlces/CasaAlces5.jpg";
import imagen6 from "../../img/CasaAlces/CasaAlces6.jpg";
import imagen7 from "../../img/CasaAlces/CasaAlces7.jpg";
import imagen1_1 from "../../img/CasaAlces/CasaAlces1_1.jpg";
import imagen2_2 from "../../img/CasaAlces/CasaAlces2_2.jpg";
import imagen3_3 from "../../img/CasaAlces/CasaAlces3_3.jpg";
import imagen4_4 from "../../img/CasaAlces/CasaAlces4_4.jpg";
import imagen5_5 from "../../img/CasaAlces/CasaAlces5_5.jpg";
import imagen6_6 from "../../img/CasaAlces/CasaAlces6_6.jpg";
import imagen7_7 from "../../img/CasaAlces/CasaAlces7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";

function ResidencialCasaAlces(props) {
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
        background="CasaAlces"
        titulo0="Casa Alces"
        images={images}
        images2={images2}
        titledescription="Casa Alces"
        subtitledescription="La forma y función se conectan de manera directa por materiales naturales que crean un espacio ameno y consciente. El reflejo de volumetrías crean una especie de patio central que maneja la comunicación y flujo de la residencia. El espacio verde entre los dos edificios recobra el sentido de la naturaleza como parte fundamental del diseño."
      />
    </>
  );
}

export default ResidencialCasaAlces;
