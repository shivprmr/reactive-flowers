import React from "react";
import ImageContainer from "./imageContainer";
import TitleContainer from "./titleContainer";
import CarouselContainer from "./carouselContainer";
import MessageContainer from "./messageContainer";
import ButtonContainer from "./buttonContainer";

function BaseContainer() {
  return (
    <div className="base-container">
      <div className="first-pane">
        <ImageContainer />
      </div>

      <div className="second-pane">
        <TitleContainer />
        <CarouselContainer />
        <MessageContainer />
        <ButtonContainer />
      </div>
    </div>
  );
}

export default BaseContainer;
