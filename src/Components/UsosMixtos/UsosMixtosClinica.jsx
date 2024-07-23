import React from "react";
import GaleriaLayout2 from "../GlobalElements/LandingsElements/GaleriaLayout2";
import imagen1 from "../../img/Clinica/Clinica1.jpg";
import imagen2 from "../../img/Clinica/Clinica2.jpg";
import imagen3 from "../../img/Clinica/Clinica3.jpg";
import imagen4 from "../../img/Clinica/Clinica4.jpg";
import imagen5 from "../../img/Clinica/Clinica5.jpg";
import imagen6 from "../../img/Clinica/Clinica6.jpg";
import imagen1_1 from "../../img/Clinica/Clinica1_1.jpg";
import imagen2_2 from "../../img/Clinica/Clinica2_2.jpg";
import imagen3_3 from "../../img/Clinica/Clinica3_3.jpg";
import imagen4_4 from "../../img/Clinica/Clinica4_4.jpg";
import imagen5_5 from "../../img/Clinica/Clinica5_5.jpg";
import imagen6_6 from "../../img/Clinica/Clinica6_6.jpg";

function UsosMixtosClinica() {
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];
  const images2 = [
    imagen1_1,
    imagen2_2,
    imagen3_3,
    imagen4_4,
    imagen5_5,
    imagen6_6,
  ];
  return (
    <>
      <GaleriaLayout2
        background="Clinica"
        titulo0="Clínica"
        images={images}
        images2={images2}
        titledescription="Clínica Oftalmológica"
        subtitledescription="La clínica oftalmológica está diseñada para cumplir con los más altos estándares médicos y ofrecer comodidad a los pacientes.
        El diseño de la clínica está orientado hacia la funcionalidad, la seguridad y la estética contemporánea, utilizando materiales como el acero y el cempanel para lograr un aspecto moderno y duradero.
        La fachada de la clínica está revestida con paneles cempanel, creando un contraste entre la robustez del acero y la versatilidad del cempanel. Estos materiales no solo proporcionan resistencia y durabilidad, sino que también permiten un diseño estético y limpio. Grandes ventanales de vidrio permiten la entrada de luz natural, creando un ambiente luminoso y confortable en el interior, pero tomando en cuenta la dirección del asoleamiento, así direccionándolos para obtener una eficiencia energética.
        "
      />
    </>
  );
}

export default UsosMixtosClinica;
