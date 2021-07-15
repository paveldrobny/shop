import React from "react";

const NotFound = ({ text }) => {
  return (
    <div id="not-found-wrapper">
      <h2>
        No results found for <span id="not-found-text">{text}</span>
      </h2>
    </div>
  );
};
export default NotFound;
