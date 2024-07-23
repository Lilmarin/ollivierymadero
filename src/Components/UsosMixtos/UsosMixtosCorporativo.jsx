import React from "react";
import imagen1 from "../../img/Corporativo/Corporativo1.jpg";
import imagen2 from "../../img/Corporativo/Corporativo2.jpg";
import imagen3 from "../../img/Corporativo/Corporativo3.jpg";
import imagen4 from "../../img/Corporativo/Corporativo4.jpg";
import imagen5 from "../../img/Corporativo/Corporativo5.jpg";
import imagen6 from "../../img/Corporativo/Corporativo6.jpg";
import imagen7 from "../../img/Corporativo/Corporativo7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1_1 from "../../img/Corporativo/Corporativo1_1.jpg";
import imagen2_2 from "../../img/Corporativo/Corporativo2_2.jpg";
import imagen3_3 from "../../img/Corporativo/Corporativo3_3.jpg";
import imagen4_4 from "../../img/Corporativo/Corporativo4_4.jpg";
import imagen5_5 from "../../img/Corporativo/Corporativo5_5.jpg";
import imagen6_6 from "../../img/Corporativo/Corporativo6_6.jpg";
import imagen7_7 from "../../img/Corporativo/Corporativo7_7.jpg";

function UsosMixtosCorporativo() {
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
        background="Corporativo"
        titulo0="Corporativo"
        images={images}
        images2={images2}
        titledescription="Corporativo Confía"
        subtitledescription="El diseño del corporativo combina funcionalidad con una estética contemporánea, utilizando materiales como el cempanel y el acero para crear una imagen corporativa sólida y moderna.
        La fachada del edificio está revestida con paneles de cempanel y detalles de acero, creando un contraste visual interesante y una apariencia elegante y robusta. 
        El corporativo está diseñado para satisfacer las necesidades específicas de las empresas del sector financiero y ofrecer un entorno profesional y eficiente."
      />
    </>
  );
}

export default UsosMixtosCorporativo;
