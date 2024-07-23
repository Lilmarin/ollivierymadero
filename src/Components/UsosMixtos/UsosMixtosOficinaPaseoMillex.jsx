import React from "react";
import GaleriaLayout4 from "../GlobalElements/LandingsElements/GaleriaLayout4";
import imagen1 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex1.jpg";
import imagen2 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex2.jpg";
import imagen3 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex3.jpg";
import imagen4 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex4.jpg";
import imagen1_1 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex1_1.jpg";
import imagen2_2 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex2_2.jpg";
import imagen3_3 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex3_3.jpg";
import imagen4_4 from "../../img/Oficinaspaseomillex/Oficinaspaseomillex4_4.jpg";

function UsosMixtosOficinaPaseoMillex() {
  const images = [imagen1, imagen2, imagen3, imagen4];
  const images2 = [imagen1_1, imagen2_2, imagen3_3, imagen4_4];
  return (
    <>
      <GaleriaLayout4
        background="Oficinaspaseomillex"
        titulo0="Oficinas Paseo Millex"
        images={images}
        images2={images2}
        titledescription="Oficinas Paseo Milex"
        subtitledescription="El diseño interior de la oficina refleja un ambiente contemporáneo y profesional, adaptado a las necesidades de una empresa moderna y dinámica.
        Un área de recepción minimalista pero acogedora. La iluminación ambiental juega un papel importante para crear un espació limpio y funcional agregando un toque de personalidad y estilo."
      />
    </>
  );
}

export default UsosMixtosOficinaPaseoMillex;
