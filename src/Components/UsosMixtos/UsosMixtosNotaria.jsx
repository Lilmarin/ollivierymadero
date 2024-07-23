import React from "react";
import imagen1 from "../../img/Notaria/Notaria1.jpg";
import imagen2 from "../../img/Notaria/Notaria2.jpg";
import imagen3 from "../../img/Notaria/Notaria3.jpg";
import imagen4 from "../../img/Notaria/Notaria4.jpg";
import imagen5 from "../../img/Notaria/Notaria5.jpg";
import imagen6 from "../../img/Notaria/Notaria6.jpg";
import imagen7 from "../../img/Notaria/Notaria7.jpg";
import imagen1_1 from "../../img/Notaria/Notaria1_1.jpg";
import imagen2_2 from "../../img/Notaria/Notaria2_2.jpg";
import imagen3_3 from "../../img/Notaria/Notaria3_3.jpg";
import imagen4_4 from "../../img/Notaria/Notaria4_4.jpg";
import imagen5_5 from "../../img/Notaria/Notaria5_5.jpg";
import imagen6_6 from "../../img/Notaria/Notaria6_6.jpg";
import imagen7_7 from "../../img/Notaria/Notaria7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";

function UsosMixtosNotaria() {
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
        background="Notaria"
        titulo0="Notaria"
        images={images}
        images2={images2}
        titledescription="Notaria Pública"
        subtitledescription="El diseño de la notaría está centrado en proporcionar un ambiente confiable y acogedor para los clientes mientras se mantiene la seriedad y formalidad requerida por su función legal.
        La madera se utiliza de manera prominente en el diseño interior para transmitir una sensación de tradición y calidez."
      />
    </>
  );
}

export default UsosMixtosNotaria;
