import React, { useState } from "react";
import "./Password.css";
import { useNavigate } from "react-router-dom";
import pswrd from "./assets/lock.svg";
import Validation from "./Validation";

const Password = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
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
      navigate("/teams");
    }
  };
  const navigate = useNavigate();

  return (
    <div className="password">
      <img src={pswrd} alt="password" />
      <h1>Choose a password</h1>
      <div className="div1">Must be atleast 8 characters.</div>

      <div className="form">
        <form onSubmit={submitHandler}>
          <label>
            <h4>Password* </h4>
          </label>
          <input
            type="password"
            placeholder="Choose a password"
            name="password"
            onChange={handleInput}
          />

          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <label>
            <h4>Confirm password* </h4>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleInput}
          />

          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </form>
      </div>
      <div className="button">
        <button className="btn2"
        onClick={submitHandler}>Continue</button>
      </div>
    </div>
  );
};

export default Password;
