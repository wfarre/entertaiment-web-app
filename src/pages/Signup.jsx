import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App.scss";

import { Form } from "../Components/Form/Form";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

import { login } from "../slices/authSlice";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(true);
  const [credentials, setCredentials] = useState({
    userEmail: "",
    password: "",
  });

  const handleSubmit = (error, email, password) => {
    setError(error);
    setCredentials({
      userEmail: email,
      password: password,
    });
  };

  useEffect(() => {
    console.log(error);
    if (!error) {
      const newProfile = {
        userEmail: credentials.userEmail,
        password: credentials.password,
      };
      localStorage.setItem(
        "profile" + credentials.userEmail,
        JSON.stringify(newProfile)
      );
      dispatch(login());
      navigate("/");
    }
  }, [error]);

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
            <Form checkSubmit={handleSubmit} formType={"signup"} />
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
