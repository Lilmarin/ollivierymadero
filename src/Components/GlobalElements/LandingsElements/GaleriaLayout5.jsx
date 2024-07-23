import React, { useState } from "react";
import Modal from "react-modal";
import Footer from "../../Footer";
import MenuPrincipal from "../../MenuPrincipal";
import HomeLanding from "./HomeLanding";
import strockeleft from "../../../img/strockeleft.png";
import strokeright from "../../../img/strokeright.png";

function GaleriaLayout5(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="landingpage">
      <MenuPrincipal />
      <HomeLanding class={props.background} titulo={props.titulo0} />
      <div className="Description-Landing">
        {/* // eslint-disable-next-line */}
        <img
          className="image-left"
          src={props.images[0]}
          key={0}
          // eslint-disable-next-line
          alt={`Image ${0}`}
          onClick={() => openModal(0)}
          style={{
            cursor: "pointer",
          }}
        />
        <div className="text-right">
          <h3>{props.titledescription}</h3>
          <h6>{props.subtitledescription}</h6>
        </div>
      </div>
      {/*  eslint-disable-next-line */}
      <img
        className="image100"
        src={props.images[1]}
        key={1}
        // eslint-disable-next-line
        alt={`Image ${1}`}
        onClick={() => openModal(1)}
        style={{
          cursor: "pointer",
        }}
      />
      <div className="three-grid-in-0">
        <div className="ckr">
          {" "}
          <img
            className="image100"
            src={props.images[2]}
            key={2}
            // eslint-disable-next-line
            alt={`Image ${2}`}
            onClick={() => openModal(2)}
            style={{
              cursor: "pointer",
            }}
          />{" "}
          <img
            className="image100"
            src={props.images[3]}
            key={3}
            // eslint-disable-next-line
            alt={`Image ${3}`}
            onClick={() => openModal(3)}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
        <img
          className="image100"
          src={props.images[4]}
          key={4}
          // eslint-disable-next-line
          alt={`Image ${4}`}
          onClick={() => openModal(4)}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <div className="twoelements-second">
        <img
          className="item"
          src={props.images[5]}
          key={5}
          alt={`Image ${5}`}
          onClick={() => openModal(5)}
          style={{
            cursor: "pointer",
          }}
        />
        <img
          className="item"
          src={props.images[6]}
          key={6}
          alt={`Image ${6}`}
          onClick={() => openModal(6)}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <Footer />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={prevImage} className="arrows">
          <img src={strockeleft} alt="<" />
        </button>
        <img
          className="img-contx"
          src={props.images[selectedImageIndex]}
          alt={`Image ${selectedImageIndex}`}
        />
        <button onClick={nextImage} className="arrows">
          <img src={strokeright} alt=">" />
        </button>
      </Modal>
    </div>
  );
}

export default GaleriaLayout5;
