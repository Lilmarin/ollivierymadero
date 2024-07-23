import React from "react";
import GaleriaLayout4 from "../GlobalElements/LandingsElements/GaleriaLayout4";
import imagen1 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial1.jpg";
import imagen2 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial2.jpg";
import imagen3 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial3.jpg";
import imagen4 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial4.jpg";
import imagen1_1 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial1_1.jpg";
import imagen2_2 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial2_2.jpg";
import imagen3_3 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial3_3.jpg";
import imagen4_4 from "../../img/Bodegaszonaindustrial/Bodegaszonaindustrial4_4.jpg";


function UsosMixtosBodegasZonaIndustrial() {
  const images = [imagen1, imagen2, imagen3, imagen4];
  const images2 = [imagen1_1, imagen2_2, imagen3_3, imagen4_4];
  return (
    <>
      <GaleriaLayout4
        background="Bodegaszonaindustrial"
        titulo0="Bodegas zona industrial"
        images={images}
        images2={images2}
        titledescription="Bodegas zona industrial"
        subtitledescription="El diseño de las bodegas se enfoca en la funcionalidad, durabilidad y eficiencia operativa. El complejo está pensado para maximizar el uso del espacio y facilitar las operaciones de almacenamiento, carga y descarga de mercancías.
        Las fachadas de las bodegas están construidas con materiales industriales robustos, como acero corrugado y concreto prefabricado, que aseguran resistencia y durabilidad. La arquitectura se caracteriza por líneas limpias y simples, reflejando un enfoque práctico y eficiente."
      />
    </>
  );
}

export default UsosMixtosBodegasZonaIndustrial;
