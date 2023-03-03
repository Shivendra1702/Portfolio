import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" width="100%" />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://github.com/Shivendra1702">
            <Github color="white" size="3rem" />
          </a>
          <a href="http://www.linkedin.com/in/shivendra-pratap-jadia-076862225">
            <Linkedin color="white" size="3rem" />
          </a>

          <a href="https://www.instagram.com/shivendrapratap1702">
            <Insta color="white" size="3rem" />
          </a>
        </div>
        <span>shivendrapratapjadia@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
