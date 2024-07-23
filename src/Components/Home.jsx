import React from "react";
import MenuPrincipal from "./MenuPrincipal";
import Header from "./GlobalElements/HomeElements/Header";
import Us from "./GlobalElements/HomeElements/Us";
import Servicios from "./GlobalElements/HomeElements/Servicios";
import Contacto from "./GlobalElements/HomeElements/Contacto";
import Residencial from "./GlobalElements/HomeElements/Residencial";
import Vivienda from "./GlobalElements/HomeElements/Vivienda";
import Comercial from "./GlobalElements/HomeElements/Comercial";
import UsosMixtos from "./GlobalElements/HomeElements/UsosMixtos";
import BottomButtom from "./GlobalElements/HomeElements/BottomButtom";
import Footer from "./Footer";
import { useNav } from "../NavContext";

function Home() {
  const { sectionRefs } = useNav();

  return (
    <div>
      <MenuPrincipal />
      <Header />
      <Us />
      <Servicios />
      <Contacto />
      <Residencial ref={sectionRefs.section1} />
      <Vivienda ref={sectionRefs.section2} />
      <Comercial ref={sectionRefs.section3} />
      <UsosMixtos ref={sectionRefs.section4} />
      <BottomButtom />
      <Footer />
    </div>
  );
}

export default Home;
