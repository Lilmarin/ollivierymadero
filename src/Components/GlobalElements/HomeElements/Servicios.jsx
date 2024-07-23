import React from "react";

function Servicios() {
  return (
    <div className="servicios-container">
      <div className="container-inside">
        <div className="diseno-image image">
          <div className="diseno-image-inner image-inner">
            <p>
              Desde la conceptualización hasta la construcción, nos
              comprometemos a trabajar en estrecha colaboración con nuestros
              clientes para garantizar que cada detalle se tenga en cuenta.
              Desarrollando obras de alta calidad cuidando cada detalle desde
              los cimientos.
            </p>
            <h4>CONSTRUCCIÓN</h4>
          </div>
        </div>
        <div className="container-three">
          <div className="ambas-three top-three">
            <div className="title-container">
              <div className="construccion-image image">
                <div className="construccion-image-inner image-inner">
                  <p>
                  Nos dedicamos a crear espacios innovadores y funcionales que reflejen la visión única de cada cliente.
                  </p>
                  <h4>DISEÑO DE PROYECTOS ARQUITECTONICOS</h4>
                </div>
              </div>
              <div className="serviciostitle">
                <div className="Left-button"></div>
                <p className="center">SERVICIOS</p>
                <div className="Right-button"></div>
              </div>
            </div>
            <div className="interiorismo-image image">
              <div className="interiorismo-image-inner image-inner">
                <p>
                  Estamos atentos a cada necesidad es por eso que desarrollamos
                  supervisones de obras para asegurar que los proyectos se
                  ejecuten con la calidad que el proyecto requiere.
                </p>
                <h4>SUPERVISION DE OBRA</h4>
              </div>
            </div>
          </div>
          <div className="ambas-three btn-three paisajismo-image image">
            <div className="paisajismo-image-inner image-inner">
              <p>
                Nos enorgullece ofrecer soluciones arquitectónicas
                personalizadas que se adaptan a las necesidades y deseos de
                quienes confían en nosotros creando espacios de gran confort y
                elegancia.
              </p>
              <h4>INTERIORISMO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
