import React, { useState } from "react";
import allImages from "../images/images.json";
type modalType = { setCurrentImage: Function; imgIndex: number };
const Modal = ({ setCurrentImage, imgIndex }: modalType) => {
  //const currentIndexNEW = useRef(imgIndex);
  const [currentIndex, setCurrentIndex] = useState<number>(imgIndex);

  const handleClick = (e: any) => {
    if (e.target.classList.contains("dismiss")) {
      setCurrentImage(null);
    }
  };

  function rotateIndex(direction: string) {
    if (direction === "right") {
      if (currentIndex === allImages.bigImages.length - 1) {
        setCurrentIndex(0);
        return;
      } else {
        setCurrentIndex(currentIndex! + 1);
        return;
      }
    }
    if (direction === "left") {
      if (currentIndex === 0) {
        setCurrentIndex(allImages.bigImages.length - 1);
        return;
      } else {
        setCurrentIndex(currentIndex! - 1);
        return;
      }
    }
  }
  const newArrowClick = (direction: string) => {
    rotateIndex(direction);
    console.log(currentIndex);
    setCurrentImage(allImages.bigImages[currentIndex!].link);
    return;
  };
  debugger;
  return (
    <>
      <div className="lightboxOverlay dismiss" onClick={handleClick}>
        <img src={allImages.bigImages[currentIndex!].link} alt={"click me"} />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div
          onClick={() => newArrowClick("right")}
          className="lightboxOverlay-arrows_right"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div
          onClick={() => newArrowClick("left")}
          className="lightboxOverlay-arrows_left"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
