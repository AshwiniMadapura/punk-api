import React from "react";
import "./nav.css";
import logo from "../../assests/images/logo.png";
import SearchBox from "../SearchBox/SearchBox";

const Nav = ({ searchTerm, handleInput, filterSearch, filterSearchChange }) => {
  return (
    <nav className="nav">
      <img src={logo} className="logo" alt="" />

      <SearchBox
        // label={"search Item"}
        searchTerm={searchTerm}
        handleInput={handleInput}
        filterSearch={filterSearch}
        filterSearchChange={filterSearchChange}
      />
    </nav>
  );
};

export default Nav;
