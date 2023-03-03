import React, { useContext } from "react";
import "./Works.css";
import React_image from "../../img/react_s.png";
import Nodejs_img from "../../img/nodejs.png";
import Docker from "../../img/docker_i.png";
import Jenkins from "../../img/jenkins.png";
import Devops from "../../img/devops.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span
          style={{
            color: darkMode ? "white" : "black",
          }}
        >
          Works For All of these
        </span>
        <span>Technologies</span>
        <span
          style={{
            color: darkMode ? "white" : "black",
          }}
        >
          Experienced working in React , FireBase ,<br />
          And Hands on with Latest Demanding DevOps Tools ,<br />
          Such as Docker , Kubernetes , Ansible ,Terraform etc.
        </span>

        <button className="button s-button">Hire Me</button>
        <div
          className="blur s-blur"
          style={{
            background: "rgb(180, 231, 255)",
            position: "relative",
            top: "-5rem",
            left: "-4rem",
          }}
        ></div>
      </div>
      {/* right side*/}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Docker} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jenkins} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React_image} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs_img} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Devops} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
