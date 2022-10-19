import React, { MouseEvent, useState } from "react";
import { LeftArrow } from "./arrows/leftArrow";
import { RightArrow } from "./arrows/rightArrow";
import { Images } from "../data/images";

interface modalType {
  images: Images[];
  defaultIndex: number;
  onClose: (e: MouseEvent) => void;
}

const Modal = ({ images, defaultIndex, onClose }: modalType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);
  const handleOnLeftArrowClick = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleOnRightArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <div style={{ zIndex: 1 }}>
        <img src={images[currentIndex].image} alt={"click me"} />
        <button
          className="dismiss"
          onClick={(e) => {
            onClose(e);
          }}
        >
          X
        </button>
        <LeftArrow onClick={handleOnLeftArrowClick} />
        <RightArrow onClick={handleOnRightArrowClick} />
      </div>
      <div
        style={{ zIndex: 0 }}
        className="lightboxOverlay dismiss"
        onClick={onClose}
      />
    </>
  );
};

export default Modal;
