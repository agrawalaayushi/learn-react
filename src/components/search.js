import React from "react";
import { useState } from "react";

const Search = ({handleSearch}) => {
  const [searchText, setSearchText] = useState("");

  // const handleSearch = () => {
  //   console.log(props)
  //   // handle search options
  // };

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-res">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        onChange={handleOnChange}
        value={searchText}
      ></input>
      <button onClick={(event) => handleSearch(event, searchText)}>Search</button>
    </div>
  );
};

export default Search;
