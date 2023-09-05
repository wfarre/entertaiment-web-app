import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./assets/Navbar.scss";

import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as NavMovies } from "./assets/images/icon-nav-movies.svg";
import { ReactComponent as NavSeries } from "./assets/images/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmark } from "./assets/images/icon-nav-bookmark.svg";
import { ReactComponent as NavHome } from "./assets/images/icon-nav-home.svg";
import avatar from "./assets/images/image-avatar.png";

import { logout } from "../../slices/authSlice";

const Navbar = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              className={
                page === "main"
                  ? "nav__item__link nav__item__link--navhome active"
                  : "nav__item__link nav__item__link--navhome"
              }
            >
              <NavHome className="icon" />
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/movies"
              className={
                page === "movies"
                  ? "nav__item__link nav__item__link--navmovies active"
                  : "nav__item__link nav__item__link--navmovies"
              }
            >
              <NavMovies className="icon" />
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to={"/series"}
              className={
                page === "series"
                  ? "nav__item__link nav__item__link--navseries active"
                  : "nav__item__link nav__item__link--navseries"
              }
            >
              <NavSeries className="icon" />
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={
                page === "bookmarked"
                  ? "nav__item__link active"
                  : "nav__item__link "
              }
              to={"/bookmarked"}
            >
              <NavBookmark className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      <footer className="navbar__footer">
        <button className="avatar">
          <img
            src={avatar}
            alt="avatar"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          />
        </button>
      </footer>
    </nav>
  );
};

export default Navbar;
