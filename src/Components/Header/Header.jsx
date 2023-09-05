import React, { useState } from "react";
import "./assets/Header.scss";

const Header = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
    handleSearch(searchInput);
  };

  return (
    <header className="header" id="header">
      <div className="search-bar">
        <div className="search-icon"></div>
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
