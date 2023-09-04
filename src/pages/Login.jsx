import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../App.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const checkIfEmailIsValid = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = credentials.password;
    const email = credentials.email;

    let errEmail = "";
    let errPassword = "";

    if (checkIfEmailIsValid(email)) {
      setErrorMsg({ ...errorMsg, email: "" });
      console.log(credentials);
    }
    if (!checkIfEmailIsValid(email)) {
      errEmail = "Enter a correct email";
      console.log(credentials);
    }

    if (password.length === 0) {
      errPassword = "Can't be empty";
    }

    setErrorMsg({
      email: errEmail,
      password: errPassword,
    });
  };

  useEffect(() => {
    const emailInput = document.getElementById("email");
    const passwordinput = document.getElementById("password");
    const formElements = document.querySelectorAll(".form__element");

    formElements.forEach((el) => {
      el.classList.remove("error");
    });

    if (errorMsg.password.length !== 0) {
      passwordinput.closest(".form__element").classList.add("error");
    }

    if (errorMsg.email.length !== 0) {
      emailInput.closest(".form__element").classList.add("error");
    }
  }, [errorMsg]);

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
            <form className="form form--login" onSubmit={handleSubmit}>
              <div className="form__element">
                <input
                  className="input input--email"
                  id="email"
                  name="password"
                  placeholder="Email address"
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                ></input>
                <span className="error-msg">{errorMsg.email}</span>
              </div>
              <div className="form__element">
                <input
                  className="input input--password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                ></input>
                <span className="error-msg">{errorMsg.password}</span>
              </div>
              <button type="submit" className="btn btn--submit">
                Login to your account
              </button>
            </form>
          </div>

          <footer className="section__footer">
            <p className="text">
              Don't have an account ?{" "}
              <Link to={"/signup"} className="link">
                Sign Up
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Login;
