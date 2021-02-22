import React from "react";
import "./Search.css";

function Search({ onChange, value }) {
  return (
    <div id="search_cont">
      <input
        id="search"
        type="search"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
