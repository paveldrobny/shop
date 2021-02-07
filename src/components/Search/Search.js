import React from "react";
import "./Search.css";

function Search() {
  return (
    <div id="search_cont">
      <input id="search" type="text" placeholder="Поиск..." />
      <button id="clearText"></button>
    </div>
  );
}

export default Search;
