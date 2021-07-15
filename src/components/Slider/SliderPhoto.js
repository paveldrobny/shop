import React from "react";
import Price from "../Card/Price";

const SliderPhoto = (props) => {
  return (
    <div id="slider-image-content">
      {props.sliders.map((slider, index) => {
        return (
          <div
            key={index}
            className="slider-image"
            style={{
              backgroundImage: `url(${slider.Image})`,
              right: `${props.current * 100}%`,
            }}
          >
            <div className="slider-image-info">
              <div className="image-info-content">
                <i className="info-content-title">
                  <b>{slider.Name}</b>
                </i>
                <Price isProduct={false} card={slider} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SliderPhoto;
