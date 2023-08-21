import React from "react";
import "./assets/Header.scss";
import { ReactComponent as SearchIcon } from "./assets/images/icon-search.svg";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="search-bar">
        <div className="search-icon"></div>
        {/* <SearchIcon className="search-icon" /> */}
        <input
          className="search-bar__input"
          placeholder="Search for movies or TV series"
        />
      </div>
    </header>
  );
};

export default Header;
