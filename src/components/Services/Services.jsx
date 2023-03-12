import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span
          style={{
            color: darkMode ? "white" : "black",
          }}
        >
          My Awesome
        </span>
        <span>Services</span>
        <span
          style={{
            color: darkMode ? "white" : "black",
          }}
        >
          Experienced working in Javascript FullStack Development ,<br />
          And Hands on with Latest Demanding DevOps Tools .
        </span>

        <a href="http://www.linkedin.com/in/shivendra-pratap-jadia-076862225">
          <button className="button s-button">Download Resume</button>
        </a>
        <div
          className="blur s-blur"
          style={{
            background: "rgb(125, 214, 255)",
            position: "relative",
            top: "-2rem",
            left: "-5rem",
          }}
        ></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          transition={transition}
          initial={{ top: "-30%" }}
          whileInView={{ top: "-10%" }}
          style={{ left: "21rem", top: "-2rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading="Frontend"
            detail="HTML, CSS, JavaScript, ReactJs, MaterialUI ,Sass"
          />
        </motion.div>
        <motion.div
          transition={transition}
          initial={{ left: "-10%" }}
          whileInView={{ left: "25%" }}
          style={{ left: "4rem", top: "2rem" }}
        >
          <Card
            emoji={Glasses}
            heading="Backend"
            detail="NodeJs, ExpressJs, MongoDB, Mongoose"
          />
        </motion.div>
        <motion.div
          transition={transition}
          initial={{ top: "60%" }}
          whileInView={{ top: "53%" }}
          style={{ left: "17.5rem", top: "14rem" }}
        >
          <Card
            emoji={Humble}
            heading="DevOps"
            detail="AWS, Kubernetes, Docker, Ansible ,Git,Terraform"
          />
        </motion.div>

        <div
          className="blur s-blur"
          style={{
            background: "var(--purple)",
            position: "relative",
            top: "5rem",
            left: "8rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
