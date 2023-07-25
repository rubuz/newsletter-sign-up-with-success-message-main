import React from "react";
import checkIcon from "../../assets/icon-list.svg";
import "./list.css";

const List = () => {
  return (
    <>
      <ul className="list">
        <li className="list__item">
          <img src={checkIcon} alt="" />
          <p className="list__text">
            Product discovery and building what matters
          </p>
        </li>
        <li className="list__item">
          <img src={checkIcon} alt="" />
          <p className="list__text">
            Measuring to ensure updates are a success
          </p>
        </li>
        <li className="list__item">
          <img src={checkIcon} alt="" />
          <p className="list__text">And much more!</p>
        </li>
      </ul>
    </>
  );
};

export default List;
