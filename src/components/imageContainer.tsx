import React, { useState } from "react";
import Modal from "./modal";
import { images } from "../data/images";

function ImageContainer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="image-container-row">
      {images.map((image, index) => (
        <div key={image.key}>
          <img
            src={image.thumbnail}
            onClick={() => {
              setCurrentIndex(index);
              setModalOpen(true);
            }}
          />
        </div>
      ))}
      {modalOpen && (
        <Modal
          images={images}
          defaultIndex={currentIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ImageContainer;
