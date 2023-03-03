import React from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            Hey! I Am
          </span>
          <span>Shivendra Pratap</span>
          <span
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            Web Developer with high level of experience in web development ,
            producing the Quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          transition={transition}
          initial={{ left: "-35%" }}
          whileInView={{ left: "-20%" }}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          className="fd1"
          transition={transition}
          initial={{ top: "-20%" }}
          whileInView={{ top: "0%" }}
          style={{ top: "0rem", left: "20rem" }}
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          className="fd2"
          transition={transition}
          initial={{ left: "-20%" }}
          whileInView={{ left: "11%" }}
          style={{ top: "16.1rem", left: "3.05rem" }}
        >
          <FloatingDiv image={Thumbup} txt1="DevOps" txt2="Developer" />
        </motion.div>
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
