import React, { useState } from "react";
const Search = ({ search, setInput }) => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
