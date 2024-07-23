import React from "react";
import imagen1 from "../../img/Oficinassaltillo/Oficinassaltillo1.jpg";
import imagen2 from "../../img/Oficinassaltillo/Oficinassaltillo2.jpg";
import imagen3 from "../../img/Oficinassaltillo/Oficinassaltillo3.jpg";
import imagen4 from "../../img/Oficinassaltillo/Oficinassaltillo4.jpg";
import imagen5 from "../../img/Oficinassaltillo/Oficinassaltillo5.jpg";
import imagen6 from "../../img/Oficinassaltillo/Oficinassaltillo6.jpg";
import imagen7 from "../../img/Oficinassaltillo/Oficinassaltillo7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";
import imagen1_1 from "../../img/Oficinassaltillo/Oficinassaltillo1_1.jpg";
import imagen2_2 from "../../img/Oficinassaltillo/Oficinassaltillo2_2.jpg";
import imagen3_3 from "../../img/Oficinassaltillo/Oficinassaltillo3_3.jpg";
import imagen4_4 from "../../img/Oficinassaltillo/Oficinassaltillo4_4.jpg";
import imagen5_5 from "../../img/Oficinassaltillo/Oficinassaltillo5_5.jpg";
import imagen6_6 from "../../img/Oficinassaltillo/Oficinassaltillo6_6.jpg";
import imagen7_7 from "../../img/Oficinassaltillo/Oficinassaltillo7_7.jpg";


function UsosMixtosOficinasSaltillo() {
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
            background="Oficinassaltillo"
            titulo0="Oficinas Saltillo"
            images={images}
            images2={images2}
            titledescription="Oficinas Saltillo"
            subtitledescription="El diseño y distribución de este proyecto está enfocado en atender las necesidades corporativas de la empresa afín.  Aprovechando las grandes vistas que nos ofrece la ubicación del edifico en los espacios principales del conjunto."
          />
        </>
      );
}

export default UsosMixtosOficinasSaltillo
