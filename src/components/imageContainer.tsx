import React, { useState } from "react";

import allImages from "../images/images.json";
import Modal from "./modal";

function ImageContainer() {
  const [clickedImage, setCurrentImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const onImageClick = (itemLink: any, index: any) => {
    setCurrentIndex(index);
    setCurrentImage(itemLink);
  };

  return (
    <div className="image-container-row">
      {allImages.smallImages.map((item, index) => (
        <div key={index}>
          <img
            src={item.link}
            alt={item.text}
            onClick={() => onImageClick(item.link, index)}
          />
        </div>
      ))}
      {clickedImage && (
        <Modal setCurrentImage={setCurrentImage} imgIndex={currentIndex} />
      )}
    </div>
  );
}

export default ImageContainer;
