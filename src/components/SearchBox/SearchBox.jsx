import React from "react";

import "./SearchBox.css";

const SearchBox = props => {
  const { searchTerm, handleInput,filterSearch,filterSearchChange } = props;

  // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search__filter">
    <form className="search-box">
      {/* <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label> */}
      <input type="text" placeholder="search item" value={searchTerm} 
      onInput={handleInput} className="search-box__input"/>
    </form>
    <form className="minabv">
    <label htmlFor="filterSearch" >Min abv 5%? </label>
      <input id="filterSearch" type="checkbox" className='search-box__fuzzy-ind'
          checked={filterSearch}
          onChange={filterSearchChange}
           />
    </form>
      {/* <p className='search-bar__results'>{searchResults}</p> */}
    </div>
  );
};

export default SearchBox;