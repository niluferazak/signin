import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
import "./Details.css";
import flag from "./assets/flag.svg";
import google from "./assets/Logo icon/google.png";

const Details = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formErrors = Validation(values);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      navigate("/password");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="detail">
      <img src={flag} alt="flag" />
      <h1>Your details</h1> <div>Please provide your name and email.</div>
      <button className="btn1">
        <img src={google} alt="google" /> Sign up with Google
      </button>
      <div className="div2">-------------OR--------------</div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <label>
            <h4>First name*</h4>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={handleInput}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
          <label>
            <h4>Last name*</h4>
          </label>
          <input
            type="text"
            placeholder="Enter your Last name"
            name="lastName"
            onChange={handleInput}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          <label>
            <h4>Email*</h4>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <div className="button">
            <button className="btn2">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Details;
