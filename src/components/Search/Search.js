import React from "react";
import "./Search.css";

const Search = ({ onChange, value }) => {
  return (
    <div id="search-wrapper">
      <input
        type="search"
        placeholder="Search..."
        value={value}
        maxLength="30"
        onChange={onChange}
      />
    </div>
  );
};
export default Search;
