import React from "react";
import Price from "../Card/Price";

const SliderPhoto = ({ slider, index, current }) => {
  return (
    <div
      className={index === current ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${slider.Image})`,
        right: `${current * 100}%`,
      }}
    >
      <div className="projectInfo">
        <div className="projectName">
          <i>
            <b>{slider.Name}</b>
          </i>
          <Price card={slider} />
        </div>
      </div>
    </div>
  );
};

export default SliderPhoto;
