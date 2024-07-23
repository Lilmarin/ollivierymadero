import React from "react";
import imagen1 from "../../img/Maharomana/Maharomana1.jpg";
import imagen2 from "../../img/Maharomana/Maharomana2.jpg";
import imagen3 from "../../img/Maharomana/Maharomana3.jpg";
import imagen4 from "../../img/Maharomana/Maharomana4.jpg";
import imagen5 from "../../img/Maharomana/Maharomana5.jpg";
import imagen6 from "../../img/Maharomana/Maharomana6.jpg";
import imagen7 from "../../img/Maharomana/Maharomana7.jpg";
import imagen1_1 from "../../img/Maharomana/Maharomana1_1.jpg";
import imagen2_2 from "../../img/Maharomana/Maharomana2_2.jpg";
import imagen3_3 from "../../img/Maharomana/Maharomana3_3.jpg";
import imagen4_4 from "../../img/Maharomana/Maharomana4_4.jpg";
import imagen5_5 from "../../img/Maharomana/Maharomana5_5.jpg";
import imagen6_6 from "../../img/Maharomana/Maharomana6_6.jpg";
import imagen7_7 from "../../img/Maharomana/Maharomana7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";


function ComercialMahaRomana() {
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
        background="Maharomana"
        titulo0="Maha Romana"
        images={images}
        images2={images2}
        titledescription="Maha Romana"
        subtitledescription="El proyecto consiste en el diseño y desarrollo de dos tiendas de distinto rubro caracterizadas por ser innovadoras y funcionales, diseñadas para ofrecer una experiencia de compra única y satisfactoria para los clientes. 
        El interior de las tiendas está cuidadosamente diseñado para maximizar el espacio disponible y facilitar la navegación de los clientes. Se emplearon elementos de diseño moderno y limpio que promuevan una atmósfera acogedora y sofisticada."
      />
    </>
  );
}

export default ComercialMahaRomana;
