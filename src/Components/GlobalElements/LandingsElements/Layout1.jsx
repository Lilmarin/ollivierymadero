import React from "react";
import MenuPrincipal from "../MenuPrincipal";
import Footer from "../Footer";
import HomeLanding from "../GlobalElements/LandingsElements/HomeLanding";

function Layout1(props) {
  return (
    <div className="landingpage">
      <MenuPrincipal />
      <HomeLanding class={props.classtitle} titulo={props.titlelanding} />
     

      <img className="image100" src={Imagen2} alt="Casa Campestre" />
      <img className="image100" src={Imagen3} alt="Casa Campestre" />
      <div className="twoelements">
        <img className="image100" src={Imagen4} alt="Casa Campestre" />
        <img className="image100" src={Imagen5} alt="Casa Campestre" />
      </div>
      <div className="twoelements-second">
        <div
          className="item"
          style={{ backgroundImage: `url(${Imagen6})` }}
        ></div>
        <div
          className="item"
          style={{ backgroundImage: `url(${Imagen7})` }}
        ></div>
      </div>
     
      <Footer />
    </div>
  );
}

export default Layout1;
