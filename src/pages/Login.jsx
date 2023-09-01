import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../App.scss";

const Login = () => {
  return (
    <div className="Login">
      <header className="header">
        <div className="image-wrapper">
          <Logo />
        </div>
      </header>

      <main>
        <section className="section section--login">
          <header className="section__header">
            <h1 className="title">Login</h1>
          </header>

          <div className="section__main">
            <form className="form form--login">
              <input
                className="input input--email"
                id="email"
                name="password"
                placeholder="Email address"
              ></input>
              <input
                className="input input--password"
                id="password"
                name="password"
                placeholder="Password"
              ></input>
              <button type="submit" className="btn btn--submit">
                Login to your account
              </button>
            </form>
          </div>

          <footer className="section__footer">
            <p className="text">
              Don't have an account ? <Link className="link">Sign Up</Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Login;
