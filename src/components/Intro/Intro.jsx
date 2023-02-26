import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Shivendra Pratap</span>
          <span>
            Web Developer with high level of experience in web development ,
            producing the Quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Shivendra1702">
            <img src={Github} alt="" />
          </a>
          <a href="http://www.linkedin.com/in/shivendra-pratap-jadia-076862225">
            <img src={LinkedIn} alt="" />
          </a>

          <a href="https://www.instagram.com/shivendrapratap1702">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "0rem", left: "20rem" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "16.1rem", left: "3.05rem" }}>
          <FloatingDiv image={Thumbup} txt1="DevOps" txt2="Developer" />
        </div>
        <div
          className="blur"
          style={{
            background: "rgb(238, 210, 255)",
            left: "17rem",
            top: "-4rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "rgb(125, 214, 255)",
            top: "5rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
