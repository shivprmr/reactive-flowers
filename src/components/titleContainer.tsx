import React from "react";

function TitleContainer() {
  return (
    <div className="title-container">
      <div className="title-code">
        <h1>Coral Meadow Flowers Bouquet</h1>
        <p>Product code: 29195688</p>
      </div>
      <div className="reviews-container">
        <b>
          <h3>&#9733;&#9733;&#9733;&#9733;&#9734; 272 Reviews</h3>
        </b>
      </div>

      <div className="price-container">
        <h1>
          <b>£35</b>
        </h1>
      </div>

      <div className="deal-container">
        <p>wow! special deal! buy a flower and get another flower on us!</p>
        <u>
          <div>
            <a href="url">
              <h3>more details</h3>
            </a>
          </div>
        </u>
      </div>
    </div>
  );
}

export default TitleContainer;
