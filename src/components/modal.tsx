import React, { useRef } from "react";
import allImages from "../images/images.json";

const Modal = ({ setCurrentImage, imgIndex }: any) => {
  const currentIndexNEW = useRef(imgIndex);

  const handleClick = (e: any) => {
    if (e.target.classList.contains("dismiss")) {
      setCurrentImage(null);
    }
  };

  function rotateIndex(direction: string) {
    if (direction === "right") {
      if (currentIndexNEW.current === allImages.bigImages.length - 1) {
        currentIndexNEW.current = 0;
        return;
      } else {
        currentIndexNEW.current = currentIndexNEW.current + 1;
        return;
      }
    }
    if (direction === "left") {
      if (currentIndexNEW.current === 0) {
        currentIndexNEW.current = allImages.bigImages.length - 1;
        return;
      } else {
        currentIndexNEW.current = currentIndexNEW.current - 1;
        return;
      }
    }
  }
  const newArrowClick = (direction: string) => {
    rotateIndex(direction);
    console.log(currentIndexNEW.current);
    setCurrentImage(allImages.bigImages[currentIndexNEW.current].link);
    return;
  };

  return (
    <>
      <div className="lightboxOverlay dismiss" onClick={handleClick}>
        <img
          src={allImages.bigImages[currentIndexNEW.current].link}
          alt={"click me"}
        />
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
