import React, { useState } from "react";
import "./input.css";

const Input = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (isValid) {
      onSubscribe(email);
    }
  };

  return (
    <div className="input__container">
      <div className="input__text-container">
        <p className="input__text">Email address</p>
        {!isValid && <p className="input__warning">Valid email required</p>}
      </div>
      <input
        type="email"
        name="email"
        id="input"
        className={!isValid ? "input not-valid" : "input"}
        placeholder="email@company.com"
        value={email}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleSubscribe}>
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};

export default Input;
