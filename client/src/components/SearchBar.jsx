
import React from 'react';
const SearchBar = ({ updateInput, searchHandler }) => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="search"
        className="search-bar-input"
        placeholder="Search for a company"
        onChange={(e) => {updateInput(e.target.value)}}
      >
      </input>
      <button onClick={searchHandler}>Search!</button>
    </div>
  )
}

export default SearchBar;