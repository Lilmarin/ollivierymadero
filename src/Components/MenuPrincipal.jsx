import React from "react";
import { Button, Navbar } from "flowbite-react";
import imagenlogo from "../img/OM_Logotipos.png"
function MenuPrincipal() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src={imagenlogo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">RESIDENCIAL</Navbar.Link>
        <Navbar.Link href="#">VIVIENDA</Navbar.Link>
        <Navbar.Link href="#">COMERCIAL</Navbar.Link>
        <Navbar.Link href="#">USOS MIXTOS</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuPrincipal;
