import React from "react";
import { useState } from "react";

const Search = (props) => {
  const handleSearch = () => {
    // handle search options
  }
  
  return (
    <div className="search-res">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
