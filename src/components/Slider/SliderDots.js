import React from "react";

const SliderDots = ({ index, current, onClick }) => {
  return (
    <div
      className={index === current ? "slider-dots active" : "slider-dots"}
      onClick={onClick}
    ></div>
  );
};

export default SliderDots;
