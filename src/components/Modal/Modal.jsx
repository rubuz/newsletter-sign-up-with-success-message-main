import React from "react";
import "./modal.css";
import check from "../../assets/icon-success.svg";

const Modal = ({ email, onDismiss }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <img src={check} alt="icon of a checkmark" />
        <h2 className="modal__title">Thanks for subscribing!</h2>
        <p className="modal__text">
          A confirmation email has been sent to <span>{email}</span>.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button className="btn" text="Dismiss message" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  );
};

export default Modal;
