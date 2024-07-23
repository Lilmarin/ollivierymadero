import React from "react";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1 from "../../img/CasaCumbres/Casacumbres1.jpg";
import imagen2 from "../../img/CasaCumbres/Casacumbres2.jpg";
import imagen3 from "../../img/CasaCumbres/Casacumbres3.jpg";
import imagen4 from "../../img/CasaCumbres/Casacumbres4.jpg";
import imagen5 from "../../img/CasaCumbres/Casacumbres5.jpg";
import imagen6 from "../../img/CasaCumbres/Casacumbres6.jpg";
import imagen7 from "../../img/CasaCumbres/Casacumbres7.jpg";
import imagen1_1 from "../../img/CasaCumbres/Casacumbres1_1.jpg";
import imagen2_2 from "../../img/CasaCumbres/Casacumbres2_2.jpg";
import imagen3_3 from "../../img/CasaCumbres/Casacumbres3_3.jpg";
import imagen4_4 from "../../img/CasaCumbres/Casacumbres4_4.jpg";
import imagen5_5 from "../../img/CasaCumbres/Casacumbres5_5.jpg";
import imagen6_6 from "../../img/CasaCumbres/Casacumbres6_6.jpg";
import imagen7_7 from "../../img/CasaCumbres/Casacumbres7_7.jpg";

function ResidencialCasaCumbres() {
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
        background="Casacumbres"
        titulo0="Casa Cumbres"
        images={images}
        images2={images2}
        titledescription="Casa Cumbres"
        subtitledescription="La casa se conforma por dos grandes volúmenes en escuadra completamente transparentes hacia su interior para lograr amplitud visual desde sus áreas sociales y que se complementan con el volumen de la alberca semicubierta, generando un ambiente armónico y equilibrado en su diseño y estética, para la cual se buscó el uso de materiales naturales como el mármol, la madera, y el concreto aparente, contrastados con grandes y pesadas celosías metálicas que forman el elemento distintivo de la casa y funcionan como parasol en las áreas sociales orientadas hacia el sur y en su fachada hacia el poniente, que a su vez permiten unas vistas muy originales desde el interior de la propiedad.
        Las áreas de distribución abierta optimizan la fluidez y la comunicación entre los espacios, y estos generan una conexión con el exterior que permiten el paso a una abundante luz natural, creando una conexión visual y sensorial con el entorno exterior."
      />
    </>
  );
}

export default ResidencialCasaCumbres;
