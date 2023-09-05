import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";

import { Form } from "../Components/Form/Form";
import { login } from "../slices/authSlice";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(true);

  const handleSubmit = (error) => {
    setError(error);
  };

  useEffect(() => {
    if (!error) {
      dispatch(login());
      navigate("/");
    }
  }, [error]);

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
            <Form checkSubmit={handleSubmit} formType={"login"} />
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
