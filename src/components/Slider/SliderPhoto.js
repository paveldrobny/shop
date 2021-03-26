import React from "react";
import Price from "../Card/Price";

function SliderPhoto({ slider, index, currentT }) {
  return (
    <div
      className={index === currentT ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${slider.Image})`,
        right: `${currentT * 100}%`,
      }}
    >
      <div className="projectInfo">
        <div className="projectName">
          <i><b>{slider.Name}</b></i>
          <Price card={slider}/>
        </div>
      </div>
    </div>
  );
}

export default SliderPhoto;
