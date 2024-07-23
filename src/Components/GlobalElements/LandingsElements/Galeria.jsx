import React, { useState } from "react";
import Modal from "react-modal";

function Galeria({ images }) {
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
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    // eslint-disable-next-line
    <div>
      {/* eslint-disable-next-line */}
      {images.map((image, index) => (
        // eslint-disable-next-line
        <img
          key={index}
          src={image} 
          // eslint-disable-next-line
          alt={`Image ${index}`}
          onClick={() => openModal(index)}
          style={{
            width: "100px",
            height: "100px",
            margin: "5px",
            cursor: "pointer",
          }}
        />
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {/* // eslint-disable-next-line */}
        <button onClick={prevImage}>Previous</button>
        {/* // eslint-disable-next-line */}
        <img
        // eslint-disable-next-line
        // eslint-disable-next-line
          src={images[selectedImageIndex]}
          // eslint-disable-next-line
          alt={`Image ${selectedImageIndex}`}
          // eslint-disable-next-line
        />
        <button onClick={nextImage}>Next</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Galeria;
