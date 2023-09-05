import React, { useState } from "react";
import { checkIfEmailIsValid } from "../../utils/emailValidation";

export const Form = ({ checkSubmit, formType }) => {
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
    }
    if (!checkIfEmailIsValid(email)) {
      errEmail = "Enter a correct email";
    }

    if (password.length === 0) {
      errPassword = "Can't be empty";
    }

    if (formType === "signup") {
      if (password !== checkPassword) {
        errCheckPassword = "Passwords doesn't match";
        errPassword = "Passwords doesn't match";
      }

      const storageProfile = localStorage.getItem("profile" + email);

      if (storageProfile) {
        errEmail = "Already registered";
      }
    }

    if (formType === "login") {
      if (errEmail.length === 0 && errPassword.length === 0) {
        const storageProfile = localStorage.getItem("profile" + email);

        if (!storageProfile) {
          errEmail = "wrong email";
          errPassword = "wrong password";
        }

        if (storageProfile) {
          const savedPerson = JSON.parse(storageProfile);

          if (password !== savedPerson.password) {
            errEmail = "wrong email";
            errPassword = "wrong password";
          }
        }
      }
    }

    if (
      errCheckPassword.length === 0 &&
      errEmail.length === 0 &&
      errPassword.length === 0
    ) {
      checkSubmit(false, email, password);
    } else {
      checkSubmit(true);
    }

    setErrorMsg({
      email: errEmail,
      password: errPassword,
      checkPassword: errCheckPassword,
    });
  };

  return (
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
      {formType === "signup" && (
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
      )}

      <button type="submit" className="btn btn--submit">
        Create an account
      </button>
    </form>
  );
};
