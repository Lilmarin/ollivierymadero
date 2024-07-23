import React from "react";
import imagen1 from "../../img/Plazalastrojes/Plazalastrojes1.jpg";
import imagen2 from "../../img/Plazalastrojes/Plazalastrojes2.jpg";
import imagen3 from "../../img/Plazalastrojes/Plazalastrojes3.jpg";
import imagen4 from "../../img/Plazalastrojes/Plazalastrojes4.jpg";
import imagen5 from "../../img/Plazalastrojes/Plazalastrojes5.jpg";
import imagen6 from "../../img/Plazalastrojes/Plazalastrojes6.jpg";
import imagen7 from "../../img/Plazalastrojes/Plazalastrojes7.jpg";
import imagen1_1 from "../../img/Plazalastrojes/Plazalastrojes1_1.jpg";
import imagen2_2 from "../../img/Plazalastrojes/Plazalastrojes2_2.jpg";
import imagen3_3 from "../../img/Plazalastrojes/Plazalastrojes3_3.jpg";
import imagen4_4 from "../../img/Plazalastrojes/Plazalastrojes4_4.jpg";
import imagen5_5 from "../../img/Plazalastrojes/Plazalastrojes5_5.jpg";
import imagen6_6 from "../../img/Plazalastrojes/Plazalastrojes6_6.jpg";
import imagen7_7 from "../../img/Plazalastrojes/Plazalastrojes7_7.jpg";
import GaleriaLayout1 from "../GlobalElements/LandingsElements/GaleriaLayout1";

function ComercialPlazalasTrojes() {
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
            background="Plazalastrojes"
            titulo0="Plaza las Trojes"
            images={images}
            images2={images2}
            titledescription="Plaza las Trojes"
            subtitledescription="El diseño del complejo combina modernidad y funcionalidad, utilizando materiales duraderos y estéticamente agradables que reflejan un ambiente contemporáneo y atractivo para los visitantes.
            La fachada del complejo está diseñada con una mezcla de vidrio, acero y elementos naturales como ladrillos. Los detalles de acero hacen un ambiente atemporal y contemporáneo
            El complejo está distribuido en varios niveles, cada uno optimizado para diferentes tipos de comercios y actividades."
          />
        </>
      );
}

export default ComercialPlazalasTrojes
