import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="input__container">
      <div className="input__text-container">
        <p className="input__text">Email address</p>
        <p className="input__warning">Valid email required</p>
      </div>

      <input type="email" name="" id="input" placeholder="email@company.com" />
    </div>
  );
};

export default Input;
