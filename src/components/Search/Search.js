import React from "react";
import "./Search.css";

const Search = ({ onChange, value }) => {
  return (
    <div id="search_cont">
      <input
        id="search"
        type="search"
        placeholder="Search..."
        value={value}
        maxLength="50"
        onChange={onChange}
      />
    </div>
  );
};
export default Search;
