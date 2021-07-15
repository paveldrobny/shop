import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, type }) => {
  return (
    <div className="progress-content">
      <div
        className={`progress-value ${type}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
