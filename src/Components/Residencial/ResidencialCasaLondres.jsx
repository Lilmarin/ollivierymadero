import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/Casalondres/Casalondres1.jpg";
import imagen2 from "../../img/Casalondres/Casalondres2.jpg";
import imagen3 from "../../img/Casalondres/Casalondres3.jpg";
import imagen4 from "../../img/Casalondres/Casalondres4.jpg";
import imagen5 from "../../img/Casalondres/Casalondres5.jpg";
import imagen6 from "../../img/Casalondres/Casalondres6.jpg";
import imagen7 from "../../img/Casalondres/Casalondres7.jpg";
import imagen1_1 from "../../img/Casalondres/Casalondres1_1.jpg";
import imagen2_2 from "../../img/Casalondres/Casalondres2_2.jpg";
import imagen3_3 from "../../img/Casalondres/Casalondres3_3.jpg";
import imagen4_4 from "../../img/Casalondres/Casalondres4_4.jpg";
import imagen5_5 from "../../img/Casalondres/Casalondres5_5.jpg";
import imagen6_6 from "../../img/Casalondres/Casalondres6_6.jpg";
import imagen7_7 from "../../img/Casalondres/Casalondres7_7.jpg";

function ResidencialCasaLondres() {
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
        background="Casalondres"
        titulo0="Casa Londres"
        images={images}
        images2={images2}
        titledescription="Casa Londres"
        subtitledescription="Estratégicamente ubicada, esta casa contemporánea combina elementos modernos con el encanto natural del revestimiento de piedra, ofreciendo espacios generosos y funcionales.
        Esta residencia combina estilo y funcionalidad para adaptarse a un estilo de vida moderno. Con su diseño interior espacioso y acabados de alta calidad, ofrece un oasis de confort y elegancia, convirtiéndose en un hogar ideal para quienes buscan sofisticación y comodidad en un entorno natural."
      />
    </>
  );
}

export default ResidencialCasaLondres;
