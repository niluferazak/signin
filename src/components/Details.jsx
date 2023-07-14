import React, { useState } from "react";
import "./Details.css";
import { useNavigate } from "react-router-dom";
import flag from "./assets/flag.svg";
import google from "./assets/Logo icon/google.png";
import Validation from "./Validation";

const Details = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.values };
    setValues(newObj);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  const navigate = useNavigate();
  return (
    <div className="detail">
      <img src={flag} alt="flag" />
      <h1>Your details</h1>
      <div className="div1">Please provide your name and email.</div>
      <button className="btn1">
        {" "}
        <img src={google} alt="google" /> Sign up with Google
      </button>

      <div className="div2">-------------OR--------------</div>

      <div className="form">
        <form onSubmit={submitHandler}>
          <label>
            <h4>First name* </h4>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={handleInput}
          />
          {errors.firstName && 
            <p style={{ color: "red" }}>{errors.firstName}</p>
          }

          <label>
            <h4>Last name* </h4>
          </label>
          <input
            type="text"
            placeholder="Enter your Last name"
            name="lastname"
            onChange={handleInput}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

          <label>
            <h4>Email* </h4>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </form>
      </div>
      <div className="button">
        <button
          type="submit"
          className="btn2"
          onClick={() => navigate("/password")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Details;
