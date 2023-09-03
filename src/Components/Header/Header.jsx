import React, { useEffect, useState } from "react";
import "./assets/Header.scss";
import { ReactComponent as SearchIcon } from "./assets/images/icon-search.svg";

const Header = ({handleSearch}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const searchInput = e.target.value;
    console.log(e.target.value);
    setSearch(searchInput)
    handleSearch(searchInput)


  }

  // useEffect(() => {
  //   console.log(typeof search);

  //   handleSearch(search)


  // }, [search, handleChange])


  return (
    <header className="header" id="header">
      <div className="search-bar">
        <div className="search-icon"></div>
        {/* <SearchIcon className="search-icon" /> */}
        <input
          className="search-bar__input"
          placeholder="Search for movies or TV series"
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

export default Header;
