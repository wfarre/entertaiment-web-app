import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "../App.scss";

export const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const checkIfEmailIsValid = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   const enteredEmail = e.target.value;
  //   if (checkIfEmailIsValid(enteredEmail)) {
  //     console.log("goog job");
  //   }
  //   if (!checkIfEmailIsValid(enteredEmail)) {
  //     console.log("nonononononono job");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = credentials.password;
    const checkPassword = credentials.checkPassword;
    const email = credentials.email;

    let errEmail = "";
    let errPassword = "";
    let errCheckPassword = "";

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

    if (password !== checkPassword) {
      errCheckPassword = "Passwords doesn't match";
      errPassword = "Passwords doesn't match";
    }

    if (
      errCheckPassword.length === 0 &&
      errEmail.length === 0 &&
      errPassword.length === 0
    ) {
      console.log("hello world");
      return navigate("/movies");
    }

    setErrorMsg({
      email: errEmail,
      password: errPassword,
      checkPassword: errCheckPassword,
    });
  };

  useEffect(() => {
    console.log(errorMsg);
    const emailInput = document.getElementById("email");
    const passwordinput = document.getElementById("password");
    const checkPasswordInput = document.getElementById("checkpassword");

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

    if (errorMsg.checkPassword.length !== 0) {
      checkPasswordInput.closest(".form__element").classList.add("error");
    }
  }, [errorMsg]);

  return (
    <div className="Signup">
      <header className="header">
        <div className="image-wrapper">
          <Logo />
        </div>
      </header>

      <main>
        <section className="section section--signup">
          <header className="section__header">
            <h1 className="title">Sign Up</h1>
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
              <div className="form__element">
                <input
                  className="input input--password"
                  type="password"
                  id="checkpassword"
                  name="password"
                  placeholder="Repeat password"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      checkPassword: e.target.value,
                    })
                  }
                ></input>
                <span className="error-msg">{errorMsg.checkPassword}</span>
              </div>

              <button type="submit" className="btn btn--submit">
                Create an account
              </button>
            </form>
          </div>

          <footer className="section__footer">
            <p className="text">
              Already have an account ?{" "}
              <Link to={"/Login"} className="link">
                Login
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};
