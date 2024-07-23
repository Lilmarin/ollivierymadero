import React from "react";
import imagen1 from "../../img/Santolivoparras/Santolivoparras1.jpg";
import imagen2 from "../../img/Santolivoparras/Santolivoparras2.jpg";
import imagen3 from "../../img/Santolivoparras/Santolivoparras3.jpg";
import imagen4 from "../../img/Santolivoparras/Santolivoparras4.jpg";
import imagen5 from "../../img/Santolivoparras/Santolivoparras5.jpg";
import imagen6 from "../../img/Santolivoparras/Santolivoparras6.jpg";
import imagen7 from "../../img/Santolivoparras/Santolivoparras7.jpg";
import imagen1_1 from "../../img/Santolivoparras/Santolivoparras1_1.jpg";
import imagen2_2 from "../../img/Santolivoparras/Santolivoparras2_2.jpg";
import imagen3_3 from "../../img/Santolivoparras/Santolivoparras3_3.jpg";
import imagen4_4 from "../../img/Santolivoparras/Santolivoparras4_4.jpg";
import imagen5_5 from "../../img/Santolivoparras/Santolivoparras5_5.jpg";
import imagen6_6 from "../../img/Santolivoparras/Santolivoparras6_6.jpg";
import imagen7_7 from "../../img/Santolivoparras/Santolivoparras7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";

function ViviendaSantolivoParras() {
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
        background="Santolivoparras"
        titulo0="Santolivo Parras"
        images={images}
        images2={images2}
        titledescription="Santolivo Parras"
        subtitledescription="Situado en el encantador pueblo de Parras, Coahuila, este complejo de departamentos combina la belleza natural del entorno con un diseño arquitectónico rústico y elegante. 
        El complejo está diseñado para integrarse armoniosamente con el entorno natural, utilizando materiales locales y tradicionales que reflejan el carácter rústico de la región. La disposición de los edificios y las áreas comunes fomenta un sentido de comunidad y conexión con la naturaleza.
        El complejo cuenta con diversas áreas comunes diseñadas para fomentar la interacción social y el disfrute del entorno natural."
      />
    </>
  );
}

export default ViviendaSantolivoParras;
