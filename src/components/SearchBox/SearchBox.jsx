import React from "react";

import "./SearchBox.css";

const SearchBox = (props) => {
  const { searchTerm, handleInput, filterSearch, filterSearchChange } = props;

  return (
    <div className="search__filter">
      <form className="search-box">
        <input
          type="text"
          placeholder="Find your beer"
          value={searchTerm}
          onInput={handleInput}
          className="search-box__input"
        />
      </form>
      <form className="minabv">
        <label htmlFor="filterSearch" className="minabvLabel">
          Min abv 5%?{" "}
        </label>
        <input
          id="filterSearch"
          type="checkbox"
          className="search-box__fuzzy-ind"
          checked={filterSearch}
          onChange={filterSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
