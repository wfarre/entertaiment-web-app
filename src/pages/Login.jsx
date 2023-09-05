import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import { Form } from "../Components/Form/Form";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(true);

  const handleSubmit = (error) => {
    setError(error);
  };

  useEffect(() => {
    if (!error) {
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
