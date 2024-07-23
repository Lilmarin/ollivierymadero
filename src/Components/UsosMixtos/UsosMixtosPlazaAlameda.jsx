import React from "react";
import imagen1 from "../../img/Plazaalameda/Plazaalameda1.jpg";
import imagen2 from "../../img/Plazaalameda/Plazaalameda2.jpg";
import imagen3 from "../../img/Plazaalameda/Plazaalameda3.jpg";
import imagen4 from "../../img/Plazaalameda/Plazaalameda4.jpg";
import imagen5 from "../../img/Plazaalameda/Plazaalameda5.jpg";
import imagen6 from "../../img/Plazaalameda/Plazaalameda6.jpg";
import imagen7 from "../../img/Plazaalameda/Plazaalameda7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1_1 from "../../img/Plazaalameda/Plazaalameda1_1.jpg";
import imagen2_2 from "../../img/Plazaalameda/Plazaalameda2_2.jpg";
import imagen3_3 from "../../img/Plazaalameda/Plazaalameda3_3.jpg";
import imagen4_4 from "../../img/Plazaalameda/Plazaalameda4_4.jpg";
import imagen5_5 from "../../img/Plazaalameda/Plazaalameda5_5.jpg";
import imagen6_6 from "../../img/Plazaalameda/Plazaalameda6_6.jpg";
import imagen7_7 from "../../img/Plazaalameda/Plazaalameda7_7.jpg";

function UsosMixtosPlazaAlameda() {
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
        background="Plazaalameda"
        titulo0="Plaza Alameda"
        images={images}
        images2={images2}
        titledescription="Plaza Alameda"
        subtitledescription="El diseño arquitectónico de esta plaza está orientado hacia la creación de un ambiente acogedor y profesional para pacientes y personal médico.
        Utilizando materiales modernos y duraderos, manteniendo un equilibrio entre estética y funcionalidad.
        Áreas bien iluminadas con un diseño contemporáneo combinando líneas claras y una paleta de colores clara para hacer una espacio limpio y moderno"
      />
    </>
  );
}

export default UsosMixtosPlazaAlameda;
