import React from "react";
import "./ProgressBar.css";

function ProgressBar({ value, type }) {
  return (
    <div id="progressCont">
      <div
        id="progressValue"
        className={type}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
