import React from "react";
import "./Card.css";
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shivendrapratapjadia@gmail.com"
          target="_blank"
        >
          <button className="i-button button">Know More</button>
        </a>
    </div>
  );
};

export default Card;
