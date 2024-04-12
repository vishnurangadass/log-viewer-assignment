import React from "react";
import "./Search.css";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="searchbar"
      type="text"
      placeholder="Search logs"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default Search;
