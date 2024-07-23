import React from "react";
import imagen1 from "../../img/Casahalcones/Casahalcones1.jpg";
import imagen2 from "../../img/Casahalcones/Casahalcones2.jpg";
import imagen3 from "../../img/Casahalcones/Casahalcones3.jpg";
import imagen4 from "../../img/Casahalcones/Casahalcones4.jpg";
import imagen5 from "../../img/Casahalcones/Casahalcones5.jpg";
import imagen6 from "../../img/Casahalcones/Casahalcones6.jpg";
import imagen7 from "../../img/Casahalcones/Casahalcones7.jpg";
import imagen1_1 from "../../img/Casahalcones/Casahalcones1_1.jpg";
import imagen2_2 from "../../img/Casahalcones/Casahalcones2_2.jpg";
import imagen3_3 from "../../img/Casahalcones/Casahalcones3_3.jpg";
import imagen4_4 from "../../img/Casahalcones/Casahalcones4_4.jpg";
import imagen5_5 from "../../img/Casahalcones/Casahalcones5_5.jpg";
import imagen6_6 from "../../img/Casahalcones/Casahalcones6_6.jpg";
import imagen7_7 from "../../img/Casahalcones/Casahalcones7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";

function ResidencialCasaHalcones() {
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
        background="Casahalcones"
        titulo0="Casa Halcones"
        images={images}
        images2={images2}
        titledescription="Casa Halcones"
        subtitledescription="Casa halcones es un ejemplo destacado de diseño contemporáneo y funcionalidad. Ubicada en un entorno privilegiado de [ubicación], esta casa combina elegancia, confort y sostenibilidad, estableciendo un estándar elevado en arquitectura residencial.
        Grandes Volúmenes conforman una arquitectura limpia y contemporánea, la atemporalidad de los materiales dan un toque fresco, innovador y elegante."
      />
    </>
  );
}

export default ResidencialCasaHalcones;
