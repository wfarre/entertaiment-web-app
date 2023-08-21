import React from "react";
import "./assets/Navbar.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as NavMovies } from "./assets/images/icon-nav-movies.svg";
import { ReactComponent as NavSeries } from "./assets/images/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmark } from "./assets/images/icon-nav-bookmark.svg";
import { ReactComponent as NavHome } from "./assets/images/icon-nav-home.svg";
import avatar from "./assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="navbar__header">
        <div className="logo">
          <Logo className="icon" />
        </div>
      </header>

      <div className="navbar__main">
        <ul className="nav">
          <li className="nav__item">
            <Link
              to="/"
              className="nav__item__link nav__item__link--navhome active"
            >
              <NavHome className="icon" />
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/movies"
              className="nav__item__link nav__item__link--navmovies"
            >
              <NavMovies className="icon" />
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to={"/series"}
              className="nav__item__link nav__item__link--navseries"
            >
              <NavSeries className="icon" />
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item__link " to={"/bookmarked"}>
              <NavBookmark className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      <footer className="navbar__footer">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </footer>
    </nav>
  );
};

export default Navbar;
