import React from "react";
import "./modal.css";
import check from "../../assets/icon-success.svg";
import Btn from "../Btn/Btn";

const Modal = () => {
  return (
    <div className="modal">
      <img src={check} alt="" srcset="" />
      <h2 className="modal__title">Thanks for subscribing!</h2>
      <p className="modal__text">
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <Btn />
    </div>
  );
};

export default Modal;
