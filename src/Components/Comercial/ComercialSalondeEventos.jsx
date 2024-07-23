import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/SalondeEventos/SalondeEventos1.jpg";
import imagen2 from "../../img/SalondeEventos/SalondeEventos2.jpg";
import imagen3 from "../../img/SalondeEventos/SalondeEventos3.jpg";
import imagen4 from "../../img/SalondeEventos/SalondeEventos4.jpg";
import imagen5 from "../../img/SalondeEventos/SalondeEventos5.jpg";
import imagen6 from "../../img/SalondeEventos/SalondeEventos6.jpg";
import imagen7 from "../../img/SalondeEventos/SalondeEventos7.jpg";
import imagen1_1 from "../../img/SalondeEventos/SalondeEventos1_1.jpg";
import imagen2_2 from "../../img/SalondeEventos/SalondeEventos2_2.jpg";
import imagen3_3 from "../../img/SalondeEventos/SalondeEventos3_3.jpg";
import imagen4_4 from "../../img/SalondeEventos/SalondeEventos4_4.jpg";
import imagen5_5 from "../../img/SalondeEventos/SalondeEventos5_5.jpg";
import imagen6_6 from "../../img/SalondeEventos/SalondeEventos6_6.jpg";
import imagen7_7 from "../../img/SalondeEventos/SalondeEventos7_7.jpg";

function ComercialSalondeEventos() {
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
        background="SalondeEventos"
        titulo0="Salon de Eventos"
        images={images}
        images2={images2}
        titledescription="Salon de eventos"
        subtitledescription="El proyecto consiste en el diseño y construcción de un complejo de salones de eventos, destinado a ofrecer espacios versátiles y elegantes para celebraciones de todo tipo. El complejo estará ubicado estratégicamente para abarcar los distintos puntos de la ciudad. 
        El diseño del complejo se caracteriza por líneas modernas y funcionales, con espacios luminosos y un paisajismo que termina por complementar todo el entorno  asegurando así confort y elegancia."
      />
    </>
  );
}

export default ComercialSalondeEventos;
