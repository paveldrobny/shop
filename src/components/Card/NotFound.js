import React from "react";

function NotFound({ text }) {
  return (
    <div id="notFoundWrapper">
      <h2>
        No results found for <span id="textNF">{text}</span>
      </h2>
    </div>
  );
}

export default NotFound;
