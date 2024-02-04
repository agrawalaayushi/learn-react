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
    <div className="">
      <input
        className="text-gray-900 placeholder:text-gray-400 border-2 border-gray-300 py-1.5 px-2 rounded-md"
        type="search"
        placeholder="Search"
        onChange={handleOnChange}
        value={searchText}
      ></input>
      <button type="submit" className="bg-purple-600  text-white border rounded-md ml-4 px-2 py-1.5" onClick={(event) => handleSearch(event, searchText)}>Search</button>
    </div>
  );
};

export default Search;
