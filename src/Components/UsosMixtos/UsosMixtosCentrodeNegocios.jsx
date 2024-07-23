import React from "react";
import imagen1 from "../../img/Centrodenegocios/Centrodenegocios1.jpg";
import imagen2 from "../../img/Centrodenegocios/Centrodenegocios2.jpg";
import imagen3 from "../../img/Centrodenegocios/Centrodenegocios3.jpg";
import imagen4 from "../../img/Centrodenegocios/Centrodenegocios4.jpg";
import imagen5 from "../../img/Centrodenegocios/Centrodenegocios5.jpg";
import imagen6 from "../../img/Centrodenegocios/Centrodenegocios6.jpg";
import imagen7 from "../../img/Centrodenegocios/Centrodenegocios7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1_1 from "../../img/Centrodenegocios/Centrodenegocios1_1.jpg";
import imagen2_2 from "../../img/Centrodenegocios/Centrodenegocios2_2.jpg";
import imagen3_3 from "../../img/Centrodenegocios/Centrodenegocios3_3.jpg";
import imagen4_4 from "../../img/Centrodenegocios/Centrodenegocios4_4.jpg";
import imagen5_5 from "../../img/Centrodenegocios/Centrodenegocios5_5.jpg";
import imagen6_6 from "../../img/Centrodenegocios/Centrodenegocios6_6.jpg";
import imagen7_7 from "../../img/Centrodenegocios/Centrodenegocios7_7.jpg";

function UsosMixtosCentrodeNegocios() {

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
        background="Centrodenegocios"
        titulo0="Centro de negocios"
        images={images}
        images2={images2}
        titledescription="Centro de negocios"
        subtitledescription="El diseño del centro de negocios está orientado hacia la funcionalidad, la eficiencia y la impresión estética moderna. Se enfoca en crear un entorno profesional y colaborativo que inspire la productividad y el éxito empresarial.
        La fachada del centro de negocios combina materiales contemporáneos como vidrio, acero y piedras naturales, creando una imagen corporativa y sofisticada. Grandes ventanales de vidrio ofrecen vistas panorámicas de la ciudad y permiten la entrada abundante de luz natural, creando un ambiente luminoso y acogedor en el interior."
      />
    </>
  );
}

export default UsosMixtosCentrodeNegocios;
